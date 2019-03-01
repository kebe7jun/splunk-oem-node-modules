import _ from 'underscore';
import Backbone from 'backbone';
import React from 'react';
import PropTypes from 'prop-types';
import splunkUtil from 'splunk.util';
import WorkloadManagementPage from 'views/workload_management/WorkloadManagementPage';
import { createDocsURL } from '@splunk/splunk-utils/url';
import Link from '@splunk/react-ui/Link';

class WorkloadManagementPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getDefaultState();
        this.props.pools.on('sync', this.updatePoolsTable);
        this.props.rules.on('sync', this.updateRulesTable);
        this.props.status.on('sync', this.updateStatus);
    }

    getDefaultState = () => ({
        title: _('Workload Management').t(),
        description: _('View, edit, and apply configurations for workload management.').t(),
        learnMore: this.getLearnMoreLink(),
        pools: this.props.pools.preparePools(),
        rules: this.props.rules.prepareRules(),
        canEditWorkloadPools: this.props.user.hasCapability('edit_workload_pools'),
        canEditWorkloadRules: this.props.user.hasCapability('edit_workload_rules'),
        isEnabled: this.props.status.isEnabled(),
        isSupported: this.props.status.isSupported(),
        statusErrorMessage: this.props.status.getShortErrorMessage(),
        missingTablesMessage: this.getMissingTablesMessage(),
        getDefaultPoolName: this.props.pools.getDefaultPoolName(),
        getIngestPoolName: this.props.pools.getIngestPoolName(),
        poolUpdateModalOpen: false,
        poolUpdateModalState: this.getDefaultPoolUpdateModalState(),
        handleEnableDisableClick: this.handleEnableDisableClick,
        handlePoolUpdateModalOpen: this.handlePoolUpdateModalOpen,
        handlePoolUpdateModalClose: this.handlePoolUpdateModalClose,
        handlePoolUpdateModalOpenEdit: this.handlePoolUpdateModalOpenEdit,
        handlePoolUpdateModalCheckbox: this.handlePoolUpdateModalCheckbox,
        handlePoolUpdateModalTextChange: this.handlePoolUpdateModalTextChange,
        handlePoolUpdateModalSubmit: this.handlePoolUpdateModalSubmit,
        poolDeleteModalOpen: false,
        poolDeleteModalState: this.getDefaultPoolDeleteModalState(),
        handlePoolDeleteModalOpen: this.handlePoolDeleteModalOpen,
        handlePoolDeleteModalClose: this.handlePoolDeleteModalClose,
        handlePoolDeleteModalSubmit: this.handlePoolDeleteModalSubmit,
        ruleUpdateModalOpen: false,
        ruleUpdateModalState: this.getDefaultRuleUpdateModalState(),
        handleRuleUpdateModalOpen: this.handleRuleUpdateModalOpen,
        handleRuleUpdateModalClose: this.handleRuleUpdateModalClose,
        handleRuleUpdateModalOpenEdit: this.handleRuleUpdateModalOpenEdit,
        handleRuleUpdateModalTextChange: this.handleRuleUpdateModalTextChange,
        handleRuleUpdateModalSubmit: this.handleRuleUpdateModalSubmit,
        ruleDeleteModalOpen: false,
        ruleDeleteModalState: this.getDefaultRuleDeleteModalState(),
        handleRuleDeleteModalOpen: this.handleRuleDeleteModalOpen,
        handleRuleDeleteModalClose: this.handleRuleDeleteModalClose,
        handleRuleDeleteModalSubmit: this.handleRuleDeleteModalSubmit,
        messageModalState: this.getDefaultMessageModalState(),
        handleMessageModalClose: this.handleMessageModalClose,
    })

    getLearnMoreLink = () => (
        <Link to={createDocsURL('learnmore.workload_management')} openInNewContext>
            {_('Learn more').t()}
        </Link>
    )

    getMissingTablesMessage = () => {
        let missingTables = '';
        let addButtons = '';
        let newTables = '';
        const noPools = (_.size(this.props.pools.preparePools()) === 0);
        const noRules = (_.size(this.props.rules) === 0);
        const canEditWorkloadPools = this.props.user.hasCapability('edit_workload_pools');
        const canEditWorkloadRules = this.props.user.hasCapability('edit_workload_rules');

        if (noPools && noRules) {
            missingTables = 'workload pools or workload rules';
        } else if (noPools) {
            missingTables = 'workload pools';
        } else if (noRules) {
            missingTables = 'workload rules';
        }

        if (noPools && noRules && canEditWorkloadPools && canEditWorkloadRules) {
            addButtons = 'Add buttons';
            newTables = 'workload pools and workload rules';
        } else if (noPools && !noRules && canEditWorkloadPools) {
            addButtons = 'Add Workload Pool button';
            newTables = 'workload pools';
        } else if (noRules && !noPools && canEditWorkloadRules) {
            addButtons = 'Add Workload Rule button';
            newTables = 'workload rules';
        }
        const status = _.isEmpty(missingTables) ? '' : `There are no ${missingTables}. `;
        const action = (_.isEmpty(addButtons) || _.isEmpty(newTables)) ? '' :
        `Use the ${addButtons} to create new ${newTables}.`;

        return splunkUtil.sprintf(_('%s%s').t(), status, action);
    }

    getDefaultPoolUpdateModalState = () => ({
        name: '',
        title: '',
        cpu_weight: '',
        mem_weight: '',
        default_pool: false,
        ingest_pool: false,
        changed: false,
    })

    getDefaultPoolDeleteModalState = () => ({
        poolModel: undefined,
    })

    getDefaultRuleUpdateModalState = () => ({
        name: '',
        title: '',
        predicate: '',
        workload_pool: '',
        available_pools: [],
        changed: false,
    })

    getDefaultRuleDeleteModalState = () => ({
        ruleModel: undefined,
    })

    getDefaultMessageModalState = () => ({
        open: false,
        title: '',
        message: '',
        type: 'error',
        closeable: true,
    })

    setWaitView = (modalStateName) => {
        const newModalState = {};
        newModalState[modalStateName] = {
            ...this.state[modalStateName],
            wait: true,
        };
        this.setState(newModalState);
    }

    updatePoolsTable = () => {
        this.setState({
            pools: this.props.pools.preparePools(),
            getDefaultPoolName: this.props.pools.getDefaultPoolName(),
            getIngestPoolName: this.props.pools.getIngestPoolName(),
            missingTablesMessage: this.getMissingTablesMessage(),
        });
    }

    updateRulesTable = () => {
        this.setState({
            rules: this.props.rules.prepareRules(),
            missingTablesMessage: this.getMissingTablesMessage(),
        });
    }

    updateStatus = () => {
        if (this.state.isEnabled !== this.props.status.isEnabled()) {
            this.setState({
                isEnabled: this.props.status.isEnabled(),
            });
        }
        if (this.state.statusErrorMessage !== this.props.status.getShortErrorMessage()) {
            this.setState({
                statusErrorMessage: this.props.status.getShortErrorMessage(),
            });
        }
    }

    handleEnableDisableClick = (e, { value }) => {
        if (value === true) {
            this.handleDisable();
        } else {
            this.handleEnable();
        }
    }

    handleEnable = () => {
        const modalTitle = _('Enabling Workload Management').t();
        this.props.enable.save().done(() => {
            this.props.status.fetch().done(() => {
                this.setState({
                    isEnabled: this.props.status.isEnabled(),
                });
                if (this.props.status.isEnabled()) {
                    this.handleMessageModalOpen(
                        modalTitle,
                        _('Successfully enabled workload management.').t(),
                        'success',
                        true,
                    );
                } else {
                    this.handleMessageModalOpen(
                        modalTitle,
                        this.props.status.getShortErrorMessage(),
                        'error',
                        true,
                    );
                }
            });
        }).fail((response) => {
            let modalErrorMsg = _('Error enabling workload management.').t();
            if (response.responseJSON.messages && response.responseJSON.messages.length > 0) {
                const messageObj = response.responseJSON.messages[0];
                modalErrorMsg = splunkUtil.sprintf(_('%s: %s').t(), messageObj.type, messageObj.text);
            }
            this.handleMessageModalOpen(
                modalTitle,
                modalErrorMsg,
                'error',
                true,
            );
        });
    }

    handleDisable = () => {
        const modalTitle = _('Disabling Workload Management').t();
        this.props.disable.save().done(() => {
            this.props.status.fetch().done(() => {
                this.setState({
                    isEnabled: this.props.status.isEnabled(),
                });
                this.handleMessageModalOpen(
                    modalTitle,
                    _('Successfully disabled workload management').t(),
                    'success',
                    true,
                );
            });
        }).fail((response) => {
            let modalErrorMsg = _('Error disabling workload management').t();
            if (response.responseJSON.messages && response.responseJSON.messages.length > 0) {
                const messageObj = response.responseJSON.messages[0];
                modalErrorMsg = splunkUtil.sprintf(_('%s: %s').t(), messageObj.type, messageObj.text);
            }
            this.handleMessageModalOpen(
                modalTitle,
                modalErrorMsg,
                'error',
                true,
            );
        });
    }

    handlePoolUpdateModalOpen = () => {
        const obj = {
            title: _('New Workload Pool').t(),
        };
        this.setState({
            poolUpdateModalOpen: true,
            poolUpdateModalState: _.extend(this.getDefaultPoolUpdateModalState(), obj),
        });
    }

    handlePoolUpdateModalClose = () => {
        this.setState({
            poolUpdateModalOpen: false,
            poolUpdateModalState: this.getDefaultPoolUpdateModalState(),
        });
    }

    handlePoolUpdateModalOpenEdit = (e, { value }) => {
        const poolModel = value;
        const obj = {
            model: poolModel,
            edit: true,
            title: splunkUtil.sprintf(_('Edit Workload Pool: %s').t(), poolModel.getPoolName()),
            name: poolModel.getPoolName(),
            cpu_weight: poolModel.getCpuWeight().toString(),
            mem_weight: poolModel.getMemWeight().toString(),
            default_pool: poolModel.isDefaultPool(),
            ingest_pool: poolModel.isIngestPool(),
        };
        this.setState({
            poolUpdateModalOpen: true,
            poolUpdateModalState: obj,
        });
    }

    handlePoolUpdateModalTextChange = (e, { value, name }) => {
        this.validatePoolFields([{
            name,
            value,
        }]);
    }

    // called when field looses focus & on submit
    validatePoolFields = (fields) => {
        const obj = this.state.poolUpdateModalState;
        obj.changed = true;
        _.each(fields, (field) => {
            obj[field.name] = field.value;
            switch (field.name) {
                case 'name':
                    if (_.isEmpty(field.value)) {
                        obj.nameErrorMsg = _('Name must be entered.').t();
                    } else if (field.value === 'general') {
                        obj.nameErrorMsg = _('general is a reserved keyword.').t();
                    } else if (field.value.indexOf(' ') >= 0) {
                        obj.nameErrorMsg = _('Name cannot have spaces.').t();
                    } else if (field.value.indexOf(':') >= 0) {
                        // SPL-158200
                        obj.nameErrorMsg = _('Name cannot have columns.').t();
                    } else {
                        delete obj.nameErrorMsg;
                    }
                    break;
                case 'cpu_weight':
                    if (_.isEmpty(field.value.match(/^[0-9]+$/)) || field.value === '0') {
                        obj.cpuWeightErrorMsg = _('CPU weight must be a positive integer.').t();
                    } else {
                        delete obj.cpuWeightErrorMsg;
                    }
                    break;
                case 'mem_weight':
                    if (_.isEmpty(field.value.match(/^[0-9]+$/)) || field.value === '0') {
                        obj.memWeightErrorMsg = _('Memory weight must be a positive integer.').t();
                    } else {
                        delete obj.memWeightErrorMsg;
                    }
                    break;
                default:
                    break;
            }
        });
        obj.nameError = !_.isEmpty(obj.nameErrorMsg);
        obj.cpuWeightError = !_.isEmpty(obj.cpuWeightErrorMsg);
        obj.memWeightError = !_.isEmpty(obj.memWeightErrorMsg);

        this.setState({
            poolUpdateModalState: obj,
        });
    }

    handlePoolUpdateModalCheckbox = (e, { value }) => {
        const obj = this.state.poolUpdateModalState;
        if (value === 'default_pool' && obj[value] === false) {
            obj.ingest_pool = obj[value];
        } else if (value === 'ingest_pool' && obj[value] === false) {
            obj.default_pool = obj[value];
        }
        obj[value] = !obj[value];
        obj.changed = true;
        this.setState({
            poolUpdateModalState: obj,
        });
    }

    handlePoolUpdateModalSubmit = () => {
        // do form validation
        this.validatePoolFields([{
            name: 'cpu_weight',
            value: this.state.poolUpdateModalState.cpu_weight,
        }, {
            name: 'mem_weight',
            value: this.state.poolUpdateModalState.mem_weight,
        }]);

        if (!this.state.poolUpdateModalState.edit) {
            this.validatePoolFields([{
                name: 'name',
                value: this.state.poolUpdateModalState.name,
            }]);
        }

        if (this.state.poolUpdateModalState.nameError ||
            this.state.poolUpdateModalState.cpuWeightError ||
            this.state.poolUpdateModalState.memWeightError) {
            return;
        }

        // send request to backend
        this.setWaitView('poolUpdateModalState');
        const data = {
            name: this.state.poolUpdateModalState.name,
            cpu_weight: this.state.poolUpdateModalState.cpu_weight,
            mem_weight: this.state.poolUpdateModalState.mem_weight,
            default_pool: this.state.poolUpdateModalState.default_pool,
            ingest_pool: this.state.poolUpdateModalState.ingest_pool,
        };

        let model;
        if (this.state.poolUpdateModalState.edit) {
            model = this.state.poolUpdateModalState.model;
        }

        this.props.pools.updatePool(model, data).done(() => {
            this.props.pools.fetch();
            this.props.status.fetch();
            this.handlePoolUpdateModalClose();
        }).fail((response) => {
            let msg = _('Encountered errors in updating pool').t();
            if (response.responseJSON.messages && response.responseJSON.messages.length > 0) {
                const messageObj = response.responseJSON.messages[0];
                msg = splunkUtil.sprintf(_('%s: %s').t(), messageObj.type, messageObj.text);
            }
            this.props.pools.fetch();
            this.handlePoolUpdateModalClose();
            this.handleMessageModalOpen(_('Workload Pool').t(), msg, 'error', true);
        });
    }

    handlePoolDeleteModalOpen = (e, { value }) => {
        const obj = {
            poolModel: value,
            title: splunkUtil.sprintf(_('Delete Workload Pool: %s').t(), value.getPoolName()),
        };
        this.setState({
            poolDeleteModalOpen: true,
            poolDeleteModalState: obj,
        });
    }

    handlePoolDeleteModalClose = () => {
        this.setState({
            poolDeleteModalOpen: false,
            poolDeleteModalState: this.getDefaultPoolDeleteModalState(),
        });
    }

    handlePoolDeleteModalSubmit = () => {
        this.setWaitView('poolDeleteModalState');
        this.props.pools.deletePool(this.state.poolDeleteModalState.poolModel).done(() => {
            this.props.pools.fetch();
            this.props.status.fetch();
            this.handlePoolDeleteModalClose();
        }).fail((response) => {
            let msg = _('Encountered errors while deleting pool').t();
            if (response.responseJSON.messages && response.responseJSON.messages.length > 0) {
                const messageObj = response.responseJSON.messages[0];
                msg = splunkUtil.sprintf(_('%s: %s').t(), messageObj.type, messageObj.text);
            }
            this.props.pools.fetch();
            this.handlePoolDeleteModalClose();
            this.handleMessageModalOpen(_('Workload Pool').t(), msg, 'error', true);
        });
    }

    handleRuleUpdateModalOpen = () => {
        const obj = {
            title: _('New Workload Rule').t(),
            available_pools: this.props.pools.filterOutGeneralIngest(),
        };
        this.setState({
            ruleUpdateModalOpen: true,
            ruleUpdateModalState: _.extend(this.getDefaultRuleUpdateModalState(), obj),
        });
    }

    handleRuleUpdateModalOpenEdit = (e, { value }) => {
        const ruleModel = value;
        const obj = {
            model: ruleModel,
            edit: true,
            title: splunkUtil.sprintf(_('Edit Workload Rule: %s').t(), ruleModel.getRuleName()),
            order: ruleModel.getOrder().toString(),
            name: ruleModel.getRuleName(),
            predicate: ruleModel.getPredicate(),
            workload_pool: ruleModel.getWorkloadPool(),
            available_pools: this.props.pools.filterOutGeneralIngest(),
        };
        this.setState({
            ruleUpdateModalOpen: true,
            ruleUpdateModalState: obj,
        });
    }

    handleRuleUpdateModalTextChange = (e, { value, name }) => {
        this.validateRuleFields([{
            name,
            value,
        }]);
    }

    validateRuleFields = (fields) => {
        const obj = this.state.ruleUpdateModalState;
        obj.changed = true;
        _.each(fields, (field) => {
            obj[field.name] = field.value;
            switch (field.name) {
                case 'name':
                    if (_.isEmpty(field.value)) {
                        obj.nameErrorMsg = _('Name must be entered.').t();
                    } else if (field.value.indexOf(' ') >= 0) {
                        obj.nameErrorMsg = _('Name cannot have spaces.').t();
                    } else {
                        delete obj.nameErrorMsg;
                    }
                    break;
                case 'order':
                    if (_.isEmpty(field.value.match(/^[0-9]+$/)) || field.value === '0') {
                        obj.orderErrorMsg = _('Order must be a positive integer.').t();
                    } else if (parseInt(field.value, 10) > _.size(this.props.rules)) {
                        obj.orderErrorMsg = _('Order cannot be larger than the total number of rules.').t();
                    } else {
                        delete obj.orderErrorMsg;
                    }
                    break;
                case 'workload_pool':
                    if (_.isEmpty(field.value)) {
                        obj.poolErrorMsg = _('Workload Pool must be selected.').t();
                    } else {
                        delete obj.poolErrorMsg;
                    }
                    break;
                default:
                    break;
            }
        });
        obj.nameError = !_.isEmpty(obj.nameErrorMsg);
        obj.orderError = !_.isEmpty(obj.orderErrorMsg);
        obj.poolError = !_.isEmpty(obj.poolErrorMsg);

        this.setState({
            ruleUpdateModalState: obj,
        });
    }

    handleRuleUpdateModalSubmit = () => {
        // do form validation
        this.validateRuleFields([{
            name: 'workload_pool',
            value: this.state.ruleUpdateModalState.workload_pool,
        }]);

        if (this.state.ruleUpdateModalState.edit) {
            this.validateRuleFields([{
                name: 'order',
                value: this.state.ruleUpdateModalState.order,
            }]);
        } else {
            this.validateRuleFields([{
                name: 'name',
                value: this.state.ruleUpdateModalState.name,
            }]);
        }

        if (this.state.ruleUpdateModalState.nameError ||
            this.state.ruleUpdateModalState.orderError ||
            this.state.ruleUpdateModalState.poolError) {
            return;
        }

        // send request to backend
        this.setWaitView('ruleUpdateModalState');
        const data = {
            name: this.state.ruleUpdateModalState.name,
            predicate: this.state.ruleUpdateModalState.predicate,
            workload_pool: this.state.ruleUpdateModalState.workload_pool,
        };

        // massage data for edit mode
        let model;
        if (this.state.ruleUpdateModalState.edit) {
            model = this.state.ruleUpdateModalState.model;
            data.order = parseInt(this.state.ruleUpdateModalState.order, 10);
        }

        this.props.rules.updateRule(model, data).done(() => {
            this.props.rules.fetch();
            this.props.status.fetch();
            this.handleRuleUpdateModalClose();
        }).fail((response) => {
            let msg = _('Encountered errors in updating rule').t();
            if (response.responseJSON.messages && response.responseJSON.messages.length > 0) {
                const messageObj = response.responseJSON.messages[0];
                msg = splunkUtil.sprintf(_('%s: %s').t(), messageObj.type, messageObj.text);
            }
            this.props.rules.fetch();
            this.handleRuleUpdateModalClose();
            this.handleMessageModalOpen(_('Workload Rule').t(), msg, 'error', true);
        });
    }


    handleRuleUpdateModalClose = () => {
        this.setState({
            ruleUpdateModalOpen: false,
            ruleUpdateModalState: this.getDefaultRuleUpdateModalState(),
        });
    }

    handleRuleDeleteModalOpen = (e, { value }) => {
        const obj = {
            ruleModel: value,
            title: splunkUtil.sprintf(_('Delete Workload Rule: %s').t(), value.getRuleName()),
        };
        this.setState({
            ruleDeleteModalOpen: true,
            ruleDeleteModalState: obj,
        });
    }

    handleRuleDeleteModalClose = () => {
        this.setState({
            ruleDeleteModalOpen: false,
            ruleDeleteModalState: this.getDefaultRuleDeleteModalState(),
        });
    }

    handleRuleDeleteModalSubmit = () => {
        this.setWaitView('ruleDeleteModalState');
        this.props.rules.deleteRule(this.state.ruleDeleteModalState.ruleModel).done(() => {
            this.props.rules.fetch();
            this.props.status.fetch();
            this.handleRuleDeleteModalClose();
        }).fail((response) => {
            let msg = _('Encountered errors in deleting rule').t();
            if (response.responseJSON.messages && response.responseJSON.messages.length > 0) {
                const messageObj = response.responseJSON.messages[0];
                msg = splunkUtil.sprintf(_('%s: %s').t(), messageObj.type, messageObj.text);
            }
            this.props.rules.fetch();
            this.handleRuleDeleteModalClose();
            this.handleMessageModalOpen(_('Workload Rule').t(), msg, 'error', true);
        });
    }

    handleMessageModalOpen = (title, message, type, closeable = true) => {
        const obj = {
            title,
            message,
            type,
            closeable,
            open: true,
        };
        this.setState({
            messageModalState: obj,
        });
    }

    handleMessageModalClose = () => {
        this.setState({
            messageModalState: this.getDefaultMessageModalState(),
        });
    }

    render() {
        return <WorkloadManagementPage {...this.state} />;
    }
}

