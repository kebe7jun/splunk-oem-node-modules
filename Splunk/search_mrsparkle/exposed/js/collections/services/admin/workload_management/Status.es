/**
 *
 * Status Collection for Workload Management
 */

import _ from 'underscore';
import SplunkDsBaseCollection from 'collections/SplunkDsBase';
import generalUtils from 'util/general_utils';
import splunkUtil from 'splunk.util';

export default SplunkDsBaseCollection.extend({
    url: 'workloads/status',
    getGeneral(attr) {
        if (_.isUndefined(this.models[0])) {
            if (attr === 'error_message') return _('error returning message').t();
            return false;
        }
        return this.models[0].entry.content.get('general')[attr];
    },
    getErrorMessage() {
        return this.getGeneral('error_message');
    },
    getShortErrorMessage() {
        const keyword = 'error=';
        let msg = this.getErrorMessage();
        if (msg.indexOf(keyword) > 0) {
            msg = msg.substr(msg.indexOf(keyword) + keyword.length);
            msg = msg.charAt(0).toUpperCase() + msg.slice(1);
        }
        return msg;
    },
    isEnabled() {
        return generalUtils.normalizeBoolean(this.getGeneral('enabled'));
    },
    isSupported() {
        return generalUtils.normalizeBoolean(this.getGeneral('isSupported'));
    },
    getDropdownOptions(includeEmptyOption = false) {
        this.workloadPoolOptions = [];
        if (_.isUndefined(this.models[0])) {
            return this.workloadPoolOptions;
        }
        if (includeEmptyOption) {
            this.workloadPoolOptions.push({
                label: _('Policy-Based Pool').t(),
                value: '',
                description: _('Based on assigned policy').t(),
            });
        }
        _.each(this.models[0].entry.content.get('workload-pools'), (model, key) => {
            const cpu = (!_.isUndefined(model.cpu_weight)) ? model.cpu_weight : '';
            const mem = (!_.isUndefined(model.mem_weight)) ? model.mem_weight : '';
            if (key === this.getDefaultPoolName()) {
                this.workloadPoolOptions.push({
                    label: splunkUtil.sprintf(_('%s (default)').t(), key),
                    value: key,
                    description: splunkUtil.sprintf(_('CPU: %s%, Memory: %s%').t(), cpu, mem),
                });
            } else if (key !== this.getIngestPoolName()) {
                this.workloadPoolOptions.push({
                    label: key,
                    value: key,
                    description: splunkUtil.sprintf(_('CPU: %s%, Memory: %s%').t(), cpu, mem),
                });
            }
        });
        return this.workloadPoolOptions;
    },
    getDefaultPoolName() {
        return this.getGeneral('default_pool');
    },
    getIngestPoolName() {
        return this.getGeneral('ingest_pool');
    },
});

