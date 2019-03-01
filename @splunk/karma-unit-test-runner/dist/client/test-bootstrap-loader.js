'use strict';

/* eslint-disable */

//delay karma start
window.__karma__.loaded = function () {};

//because the initial compilation can take minutes, we need to keep Karma's connection intact,
// otherwise browserNoActivityTimeout will be exceeded.
window.__karma__.scriptKeepAliveId = setInterval(function () {
    window.__karma__.info({ type: 'debug' }); //send a fake/empty logging event (somewhat hacky, doesn't log anything)
}, 1000);

//load the bootstrap bundle (will load then load test and support files)
var commonsChunkScript = document.createElement('script');
commonsChunkScript.setAttribute('src', '/webpack/<bootstrap>/test-bootstrap-bundle.js');
document.body.appendChild(commonsChunkScript);