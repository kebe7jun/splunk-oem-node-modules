import { createTestHook } from 'util/test_support';
import _ from 'underscore';
import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@splunk/react-ui/Switch';
import Button from '@splunk/react-ui/Button';
import Message from '@splunk/react-ui/Message';
import HeaderSection from './HeaderSection';
import PoolsTable from './PoolsTable';
import RulesTable from './RulesTable';
import PoolUpdateModal from './PoolUpdateModal';
import PoolDeleteModal from './PoolDeleteModal';
import RuleUpdateModal from './RuleUpdateModal';
import RuleDeleteModal from './RuleDeleteModal';
import MessageModal from './MessageModal';
import css from './WorkloadManagement.pcssm';

const WorkloadManagementPage = (props) => {
    const {
        title,
        description,
        learnMore,
        isEnabled,
        isSupported,
        statusErrorMessage,
        missingTablesMessage,
        getDefaultPoolName,
        getIngestPoolName,
        pools,
        rules,
        canEditWorkloadPools,
        canEditWorkloadRules,
        poolUpdateModalOpen,
        poolUpdateModalState,
        handleEnableDisableClick,
        handlePoolUpdateModalOpen,
        handlePoolUpdateModalClose,
        handlePoolUpdateModalOpenEdit,
        handlePoolUpdateModalTextChange,
        handlePoolUpdateModalCheckbox,
        handlePoolUpdateModalSubmit,
        poolDeleteModalOpen,
        poolDeleteModalState,
        handlePoolDeleteModalOpen,
        handlePoolDeleteModalClose,
        handlePoolDeleteModalSubmit,
        ruleUpdateModalOpen,
        ruleUpdateModalState,
        handleRuleUpdateModalOpen,
        handleRuleUpdateModalClose,
        handleRuleUpdateModalOpenEdit,
        handleRuleUpdateModalTextChange,
        handleRuleUpdateModalSubmit,
        ruleDeleteModalOpen,
        ruleDeleteModalState,
        handleRuleDeleteModalOpen,
        handleRuleDeleteModalClose,
        handleRuleDeleteModalSubmit,
        messageModalState,
        handleMessageModalClose,
    } = props;

    const headerSectionProps = {
        title,
        description,
        learnMore,
    };

    const poolsTableProps = {
        pools,
        canEditWorkloadPools,
        handlePoolUpdateModalOpenEdit,
        handlePoolDeleteModalOpen,
    };

    const rulesTableProps = {
        rules,
        canEditWorkloadRules,
        handleRuleUpdateModalOpenEdit,
        handleRuleDeleteModalOpen,
    };

    const poolUpdateModalProps = {
        poolUpdateModalOpen,
        poolUpdateModalState,
        handlePoolUpdateModalClose,
        handlePoolUpdateModalTextChange,
        handlePoolUpdateModalCheckbox,
        handlePoolUpdateModalSubmit,
    };

    const poolDeleteModalProps = {
        poolDeleteModalOpen,
        poolDeleteModalState,
        handlePoolDeleteModalClose,
        handlePoolDeleteModalSubmit,
    };

    const ruleUpdateModalProps = {
        ruleUpdateModalOpen,
        ruleUpdateModalState,
        handleRuleUpdateModalClose,
        handleRuleUpdateModalTextChange,
        handleRuleUpdateModalSubmit,
    };

    const ruleDeleteModalProps = {
        ruleDeleteModalOpen,
        ruleDeleteModalState,
        handleRuleDeleteModalClose,
        handleRuleDeleteModalSubmit,
    };

    const messageModalProps = {
        messageModalState,
        handleMessageModalClose,
    };

    const mainSectionClassName = `workload-main-section ${css.mainSection}`;
    const isPoolTableEmpty = (pools.length === 0);
    const isRuleTableEmpty = (rules.length === 0);
    const visibleWhenSupported = (isSupported ? '' : `${css.displayNone}`);
    const visibleWhenNotSupported = (!isSupported ? '' : `${css.displayNone}`);
    const eligibleToEnable = !isEnabled && canEditWorkloadPools &&
        !_.isEmpty(getDefaultPoolName) && !_.isEmpty(getIngestPoolName);

    let requiredPoolMessage = '';
    if (!isEnabled && canEditWorkloadPools && (_.isEmpty(getDefaultPoolName) || _.isEmpty(getIngestPoolName))) {
        requiredPoolMessage = _('You must create a default search pool and default ' +
            'ingest pool before enabling workload management.').t();
    }

    return (
        <div {...createTestHook(module.id)}>
            <HeaderSection {...headerSectionProps}>
                { canEditWorkloadPools || canEditWorkloadRules ?
                    <div className={`buttons-wrapper ${visibleWhenSupported}`}>
                        { canEditWorkloadRules ?
                            <Button
                                style={{ float: 'right', marginLeft: '10px' }}
                                disabled={pools.length === 0}
                                label={_('Add Workload Rule').t()}
                                onClick={handleRuleUpdateModalOpen}
                            /> : null
                        }
                        { canEditWorkloadPools ?
                            <Button
                                style={{ float: 'right', marginLeft: '10px' }}
                                label={_('Add Workload Pool').t()}
                                onClick={handlePoolUpdateModalOpen}
                            /> : null
                        }
                        { canEditWorkloadPools ?
                            <Switch
                                style={{ float: 'right' }}
                                disabled={!isEnabled && !eligibleToEnable}
                                selected={isEnabled}
                                value={isEnabled}
                                appearance="toggle"
                                onClick={handleEnableDisableClick}
                            >
                                { isEnabled ? _('Enabled').t() : _('Disabled').t() }
                            </Switch> : null
                        }
                    </div> : null
                }
            </HeaderSection>
            <div className={`${mainSectionClassName} ${visibleWhenSupported}`}>
                { eligibleToEnable ?
                    <Message type="info">{_('To activate workload management, ' +
                        'set the switch to Enabled.').t()}</Message>
                    : null
                }

                { !_.isEmpty(statusErrorMessage) && isEnabled && (canEditWorkloadPools || canEditWorkloadRules) ?
                    <Message type="error">{statusErrorMessage}</Message>
                    : null
                }

                { !_.isEmpty(missingTablesMessage) ?
                    <Message type="info">{missingTablesMessage}</Message>
                    : null
                }

                { !_.isEmpty(requiredPoolMessage) ?
                    <Message type="info">{requiredPoolMessage}</Message>
                    : null
                }

                { isPoolTableEmpty ? null : <PoolsTable {...poolsTableProps} /> }
                { isRuleTableEmpty ? null : <RulesTable {...rulesTableProps} /> }

                <PoolUpdateModal {...poolUpdateModalProps} />
                <PoolDeleteModal {...poolDeleteModalProps} />
                <RuleUpdateModal {...ruleUpdateModalProps} />
                <RuleDeleteModal {...ruleDeleteModalProps} />
                <MessageModal {...messageModalProps} />
            </div>

            <div className={`${mainSectionClassName} ${visibleWhenNotSupported}`}>
                <Message type="info">{_('Workload Management is not supported ' +
                    'on this operating system.').t()}</Message>
            </div>
        </div>
    );
};

