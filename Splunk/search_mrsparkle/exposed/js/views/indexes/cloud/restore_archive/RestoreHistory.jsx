import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@splunk/react-ui/Table';
import Message from '@splunk/react-ui/Message';
import Link from '@splunk/react-ui/Link';
import Success from '@splunk/react-icons/Success';
import InfoCircle from '@splunk/react-icons/InfoCircle';
import Error from '@splunk/react-icons/Error';
import moment from '@splunk/moment';
import { _ } from '@splunk/ui-utils/i18n';
import { createTestHook } from 'util/test_support';
import { error, success, info, warning } from './RestoreArchive.pcss';  // eslint-disable-line no-unused-vars
import Confirmation from './Confirmation';

const emptyTemplate = (<Message type="info">
    {_('There is no archive retrieval history for this index.')}</Message>);
const getFormattedValue = (key, value) => {
    if (key.indexOf('Time') !== -1) {
        return moment(value * 1000).format('YYYY/MM/DD hh:mm:ss');
    } else if (key === 'State') {
        return value.split('.')[0];
    }
    return value;
};
const getStateIcon = (key) => {
    const state = key.split('.')[0];
    switch (state) {
        case 'Success':
        case 'Flushed':
            return (<Success size={1} style={{ color: success, marginRight: '5px' }} />);
        case 'Failed':
            return (<Error size={1} style={{ color: error, marginRight: '5px' }} />);
        default:
            return (<InfoCircle size={1} style={{ color: info, marginRight: '5px' }} />);
    }
};

class RestoreHistory extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            sortKey: 'IndexName',
            sortDir: 'asc',
            items: props.history,
            requestId: '',
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ items: nextProps.history });
    }

    handleSort = (e, { sortKey }) => {
        const prevSortKey = this.state.sortKey;
        const prevSortDir = prevSortKey === sortKey ? this.state.sortDir : 'none';
        const nextSortDir = prevSortDir === 'asc' ? 'desc' : 'asc';
        this.setState({
            sortKey,
            sortDir: nextSortDir,
        });
        this.props.onSort(sortKey, nextSortDir);
    }

    handleConfirmOpen = (start, end, name, desc) => {
        this.setState({
            requestId: {
                IndexName: name,
                StartTime: start,
                EndTime: end,
                Description: desc,
            },
        });
        this.props.onConfirmToggle();
    }

    handleFlush = () => {
        this.props.onFlushConfirm(this.state.requestId);
    }

    render() {
        const { sortKey, sortDir } = this.state;
        const msg = _('Are you sure you want to clear restored data? ' +
            'Clearing this restored data does not delete data from your archive.');
        const headers = ['StartTime', 'EndTime', 'RequestTime', 'Description', 'State', 'DataVolumeInGB'];
        let columns = {};
        if (this.state.items.length) {
            columns = headers.map(col => Object.create({
                sortKey: col,
                label: col === 'State' ? _('JobStatus') : _(col),
            })) || {};
        }
        return (
            <div>
                {this.state.items.length > 0 ?
                    <Table
                        stripeRows headType="fixed"
                        innerStyle={{ maxHeight: 200 }}
                        {...createTestHook(null, 'ArchiveRestoreHistoryTable')}
                    >
                        <Table.Head>
                            {columns.map(headData => (
                                <Table.HeadCell
                                    key={headData.sortKey}
                                    onSort={this.handleSort}
                                    sortKey={headData.sortKey}
                                    sortDir={headData.sortKey === sortKey ? sortDir : 'none'}
                                >
                                    {headData.label}
                                </Table.HeadCell>
                            ))}
                            <Table.HeadCell>
                                {_('Actions')}
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {this.state.items
                                .map((row, index) => {
                                    const rowKey = `row-${index}`;
                                    return (
                                        <Table.Row key={rowKey}>
                                            { headers.map(key => (
                                                <Table.Cell key={key}>
                                                    { key === 'State' && getStateIcon(row[key]) }
                                                    { getFormattedValue(key, row[key]) }
                                                </Table.Cell>
                                            )) }
                                            <Table.Cell key="action">
                                                {
                                                    row.State === 'Success' &&
                                                        <Link
                                                            onClick={() => this.handleConfirmOpen(row.StartTime,
                                                            row.EndTime, row.IndexName, row.Description)}
                                                            disabled={this.props.disableContents}
                                                        >
                                                            {_('Clear')}
                                                        </Link>
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                        </Table.Body>
                    </Table> : emptyTemplate }
                <Confirmation
                    open={this.props.flushConfirm}
                    confirmMsg={msg}
                    confirmButtonLabel={_('Clear')}
                    onConfirmCancel={this.props.onConfirmToggle}
                    processing={this.props.processing}
                    onConfirm={this.handleFlush}
                />
            </div>
        );
    }
}

RestoreHistory.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            StartTime: PropTypes.number,
            EndTime: PropTypes.number,
            RequestTime: PropTypes.number,
            Description: PropTypes.string,
            State: PropTypes.string,
            DataVolumeInGB: PropTypes.number,
        })),
    onSort: PropTypes.func.isRequired,
    onConfirmToggle: PropTypes.func.isRequired,
    onFlushConfirm: PropTypes.func.isRequired,
    flushConfirm: PropTypes.bool,
    processing: PropTypes.bool,
    disableContents: PropTypes.bool,
};

RestoreHistory.defaultProps = {
    history: [],
    flushConfirm: false,
    processing: false,
    disableContents: false,
};

export default RestoreHistory;