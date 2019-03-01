import SplunkDBaseModel from 'models/SplunkDBase';

export default SplunkDBaseModel.extend({
    urlRoot: 'services/workloads/pools',
    url: 'workloads/pools',

    getCpuWeight() {
        return this.entry.content.get('cpu_weight') || '';
    },
    getMemWeight() {
        return this.entry.content.get('mem_weight') || '';
    },
    getPoolName() {
        return this.entry.get('name');
    },
    isDefaultPool() {
        return this.get('isDefaultPool');
    },
    isIngestPool() {
        return this.get('isIngestPool');
    },
    isApplied() {
        return this.get('isApplied');
    },
});