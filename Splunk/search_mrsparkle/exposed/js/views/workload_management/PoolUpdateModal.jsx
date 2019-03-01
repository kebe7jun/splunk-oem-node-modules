import _ from 'underscore';
import { createTestHook } from 'util/test_support';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@splunk/react-ui/Button';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Modal from '@splunk/react-ui/Modal';
import P from '@splunk/react-ui/Paragraph';
import Text from '@splunk/react-ui/Text';
import Switch from '@splunk/react-ui/Switch';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';

const PoolUpdateModal = (props) => {
    const {
        poolUpdateModalOpen,
        poolUpdateModalState,
        handlePoolUpdateModalClose,
        handlePoolUpdateModalTextChange,
        handlePoolUpdateModalCheckbox,
        handlePoolUpdateModalSubmit,
    } = props;

    const labelWidth = 150;

    return (
        <div {...createTestHook(module.id)} className="workload-pool-update-modal">
            <Modal
                onRequestClose={poolUpdateModalState.wait ? null : handlePoolUpdateModalClose}
                open={poolUpdateModalOpen}
                style={{ width: '500px' }}
            >
                <Modal.Header
                    title={poolUpdateModalState.title}
                    onRequestClose={poolUpdateModalState.wait ? null : handlePoolUpdateModalClose}
                />
                <Modal.Body>
                    <P />
                    { poolUpdateModalState.edit ? null :
                    <ControlGroup
                        labelWidth={labelWidth}
                        label={_('Name').t()}
                        data-test="PoolUpdateName"
                        tooltip={_('Name of workload pool').t()}
                        help={poolUpdateModalState.nameErrorMsg}
                        error={poolUpdateModalState.nameError}
                    >
                        <Text
                            disabled={poolUpdateModalState.wait}
                            error={poolUpdateModalState.nameError}
                            value={poolUpdateModalState.name}
                            name="name"
                            onChange={handlePoolUpdateModalTextChange}
                            autoComplete={false}
                        />
                    </ControlGroup>
                    }
                    <ControlGroup
                        labelWidth={labelWidth}
                        label={_('CPU %').t()}
                        data-test="PoolUpdateCPUWeight"
                        tooltip={_('Specify a percentage of the total available CPU weight ' +
                            'for the cpu control group.').t()}
                        help={poolUpdateModalState.cpuWeightErrorMsg}
                        error={poolUpdateModalState.cpuWeightError}
                    >
                        <Text
                            disabled={poolUpdateModalState.wait}
                            error={poolUpdateModalState.cpuWeightError}
                            value={poolUpdateModalState.cpu_weight}
                            name="cpu_weight"
                            onChange={handlePoolUpdateModalTextChange}
                            autoComplete={false}
                        />
                    </ControlGroup>
                    <ControlGroup
                        labelWidth={labelWidth}
                        label={_('Memory %').t()}
                        data-test="PoolUpdateMemoryGroup"
                        tooltip={_('Specify a percentage of the total available Memory weight ' +
                            'for the memory control group.').t()}
                        help={poolUpdateModalState.memWeightErrorMsg}
                        error={poolUpdateModalState.memWeightError}
                    >
                        <Text
                            disabled={poolUpdateModalState.wait}
                            error={poolUpdateModalState.memWeightError}
                            value={poolUpdateModalState.mem_weight}
                            name="mem_weight"
                            onChange={handlePoolUpdateModalTextChange}
                            autoComplete={false}
                        />
                    </ControlGroup>
                    <ControlGroup
                        labelWidth={labelWidth}
                        label={_('Default Search Pool').t()}
                        data-test="PoolUpdateDefaultPool"
                        tooltip={_('Turn on to set this workload pool as default search pool.').t()}
                    >
                        <Switch
                            disabled={poolUpdateModalState.wait}
                            value="default_pool"
                            onClick={handlePoolUpdateModalCheckbox}
                            selected={poolUpdateModalState.default_pool}
                            appearance="toggle"
                            size="small"
                        />
                    </ControlGroup>
                    <ControlGroup
                        labelWidth={labelWidth}
                        label={_('Default Ingest Pool').t()}
                        data-test="PoolUpdateIngestPool"
                        tooltip={_('Turn on to set this workload pool as default ingest pool.').t()}
                    >
                        <Switch
                            disabled={poolUpdateModalState.wait}
                            value="ingest_pool"
                            onClick={handlePoolUpdateModalCheckbox}
                            selected={poolUpdateModalState.ingest_pool}
                            appearance="toggle"
                            size="small"
                        />
                    </ControlGroup>
                </Modal.Body>
                { poolUpdateModalState.wait ?
                    <Modal.Footer>
                        <WaitSpinner size="medium" />
                    </Modal.Footer> :
                    <Modal.Footer>
                        <Button
                            appearance="secondary"
                            onClick={handlePoolUpdateModalClose}
                            label={_('Cancel').t()}
                        />
                        <Button
                            disabled={
                                poolUpdateModalState.nameError
                                || poolUpdateModalState.memWeightError
                                || poolUpdateModalState.cpuWeightError
                                || !poolUpdateModalState.changed
                            }
                            appearance="primary"
                            onClick={handlePoolUpdateModalSubmit}
                            label={_('Submit').t()}
                        />
                    </Modal.Footer>
                }
            </Modal>
        </div>
    );
};

PoolUpdateModal.propTypes = {
    poolUpdateModalOpen: PropTypes.bool,
    poolUpdateModalState: PropTypes.shape({}).isRequired,
    handlePoolUpdateModalClose: PropTypes.func.isRequired,
    handlePoolUpdateModalTextChange: PropTypes.func.isRequired,
    handlePoolUpdateModalCheckbox: PropTypes.func.isRequired,
    handlePoolUpdateModalSubmit: PropTypes.func.isRequired,
};

PoolUpdateModal.defaultProps = {
    poolUpdateModalOpen: false,
};

export default PoolUpdateModal;