WorkloadManagementPage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    learnMore: PropTypes.shape({}).isRequired,
    isEnabled: PropTypes.bool.isRequired,
    isSupported: PropTypes.bool.isRequired,
    statusErrorMessage: PropTypes.string.isRequired,
    missingTablesMessage: PropTypes.string.isRequired,
    getDefaultPoolName: PropTypes.string.isRequired,
    getIngestPoolName: PropTypes.string.isRequired,
    pools: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    rules: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    canEditWorkloadPools: PropTypes.bool.isRequired,
    canEditWorkloadRules: PropTypes.bool.isRequired,
    poolUpdateModalOpen: PropTypes.bool,
    poolUpdateModalState: PropTypes.shape({}).isRequired,
    handleEnableDisableClick: PropTypes.func.isRequired,
    handlePoolUpdateModalOpen: PropTypes.func.isRequired,
    handlePoolUpdateModalClose: PropTypes.func.isRequired,
    handlePoolUpdateModalOpenEdit: PropTypes.func.isRequired,
    handlePoolUpdateModalTextChange: PropTypes.func.isRequired,
    handlePoolUpdateModalCheckbox: PropTypes.func.isRequired,
    handlePoolUpdateModalSubmit: PropTypes.func.isRequired,
    poolDeleteModalOpen: PropTypes.bool,
    poolDeleteModalState: PropTypes.shape({}).isRequired,
    handlePoolDeleteModalOpen: PropTypes.func.isRequired,
    handlePoolDeleteModalClose: PropTypes.func.isRequired,
    handlePoolDeleteModalSubmit: PropTypes.func.isRequired,
    ruleUpdateModalOpen: PropTypes.bool,
    ruleUpdateModalState: PropTypes.shape({}).isRequired,
    handleRuleUpdateModalOpen: PropTypes.func.isRequired,
    handleRuleUpdateModalClose: PropTypes.func.isRequired,
    handleRuleUpdateModalOpenEdit: PropTypes.func.isRequired,
    handleRuleUpdateModalTextChange: PropTypes.func.isRequired,
    handleRuleUpdateModalSubmit: PropTypes.func.isRequired,
    ruleDeleteModalOpen: PropTypes.bool,
    ruleDeleteModalState: PropTypes.shape({}).isRequired,
    handleRuleDeleteModalOpen: PropTypes.func.isRequired,
    handleRuleDeleteModalClose: PropTypes.func.isRequired,
    handleRuleDeleteModalSubmit: PropTypes.func.isRequired,
    messageModalState: PropTypes.shape({}).isRequired,
    handleMessageModalClose: PropTypes.func.isRequired,
};

WorkloadManagementPage.defaultProps = {
    title: '',
    description: '',
    poolUpdateModalOpen: false,
    poolDeleteModalOpen: false,
    ruleUpdateModalOpen: false,
    ruleDeleteModalOpen: false,
};

export default WorkloadManagementPage;