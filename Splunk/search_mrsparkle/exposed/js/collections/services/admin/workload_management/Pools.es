/**
 *
 * Pools Collection for Workload Management
 */

import _ from 'underscore';
import Model from 'models/services/admin/workload_management/Pool';
import SplunkDsBaseCollection from 'collections/SplunkDsBase';

export default SplunkDsBaseCollection.extend({
    url: 'workloads/pools',
    model: Model,

    initialize(...args) {
        this.model = this.model || {};
        SplunkDsBaseCollection.prototype.initialize.apply(this, args);
    },

    fetch(options = {}) {
        const extendedOptions = Object.assign(options, {});
        extendedOptions.data = Object.assign(options.data || {}, {
            count: -1,
        });

        return SplunkDsBaseCollection.prototype.fetch.call(this, options);
    },

    preparePools() {
        if (this.length <= 0) {
            return [];
        }
        this.resetDefaultPool();
        this.resetIngestPool();
        return this.filterOutGeneral();
    },

    updatePool(poolModel, data) {
        const model = _.isEmpty(poolModel) ? new Model() : poolModel;
        model.entry.content.clear();
        model.entry.content.set(data);

        return model.save();
    },

    deletePool(model) {
        return model.destroy();
    },

    // mark default pool
    resetDefaultPool() {
        const generalModel = this.findByEntryName('general');
        const defaultPoolName = generalModel.entry.content.get('default_pool');
        this.each((model) => {
            model.set('isDefaultPool', model.entry.get('name') === (defaultPoolName));
        });
    },

    // mark ingest pool
    resetIngestPool() {
        const generalModel = this.findByEntryName('general');
        const ingestPoolName = generalModel.entry.content.get('ingest_pool');
        this.each((model) => {
            model.set('isIngestPool', false);
            if (model.entry.get('name') === (ingestPoolName)) {
                model.set('isIngestPool', true);
            }
        });
    },

    // returns an array of pools except general.
    filterOutGeneral() {
        return this.filter(model =>
            model.entry.get('name') !== 'general' &&
            model.entry.get('name') !== 'workload_rules_order',
        );
    },

    // returns an array of pools except general and Ingest.
    filterOutGeneralIngest() {
        return this.filter(model =>
            model.entry.get('name') !== 'general' &&
            model.entry.get('name') !== this.getIngestPoolName() &&
            model.entry.get('name') !== 'workload_rules_order',
        );
    },

    getDefaultPoolName() {
        if (this.length <= 0) {
            return '';
        }
        return this.findByEntryName('general').entry.content.get('default_pool');
    },

    getIngestPoolName() {
        if (this.length <= 0) {
            return '';
        }
        return this.findByEntryName('general').entry.content.get('ingest_pool');
    },

});
