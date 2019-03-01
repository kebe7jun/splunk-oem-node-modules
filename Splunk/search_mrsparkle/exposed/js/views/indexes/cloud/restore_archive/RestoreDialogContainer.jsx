import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import moment from '@splunk/moment';
import querystring from 'querystring';
import { createRESTURL } from '@splunk/splunk-utils/url';
import { defaultFetchInit, handleResponse, handleError } from '@splunk/splunk-utils/fetch';
import RestoreDialog from './RestoreDialog';

const convertDateToSeconds = value => new Date(value).getTime() / 1000;
const convertToGB = (size) => {
    const inGb = (size / (Math.pow(10,9)).toFixed(2)); // eslint-disable-line
    if (size > 1000000) {  // if size is more than an MB then round off to precision 4
        return inGb.toFixed(4);
    }
    return inGb;
};
const getMsgType = (status) => {
    switch (status) {
        case 'Blocked':
        case 'Empty':
        case 'Overlap':
        case 'Error':
            return 'error';
        case 'Warning':
            return 'warning';
        case 'Success':
        case 'Flushed':
            return 'success';
        default:
            return 'info';
    }
};

class RestoreDialogContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: true,
            start_time: moment().format('YYYY-MM-DD'),
            end_time: moment().format('YYYY-MM-DD'),
            desc: '',
            processing: false,
            restoreConfirm: false,
            flushConfirm: false,
            restoreSize: null,
            retrieveMsg: {},
        };
    }
    componentDidMount = () => {
        this.fetchHistory();
    }
    callIndexRestore = data =>
        fetch(createRESTURL('index_restore_sh'), {
            ...defaultFetchInit,
            method: 'POST',
            body: querystring.encode(data),
        })
        .then(handleResponse(200))
        .catch(handleError(_('Unable to process restore history.').t()));

    callRestoreHistory = data =>
        fetch(createRESTURL('restore_history_sh'), {
            ...defaultFetchInit,
            method: 'POST',
            body: querystring.encode(data),
        })
        .then(handleResponse(200))
        .catch(handleError(_('Unable to fetch restore history.').t()));

    fetchHistory = (sortKey = '', sortDir = '') => {
        const data = {
            index_name: this.props.name,
            count: 50,
            output_mode: 'json',
        };
        Object.assign(data,
            !sortKey ? { sort_key: 'IndexName' } : { sort_key: sortKey },
            !sortDir ? { sort_direction: 'ltog' } : { sort_direction: sortDir === 'asc' ? 'ltog' : 'gtol' });
        this.callRestoreHistory(data)
            .then((response) => {
                if (response.count > 0) {
                    this.setState({ historyItems: response.items });
                }
            }, error => this.handleMessage('error', error.message));
    }
    handleAttributeChange = (key, value) => {
        this.setState({
            [key]: value,
            retrieveMsg: {},
        });
    }
    handleDescChange = (e, { value }) => {
        // Limit description to 60 characters.
        this.setState({ desc: value.substring(0, 60) });
    }
    handleMessage = (type = 'info', msg, threshold = 0) => {
        this.setState({ retrieveMsg: { type, msg, threshold } });
    }
    handleRestoreConfirmClose = () => {
        this.setState({
            restoreConfirm: !this.state.restoreConfirm,
        });
    }
    handleFlushConfirmClose = () => {
        this.setState({
            flushConfirm: !this.state.flushConfirm,
        });
    }
    addAdditionalMessage = (response) => {
        let msg = response.message;
        if (response.status === 'Warning') {
            msg += ` Safe limit for restoration is below ${convertToGB(response.warning_threshold)}GB.`;
            this.handleMessage(getMsgType(response.status), _(msg).t(), convertToGB(response.warning_threshold));
        } else if (response.status === 'Blocked') {
            msg += ` Allowable restoration limit is below ${convertToGB(response.blocked_threshold)}GB.`;
            this.handleMessage(getMsgType(response.status), _(msg).t(), convertToGB(response.blocked_threshold));
        } else {
            this.handleMessage(getMsgType(response.status), _(msg).t());
        }
    }
    handleFlush = (request) => {
        const data = {
            index_name: request.IndexName,
            action: 'flush',
            description: request.Description,
            start_time: request.StartTime,
            end_time: request.EndTime,
            output_mode: 'json',
        };
        this.setState({
            processing: true,
        });
        this.callIndexRestore(data)
            .then((response) => {
                this.setState({
                    flushConfirm: false,
                    processing: false,
                });
                this.fetchHistory();
                if (response.status === 'Success') {
                    this.handleMessage('success', _('Restored data will be cleared in several minutes.').t());
                } else {
                    this.handleMessage(getMsgType(response.status), response.message);
                }
            }, (error) => {
                this.setState({
                    flushConfirm: false,
                    processing: false,
                });
                this.handleMessage('error', error.message);
            });
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
        this.props.onClose();
    }
    handleRestoreRequest = () => {
        const data = {
            index_name: this.props.name,
            action: 'restore',
            description: _.isEmpty(this.state.desc) ? 'None' : this.state.desc,
            start_time: convertDateToSeconds(this.state.start_time),
            end_time: convertDateToSeconds(this.state.end_time),
            output_mode: 'json',
        };
        this.setState({
            processing: true,
        });
        this.callIndexRestore(data)
            .then((response) => {
                this.setState({
                    restoreConfirm: false,
                    processing: false,
                });
                this.handleMessage(getMsgType(response.status), response.message);
                this.fetchHistory();
            }, (error) => {
                this.setState({
                    restoreConfirm: false,
                    processing: false,
                });
                this.handleMessage('error', error.message);
            });
    }
    handleCheck = () => {
        const data = {
            index_name: this.props.name,
            action: 'check',
            start_time: convertDateToSeconds(this.state.start_time),
            description: _.isEmpty(this.state.desc) ? 'None' : this.state.desc,
            end_time: convertDateToSeconds(this.state.end_time),
            output_mode: 'json',
        };
        this.callIndexRestore(data)
            .then((response) => {
                this.addAdditionalMessage(response);
                this.setState({
                    // total_size is in pure bytes, covert that to GB for readability.
                    restoreSize: convertToGB(response.total_size),
                });
            }, error => this.handleMessage('error', error.message));
    }
    handleInitialRestore = () => {
        const data = {
            index_name: this.props.name,
            action: 'check',
            start_time: convertDateToSeconds(this.state.start_time),
            description: _.isEmpty(this.state.desc) ? 'None' : this.state.desc,
            end_time: convertDateToSeconds(this.state.end_time),
            output_mode: 'json',
        };
        this.callIndexRestore(data)
            .then((response) => {
                this.addAdditionalMessage(response);
                this.setState({
                    // total_size is in pure bytes, covert that to GB for readability.
                    restoreSize: convertToGB(response.total_size),
                });
                this.setState({ restoreConfirm: true });
            }, error => this.handleMessage('error', error.message));
    }
    render() {
        const props = {
            open: this.state.open,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            name: this.props.name,
            retrieveMsg: this.state.retrieveMsg,
            onAttributeChange: this.handleAttributeChange,
            onCheck: this.handleCheck,
            onInitialRestore: this.handleInitialRestore,
            onRequestClose: this.handleRequestClose,
            onRestoreRequest: this.handleRestoreRequest,
            onFlushConfirm: this.handleFlush,
            onRestoreConfirmClose: this.handleRestoreConfirmClose,
            onFlushConfirmClose: this.handleFlushConfirmClose,
            onDescChange: this.handleDescChange,
            onSort: this.fetchHistory,
            restoreConfirm: this.state.restoreConfirm,
            flushConfirm: this.state.flushConfirm,
            processing: this.state.processing,
            restoreSize: this.state.restoreSize,
            historyItems: this.state.historyItems,
        };
        return (
            <div>
                <RestoreDialog {...props} />
            </div>
        );
    }
}

RestoreDialogContainer.propTypes = {
    name: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default RestoreDialogContainer;