WorkloadManagementPageContainer.propTypes = {
    pools: PropTypes.shape({
        models: PropTypes.arrayOf(PropTypes.shape({})),
        on: PropTypes.func,
        fetch: PropTypes.func,
        preparePools: PropTypes.func,
        filterOutGeneralIngest: PropTypes.func,
        updatePool: PropTypes.func,
        deletePool: PropTypes.func,
        getDefaultPoolName: PropTypes.func,
        getIngestPoolName: PropTypes.func,
    }).isRequired,
    rules: PropTypes.shape({
        models: PropTypes.arrayOf(PropTypes.shape({})),
        on: PropTypes.func,
        fetch: PropTypes.func,
        prepareRules: PropTypes.func,
        updateRule: PropTypes.func,
        deleteRule: PropTypes.func,
    }).isRequired,
    status: PropTypes.shape({
        on: PropTypes.func,
        isEnabled: PropTypes.func,
        isSupported: PropTypes.func,
        fetch: PropTypes.func,
        getShortErrorMessage: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
        hasCapability: PropTypes.func,
    }).isRequired,
    enable: PropTypes.instanceOf(Backbone.Model).isRequired,
    disable: PropTypes.instanceOf(Backbone.Model).isRequired,
};

export default WorkloadManagementPageContainer;