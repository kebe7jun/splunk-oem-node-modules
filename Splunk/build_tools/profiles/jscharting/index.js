define(function(require) {
    var splunk = require('splunk');
    splunk.jschartingUtils = require('util/jscharting_utils');
    splunk.JSCharting = require('@splunk/charting');
    return splunk.JSCharting;
});
