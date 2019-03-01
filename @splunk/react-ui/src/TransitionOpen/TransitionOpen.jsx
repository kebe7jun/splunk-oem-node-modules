import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { keys, omit } from 'lodash';
import { takeFocus, handleTab } from '@splunk/ui-utils/focus';
import { toClassName } from '@splunk/ui-utils/style';
import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledOpen, StyledNotOpen, StyledInner } = getStyled('TransitionOpen');

class TransitionOpen extends Component {
    static propTypes = {
        animation: PropTypes.oneOf([
            'slideFromTop',
            'slideFromRight',
            'slideFromBottom',
            'slideFromLeft',
            'expandHeight',
            'expandWidth',
            'none',
        ]),
        animateOnMount: PropTypes.bool,
        /** @private */
        className: PropTypes.string,
        children: PropTypes.node,
        /** An additional className to inner container. */
        innerClassName: PropTypes.string,
        innerStyle: PropTypes.object,
        onAnimationEnd: PropTypes.func,
        /** Whether the component is currently open or not */
        open: PropTypes.bool,
        /** An additional className to outer container. */
        outerClassName: PropTypes.string,
        outerStyle: PropTypes.object,
        /**
         * Keep focus within `TransitionOpen` while open.
         */
        retainFocus: PropTypes.bool,
        /**
         * When true, the `TransitionOpen` will automatically take focus when 'open' changes to
         * true.
         */
        takeFocus: PropTypes.bool,
    };

    static defaultProps = {
        animation: 'expandHeight',
        animateOnMount: false,
        innerStyle: {},
        onAnimationEnd() {},
        open: false,
        outerStyle: {},
        retainFocus: false,
        takeFocus: false,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            value: null,
            animating: props.animateOnMount ? props.open : false,
            innerEl: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.open !== nextProps.open) {
            this.setState({
                animating: true,
            });
        }
    }

    handleMount = el => {
        const { animation } = this.props;
        let value;

        if (el) {
            if (this.props.takeFocus) {
                takeFocus(el, 'container');
            }

            switch (animation) {
                case 'slideFromTop':
                case 'slideFromBottom':
                case 'expandHeight':
                case 'none':
                    value = el.clientHeight;
                    break;
                case 'slideFromLeft':
                case 'slideFromRight':
                case 'expandWidth':
                    value = el.clientWidth;
                    break;
                default:
                // Intentionally left empty.
            }
        }
        this.setState({
            value,
            innerEl: el,
        });
    };

    handleRest = () => {
        this.setState({
            animating: false,
        });
        this.props.onAnimationEnd();
    };

    handleTab = e => {
        handleTab(this.state.innerEl, e);
    };

    internalRender = ({ value }) => {
        const {
            animation,
            className,
            children,
            innerClassName,
            innerStyle,
            open,
            outerClassName,
            outerStyle,
        } = this.props;
        const { animating } = this.state;
        const offset = this.state.value - value;
        const Styled = open && !animating ? StyledOpen : StyledNotOpen;
        let transform;
        let dimension;

        if (animating) {
            switch (animation) {
                case 'slideFromTop':
                    transform = `translateY(-${offset}px)`;
                    dimension = 'height';
                    break;
                case 'slideFromBottom':
                case 'none':
                    dimension = 'height';
                    break;
                case 'slideFromLeft':
                    transform = `translateX(${-offset}px)`;
                    dimension = 'width';
                    break;
                case 'slideFromRight':
                    dimension = 'width';
                    break;
                case 'expandHeight':
                    dimension = 'height';
                    break;
                case 'expandWidth':
                    dimension = 'width';
                    break;
                default:
                // Intentionally left empty.
            }
        }

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <Styled
                className={toClassName(className, outerClassName)}
                style={{ ...outerStyle, [dimension]: value }}
            >
                {(open || animating) && (
                    <StyledInner
                        data-test="transition-open"
                        {...omit(this.props, keys(TransitionOpen.propTypes))}
                        innerRef={this.handleMount}
                        tabIndex={-1}
                        className={innerClassName}
                        onKeyDown={this.props.retainFocus ? this.handleTab : null}
                        style={{ ...innerStyle, transform }}
                    >
                        {children}
                    </StyledInner>
                )}
            </Styled>
        );
    };

    render() {
        const { open, animation } = this.props;
        const { value } = this.state;
        const animateTo = open ? value : 0;
        return (
            <Motion
                onRest={this.handleRest}
                style={{
                    value: animation !== 'none' ? spring(animateTo, { precision: 1 }) : animateTo,
                }}
            >
                {this.internalRender}
            </Motion>
        );
    }
}

export default TransitionOpen;
