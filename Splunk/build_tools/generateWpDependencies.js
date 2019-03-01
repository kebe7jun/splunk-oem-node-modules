/*
Before running this script
    npm install wrench
    brew install gnu-tar
    must have npm 3 installed globally
 */
var fs = require('fs');
var os = require('os');
var path = require('path');
var wrench = require('wrench');
var version = '4.0.1';
const execSync = require('child_process').execSync;

const uploadArg = '--upload';

function rmrf(path) {
    wrench.rmdirSyncRecursive(path, true);
}

function mkdir(path) {
    wrench.mkdirSyncRecursive(path);
}

var nodeModulePath = path.join(process.env.SPLUNK_HOME, 'lib', 'node_modules');
var contribPath = path.join(process.env.SPLUNK_SOURCE, 'contrib');

// 1. clean out contrib packages
fs.readdirSync(contribPath).filter(function(file) {
    try {
        return fs.statSync(path.join(contribPath, file, 'package')).isDirectory();
    } catch(e) {
        return false;
    }
}).forEach(function(dir) {
    var mod = dir.split('-');
    mod = mod.slice(0, mod.length-1).join('-');
    if (mod === "node" || fs.existsSync(path.join(nodeModulePath, mod))) {
        try {
            fs.unlinkSync(path.join(contribPath, dir, '.splunk-done'));
            console.log('delete .splunk_done for ', dir);
        } catch(e) {
        }
    }
});

// 2. start node_module fresh
rmrf(nodeModulePath);

// 3. ensure we don't build wp modules
mkdir(path.join(contribPath, 'wp-' + version));
fs.writeFileSync(path.join(contribPath, 'wp-' + version, '.splunk-done'), 'prevent build');

//buildit
execSync(path.join(contribPath, 'buildit.py') + ' -j4', {stdio:[0,1,2], cwd: contribPath});

// 4. setup temporary directory
var tmpDir = path.join(os.tmpdir(), 'wp');
rmrf(tmpDir);
var cleanNodeModules = path.join(tmpDir, 'cleanNodeModules', 'node_modules');
process.env.NODE_PATH = cleanNodeModules;
wrench.mkdirSyncRecursive(cleanNodeModules);
wrench.copyDirSyncRecursive(nodeModulePath, cleanNodeModules, {forceDelete: true});
var wpNodeModules = path.join(tmpDir, 'node_modules');
wrench.mkdirSyncRecursive(wpNodeModules);
wrench.copyDirSyncRecursive(nodeModulePath, wpNodeModules, {forceDelete: true});
fs.writeFileSync(path.join(tmpDir, 'package.json'), fs.readFileSync(path.join(process.env.SPLUNK_SOURCE, 'web', 'package.json')));
fs.writeFileSync(path.join(tmpDir, 'npm-shrinkwrap.json'), fs.readFileSync(path.join(process.env.SPLUNK_SOURCE, 'web', 'npm-shrinkwrap.json')));
fs.writeFileSync(path.join(tmpDir, '.npmrc'), fs.readFileSync(path.join(process.env.SPLUNK_SOURCE, 'web', '.npmrc')));

// 5. install the node modules needed
process.env.NODE_PATH =
execSync('npm install --production', {stdio:[0,1,2], cwd: tmpDir});

// 6. remove node modules already installed from contrib
fs.readdirSync(cleanNodeModules).forEach(function(dir) {
    rmrf(path.join(wpNodeModules, dir));
});

// 7. make the tarball
execSync('/usr/local/opt/gnu-tar/libexec/gnubin/tar -cvzf wp-' + version + '.tar.gz node_modules/', {stdio:[0,1,2], cwd: tmpDir});

const packageName = `wp-${version}.tar.gz`;
const packagePath = path.join(tmpDir, packageName);
console.log("your package is found in:",  packagePath);
console.log(`package is generated, size: ${fs.statSync(packagePath).size / 1000000 } MB. `);

if (process.argv.find(arg => arg === uploadArg)) {
    const srcPath = process.env.SPLUNK_SOURCE;
    const contribPath = path.join(srcPath, 'contrib');
    execSync(`mv ${packagePath} ${contribPath}`, { stdio: [0, 1, 2] });
    execSync(`./upload_archive.py ${packageName}`, { stdio: [0, 1, 2], cwd: contribPath });

    console.log('Next steps:');
    console.log('  - copy SHA1');
    console.log('  - open $SPLUNK_SOURCE/contrib/buildit.py');
    console.log('  - search for "wp"');
    console.log(`  - update version number to ${version}`);
    console.log('  - paste SHA1');
    console.log('  - commit changes');
}
