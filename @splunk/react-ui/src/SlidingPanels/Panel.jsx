import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('SlidingPanels.Panel');

/**
 * Container for arbitrary content.
 */
class Panel extends Component {
    static propTypes = {
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * A unique id for this panel and used by the SlidingPanels to keep track of the open panel.
         */
        panelId: PropTypes.any.isRequired,
        /**
         * @private.
         * Used internally, func passed in from outer place will be overwritten
         * by SlidingPanels during rendering
         */
        onMount: PropTypes.func,
        /**
         * @private.
         * Used internally, func passed in from outer place will be overwritten
         * by SlidingPanels during rendering
         */
        onUnmount: PropTypes.func,
    };

    static defaultProps = {
        elementRef() {},
        onMount() {},
        onUnmount() {},
    };

    componentDidMount() {
        this.props.onMount(this);
    }

    componentWillUnmount() {
        this.props.onUnmount(this);
    }

    getHeight() {
        return this.el.clientHeight;
    }

    getWidth() {
        return this.el.clientWidth;
    }

    handleMount = el => {
        this.el = el;
        this.props.elementRef(el);
    };

    render() {
        const { panelId } = this.props;
        return (
            <Styled
                data-test="panel"
                data-test-panel-id={panelId}
                {...omit(this.props, keys(Panel.propTypes))}
                innerRef={this.handleMount}
            />
        );
    }
}

export default Panel;
