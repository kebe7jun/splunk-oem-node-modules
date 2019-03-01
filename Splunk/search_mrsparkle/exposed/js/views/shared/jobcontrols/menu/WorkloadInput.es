import _ from 'underscore';
import BaseView from 'views/Base';
import ControlGroup from 'views/shared/controls/ControlGroup';

export default BaseView.extend({
    /**
    * @param {Object} options {
    *    model: {
    *        user: <models.shared.User>
    *        inmem: <models.search.Job>
    *    },
    *    collection: {
    *        workloadManagementStatus: <collections.services.admin.workload_management>
    *    },
    */
    moduleId: module.id,
    initialize(options = {}) {
        BaseView.prototype.initialize.call(this, options);

        this.helpText = _('Select a workload pool for this search job.').t();
        if (!this.model.inmem.isRunning()) {
            this.helpText = _('Workload pool can only be selected for running search jobs.').t();
        }

        this.children.workloadPool = new ControlGroup({
            label: _('Workload Pool').t(),
            help: this.helpText,
            controlClass: 'input-append',
            controls: [{
                type: 'SyntheticSelect',
                options: {
                    modelAttribute: 'workload_pool',
                    model: this.model.inmem.entry.content,
                    items: this.collection.workloadManagementStatus.getDropdownOptions(
                        _.isEmpty(this.model.inmem.entry.content.get('workload_pool')),
                    ),
                    toggleClassName: 'btn',
                    popdownOptions: { attachDialogTo: 'body' },
                },
            }],
        });
    },
    render() {
        if (!this.el.innerHTML) {
            this.$el.html(this.compiledTemplate());
            this.children.workloadPool.render().appendTo(this.$('.workloadPool-placeholder'));

            if (!this.model.user.canListAndSelectWorkloadPools(this.collection.workloadManagementStatus)) {
                this.$('.workloadPool-placeholder').hide();
            } else if (!this.model.inmem.isRunning()) {
                this.$('.workloadPool-placeholder .dropdown-toggle').addClass('disabled');
            }
        }
        return this;
    },
    template: `
        <div class='workloadPool-placeholder'></div>
    `,
});
