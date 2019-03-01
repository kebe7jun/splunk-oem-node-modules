/* eslint-disable no-use-before-define */
import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { clone, isUndefined, isFinite } from 'lodash';
import { createDOMID } from '@splunk/ui-utils/id';
import Box from '@splunk/react-ui/Box';
import Tooltip from '@splunk/react-ui/Tooltip';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledBox, StyledControlsStackBox, StyledLabel, StyledLabelLeft, StyledHelp } = getStyled(
    'ControlGroup'
);

/**
 * ControlGroup places a label and optional help text around one or more controls. The ControlGroup
 * will automatically add aria attributes to associate the controls with the labels and help text to
 * address accessibility requirements.
 *
 * ControlGroup provides layouts to assist in aligning and laying out controls, but the defaults are
 * not helpful in all cases, nor will the layout options address all cases. Consider setting
 * controlsLayout to none and manually positioning the controls as required.
 */
class ControlGroup extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        controlsLayout: PropTypes.oneOf(['fill', 'fillJoin', 'none', 'stack']),
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the control group as having an error. The label and help text will turn red,
         * but the children are not affected.
         */
        error: PropTypes.bool,
        /* The help text or content displayed below the control. */
        help: PropTypes.node,
        label: PropTypes.string.isRequired,
        labelPosition: PropTypes.oneOf(['left', 'top']),
        /**
         * When labelPosition is left, the width of the label in pixels or a value with a unit.
         */
        labelWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /** The size of the text label. */
        size: PropTypes.oneOf(['small', 'medium']),
        tooltip: PropTypes.node,
    };

    static defaultProps = {
        controlsLayout: 'fill',
        error: false,
        label: 'Label',
        labelPosition: 'left',
        labelWidth: 120,
        size: 'medium',
    };

    constructor(...args) {
        super(...args);

        this.labelId = createDOMID('label');
        this.helpId = createDOMID('help');
    }

    render() {
        const {
            children,
            controlsLayout,
            error,
            help,
            label,
            labelPosition,
            labelWidth,
            size,
            tooltip,
            ...otherProps
        } = this.props;

        // Clean the Children
        const cloneWithProps = (item, i) => {
            if (!isValidElement(item)) {
                return item;
            }

            const count = Children.count(children);
            const cloneProps = {
                key: item.key || i,
            };

            const shouldApplyProp = propName => {
                // Must support prop
                if (!item.type || !item.type.propTypes || !item.type.propTypes[propName]) {
                    return false;
                }

                //  Must not have been change from the default.
                if (!item.type.defaultProps || !item.props || isUndefined(item.props[propName])) {
                    return true;
                }

                return item.props[propName] === item.type.defaultProps[propName];
            };

            if (controlsLayout === 'fillJoin') {
                if (shouldApplyProp('prepend') && i > 0) {
                    cloneProps.prepend = true;
                }

                if (shouldApplyProp('append') && i < count - 1) {
                    cloneProps.append = true;
                }

                if (cloneProps.prepend || cloneProps.append) {
                    cloneProps.inline = false;
                }
            }

            if (controlsLayout === 'fill' && shouldApplyProp('inline') && count > 1) {
                cloneProps.inline = true;
            }

            if (controlsLayout === 'stack' && shouldApplyProp('inline')) {
                cloneProps.inline = false;
            }

            if (shouldApplyProp('labelledBy')) {
                cloneProps.labelledBy = this.labelId;
            }

            if (shouldApplyProp('describedBy') && this.props.help) {
                cloneProps.describedBy = this.helpId;
            }

            // (SUI-1365) Give the label's text to select elements
            if (shouldApplyProp('labelText')) {
                cloneProps.labelText = label;
            }

            if (count === 1 && (controlsLayout === 'fillJoin' || controlsLayout === 'fill')) {
                cloneProps.style = item.props.style ? clone(item.props.style) : {};
                cloneProps.style.flexGrow = 1; // some controls like Select do not grow by default
            }

            return cloneElement(item, cloneProps);
        };
        const childrenFormatted = Children.map(children, cloneWithProps);

        if (error) {
            otherProps['aria-invalid'] = true;
        }

        const labelWidthStyle = labelPosition === 'left' ? { width: labelWidth } : null;
        const labelWidthString = isFinite(labelWidth) ? `${labelWidth}px` : labelWidth;
        const contentMarginStyle =
            labelPosition === 'left' ? { marginLeft: `calc(${labelWidthString} + 20px)` } : null;

        const StyledControlsComponent = controlsLayout === 'stack' ? StyledControlsStackBox : Box;
        const StyledLabelComponent = labelPosition === 'left' ? StyledLabelLeft : StyledLabel;

        // Render
        return (
            <StyledBox data-test="control-group" {...otherProps}>
                <StyledLabelComponent
                    data-size={size}
                    data-test="label"
                    id={this.labelId}
                    style={labelWidthStyle}
                >
                    {label}
                    {tooltip && ' '}
                    {tooltip && <Tooltip content={tooltip} />}
                </StyledLabelComponent>
                <StyledControlsComponent
                    data-test="controls"
                    flex={controlsLayout !== 'none'}
                    style={contentMarginStyle}
                >
                    {childrenFormatted}
                </StyledControlsComponent>
                {help && (
                    <StyledHelp data-test="help" id={this.helpId} style={contentMarginStyle}>
                        {help}
                    </StyledHelp>
                )}
            </StyledBox>
        );
    }
}

export default ControlGroup;
