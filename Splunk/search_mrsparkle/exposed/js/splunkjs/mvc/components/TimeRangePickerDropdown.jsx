import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@splunk/react-time-range/Dropdown';
import { getISO } from '@splunk/time-range-utils/timeParser';
import { createTestHook } from 'util/test_support';

class TimeRangePickerDropdown extends Component {
    constructor(props) {
        super(props);

        const {
            earliest,
            latest,
        } = this.props;

        this.state = {
            earliest,
            latest,
            parseEarliest: null,
            parseLatest: null,
        };

        this.onRequestParseEarliest = this.onRequestParseEarliest.bind(this);
        this.onRequestParseLatest = this.onRequestParseLatest.bind(this);
    }

    componentWillReceiveProps({ earliest, latest }) {
        if (earliest !== this.state.earliest) {
            this.setState({
                earliest,
            });
        }

        if (latest !== this.state.latest) {
            this.setState({
                latest,
            });
        }
    }

    onRequestParseEarliest(time) {
        getISO(time)
            .then(data => this.setState({ parseEarliest: data }))
            .catch(data => this.setState({ parseEarliest: data }));
    }

    onRequestParseLatest(time) {
        getISO(time)
            .then(data => this.setState({ parseLatest: data }))
            .catch(data => this.setState({ parseLatest: data }));
    }

    render() {
        const {
            locale,
            presets,
            onChange,
            documentationURL,
            menuSettings,
        } = this.props;

        const {
            earliest,
            latest,
            parseEarliest,
            parseLatest,
        } = this.state;

        const formInputTypes = [];
        let advancedInputTypes = [];

        if (menuSettings.showRelative) {
            formInputTypes.push('relative');
            advancedInputTypes.push('relative');
        }
        if (menuSettings.showRealtime) {
            formInputTypes.push('realTime');
            advancedInputTypes.push('realTime');
        }
        if (menuSettings.showDate) {
            formInputTypes.push('date');
            advancedInputTypes.push('allTime');
        }
        if (menuSettings.showDateTime) {
            formInputTypes.push('dateTime');
            advancedInputTypes.push('dateTime');
        }
        if (!menuSettings.showAdvanced) {
            advancedInputTypes = [];
        }

        const shownPresets = menuSettings.showPresets ? presets : [];

        return (
            <Dropdown
                advancedInputTypes={advancedInputTypes}
                formInputTypes={formInputTypes}
                locale={locale}
                presets={shownPresets}
                onChange={(e, timeRange) => {
                    this.setState({
                        earliest: timeRange.earliest,
                        latest: timeRange.latest,
                    });
                    onChange(e, timeRange);
                }}
                inline={false}
                earliest={earliest}
                latest={latest}
                parseEarliest={parseEarliest}
                parseLatest={parseLatest}
                onRequestParseEarliest={this.onRequestParseEarliest}
                onRequestParseLatest={this.onRequestParseLatest}
                documentationURL={documentationURL}
                {...createTestHook(module.id)}
            />
        );
    }
}

TimeRangePickerDropdown.propTypes = {
    locale: PropTypes.string.isRequired,
    presets: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        earliest: PropTypes.string,
        latest: PropTypes.string,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    earliest: PropTypes.string,
    latest: PropTypes.string,
    documentationURL: PropTypes.string,
    menuSettings: PropTypes.objectOf(PropTypes.bool),
};

TimeRangePickerDropdown.defaultProps = {
    earliest: '',
    latest: '',
    documentationURL: null,
    menuSettings: {
        showPresets: true,
        showAdvanced: true,
        showDate: true,
        showRealtime: true,
        showDateTime: true,
        showRelative: true,
    },
};

export default TimeRangePickerDropdown;
