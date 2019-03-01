var pagesBase = require('./common/pages.config');
var _ = require('lodash');
module.exports = function(options) {
    return pagesBase('dark', _.merge({}, {profileName: 'pages-dark'}, _.merge({}, options, {
        filter: 'dashboard$', // only dashboard supports dark mode now.
    })));
}
