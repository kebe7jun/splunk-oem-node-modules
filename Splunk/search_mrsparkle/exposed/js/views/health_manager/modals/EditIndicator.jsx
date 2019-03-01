import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sprintf } from '@splunk/ui-utils/format';
import { _ } from '@splunk/ui-utils/i18n';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Number from '@splunk/react-ui/Number';
import { createTestHook } from '@splunk/base-lister/utils/TestSupport';

class EditIndicator extends Component {
    static propTypes = {
        /**
         * Name of the indicator that is being edited.
         */
        indicatorName: PropTypes.string.isRequired,
        /**
         * Red value of the indicator that is being edited.
         */
        indicatorRed: PropTypes.number,
        /**
         * Yellow value of the indicator that is being edited.
         */
        indicatorYellow: PropTypes.number,
        /**
         * Function for updating the object's state.
         */
        handleThresholdChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        indicatorRed: null,
        indicatorYellow: null,
    };

    /**
     * Get title of the indicator.
     * @returns {String}
     */
    getIndicatorTitle() {
        return `${_('Threshold:')} ${this.props.indicatorName}`;
    }

    /**
     * Handle when an indicator's red threshold is changed.
     */
    handleRedThresholdChange = (e, { value }) => {
        if (value) {
            // reassamble indicator name and update it
            const fullIndicatorName = sprintf('indicator:%s:red', this.props.indicatorName);
            this.props.handleThresholdChange(fullIndicatorName, value);
        }
    };

    /**
     * Handle when an indicator's yellow threshold is changed.
     */
    handleYellowThresholdChange = (e, { value }) => {
        if (value) {
            // reassamble indicator name and update it
            const fullIndicatorName = sprintf('indicator:%s:yellow', this.props.indicatorName);
            this.props.handleThresholdChange(fullIndicatorName, value);
        }
    };

    /**
     * Renders the element.
     * @returns {XML}
     */
    render() {
        return (
            <div
                data-test-name={this.props.indicatorName}
                data-role={'indicator'}
                {...createTestHook(__filename)}
            >
                <p
                    data-test-name="indicator-title"
                >
                    {this.getIndicatorTitle()}
                </p>
                {this.props.indicatorRed &&
                    <ControlGroup
                        label={_('Red')}
                        controlsLayout="none"
                        data-test-name={'red_threshold'}
                    >
                        <Number
                            roundTo={0}
                            min={0}
                            value={this.props.indicatorRed}
                            onChange={this.handleRedThresholdChange}
                            inline
                            style={{ width: 90 }}
                        />
                    </ControlGroup>
                }
                {this.props.indicatorYellow &&
                    <ControlGroup
                        label={_('Yellow')}
                        controlsLayout="none"
                        data-test-name={'yellow_threshold'}
                    >
                        <Number
                            roundTo={0}
                            min={0}
                            value={this.props.indicatorYellow}
                            onChange={this.handleYellowThresholdChange}
                            inline
                            style={{ width: 90 }}
                        />
                    </ControlGroup>
                }
            </div>
        );
    }
}

export default EditIndicator;
