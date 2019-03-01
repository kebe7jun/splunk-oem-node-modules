/**
 * @author jszeto
 * @date 2/20/15
 *
 * Represents a list of Indexes
 *
 * Cloud-specific endpoint that is only available if the Cloud Administration app has been installed
 * (https://github.com/SplunkStorm/cloud_apps)
 * 
 * The response format should be a subset of the response from  the services/data/indexes endpoint
 */
define(
    [
        'underscore',
        "models/indexes/cloud/Index",
        "collections/services/data/Indexes",
        'splunk.util'
    ],
    function(
        _,
        IndexModel,
        BaseIndexesCollection,
        splunkUtil
    ) {
        return BaseIndexesCollection.extend({
            model: IndexModel,
            url: 'cluster_blaster_indexes/sh_indexes_manager',
            initialize: function() {
                BaseIndexesCollection.prototype.initialize.apply(this, arguments);
            },
            isDataArchiveEnabled: function() {
                // Getting the enableDataArchive from the main index is reliable as it 
                // cannot be deleted by customers.
                var mainIndex = this.findByEntryName('main');
                return mainIndex && splunkUtil.normalizeBoolean(
                    mainIndex.entry.content.get('archiver.enableDataArchive'));
            },
            getMaxDataArchiveRetentionPeriod: function() {
                var mainIndex = this.findByEntryName('main');
                return mainIndex && mainIndex.entry.content.get('archiver.maxDataArchiveRetentionPeriod');
            }
        });
    }
);
