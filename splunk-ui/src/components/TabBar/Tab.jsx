import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Clickable from 'splunk-ui/components/Clickable';
import css from './Tab.css';

function noop() {}

const propTypes = {
    /** @docs-ignore. Is the tab active. */
    active: PropTypes.bool,
    /** @docs-ignore */
    className: PropTypes.string,
    /** See Icon documention for more information. */
    icon: PropTypes.node,
    /** The text shown in the button. */
    label: PropTypes.string,
    /** @docs-ignore. Call back function when activated */
    onClick: PropTypes.func,
    /** A unique id for this tab and used by the TabBar to keep track of the open tab. */
    tabId: PropTypes.string,
};

const defaultProps = {
    active: false,
    onClick: noop,
};

function Tab(props) {
    const { active, className, icon, label, onClick, tabId, ...otherProps } = props;
    const classes = toClassName(css.main, className);
    function handleClick(e) {
        onClick(e, { tabId });
        e.preventDefault();
    }
    return (
        <li
            className={classes}
            data-active={active}
            data-tab-id={tabId}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <Clickable className={css.link} onClick={handleClick} disabled={active}>
                {active && <span className={css.leftAngle} />}
                <span className={css.rightAngle} />
                {icon && <span className={css.icon}>{icon}</span>}
                {label}
            </Clickable>
        </li>
    );
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
export default Tab;
