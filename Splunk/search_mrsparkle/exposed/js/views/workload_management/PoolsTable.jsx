import _ from 'underscore';
import { createTestHook } from 'util/test_support';
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@splunk/react-ui/Table';
import Success from '@splunk/react-icons/Success';
import Button from '@splunk/react-ui/Button';
import css from './WorkloadManagement.pcssm';

const PoolsTable = (props) => {
    const {
        pools,
        canEditWorkloadPools,
        handlePoolUpdateModalOpenEdit,
        handlePoolDeleteModalOpen,
    } = props;

    return (
        <div {...createTestHook(module.id)} className={css.table}>
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>{_('Workload Pool').t()}</Table.HeadCell>
                    <Table.HeadCell align="center">{_('CPU %').t()}</Table.HeadCell>
                    <Table.HeadCell align="center">{_('Memory %').t()}</Table.HeadCell>
                    <Table.HeadCell align="center">{_('Default Search Pool').t()}</Table.HeadCell>
                    <Table.HeadCell align="center">{_('Default Ingest Pool').t()}</Table.HeadCell>
                    { canEditWorkloadPools ? <Table.HeadCell align="center">{_('Actions').t()}</Table.HeadCell> : null }

                </Table.Head>
                <Table.Body>
                    {pools.map(row => (
                        <Table.Row key={row.id}>
                            <Table.Cell>{row.getPoolName()}</Table.Cell>
                            <Table.Cell align="center">{row.getCpuWeight()}</Table.Cell>
                            <Table.Cell align="center">{row.getMemWeight()}</Table.Cell>
                            <Table.Cell align="center">
                                {
                                    row.isDefaultPool() ?
                                        <div className={css.successIcon}>
                                            <Success size="1em" />
                                        </div> : null
                                }
                            </Table.Cell>
                            <Table.Cell align="center">
                                {
                                    row.isIngestPool() ?
                                        <div className={css.successIcon}>
                                            <Success size="1em" />
                                        </div> : null
                                }
                            </Table.Cell>
                            { canEditWorkloadPools ?
                                <Table.Cell align="center">
                                    <Button
                                        label={_('Edit').t()}
                                        appearance="pill"
                                        value={row}
                                        onClick={handlePoolUpdateModalOpenEdit}
                                        size="small"
                                        classNamePrivate={css.link}
                                    />
                                    <Button
                                        label={_('Delete').t()}
                                        appearance="pill"
                                        value={row}
                                        onClick={handlePoolDeleteModalOpen}
                                        size="small"
                                        classNamePrivate={css.link}
                                    />
                                </Table.Cell> : null
                            }
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};


PoolsTable.propTypes = {
    pools: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    canEditWorkloadPools: PropTypes.bool.isRequired,
    handlePoolUpdateModalOpenEdit: PropTypes.func.isRequired,
    handlePoolDeleteModalOpen: PropTypes.func.isRequired,
};

export default PoolsTable;