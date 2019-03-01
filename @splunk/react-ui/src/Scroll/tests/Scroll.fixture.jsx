import React, { Component } from 'react';
import Scroll from '@splunk/react-ui/Scroll';
import Button from '@splunk/react-ui/Button';
import P from '@splunk/react-ui/Paragraph';

class Basic extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            hasScrolled: false,
            hasScrolledInner: false,
            label: '',
        };
    }

    scrollTop = (which, direction) => {
        const element = which === 'outer' ? this.scrollEl : this.scrollElInner;

        const state = {};
        state[which === 'outer' ? 'top' : 'topInner'] =
            element.scrollTop + 50 * (direction === 'down' ? 1 : -1);

        this.setState(state);
    };

    handleScrollComplete = () => {
        this.setState({
            top: undefined,
        });
    };

    handleScrollInnerComplete = () => {
        this.setState({
            topInner: undefined,
        });
    };

    handleClickDown = () => {
        this.scrollTop('outer', 'down');
    };

    handleClickDownInner = () => {
        this.scrollTop('inner', 'down');
    };

    handleClickUp = () => {
        this.scrollTop('outer', 'up');
    };

    handleClickUpInner = () => {
        this.scrollTop('inner', 'up');
    };

    handleScrollComplete = () => {
        this.setState({
            top: undefined,
        });
    };

    handleScroll = () => {
        this.setState({
            hasScrolled: true,
            label: 'Scrolled',
        });
    };

    handleScrollInner = () => {
        this.setState({
            hasScrolledInner: true,
            label: 'Scrolled Inner',
        });
    };

    render() {
        return (
            <div>
                <Button id="scrollDown" label="Scroll Down" onClick={this.handleClickDown} />
                <Button id="scrollUp" label="Scroll Up" onClick={this.handleClickUp} />
                <Button
                    id="scrollDownInner"
                    label="Scroll Down Inner"
                    onClick={this.handleClickDownInner}
                />
                <Button
                    id="scrollUpInner"
                    label="Scroll Up Inner"
                    onClick={this.handleClickUpInner}
                />
                <Scroll
                    id="scroll-box"
                    elementRef={el => {
                        this.scrollEl = el;
                    }}
                    onScroll={this.handleScroll}
                    top={this.state.top}
                    onScrollComplete={this.handleScrollComplete}
                    style={{ height: 200 }}
                    data-has-scrolled={this.state.hasScrolled}
                >
                    <P style={{ height: 800 }}>Test Paragraph 1</P>
                    <P style={{ height: 800 }}>Test Paragraph 2</P>
                    <P style={{ height: 800 }}>Test Paragraph 3</P>
                    <P style={{ height: 800 }}>Test Paragraph 4</P>
                    <div id="scroll-marker">Test Div</div>
                    <Scroll
                        id="scroll-box-inner"
                        elementRef={el => {
                            this.scrollElInner = el;
                        }}
                        onScroll={this.handleScrollInner}
                        onScrollComplete={this.handleScrollInnerComplete}
                        top={this.state.topInner}
                        style={{ height: 200 }}
                        data-has-inner-scrolled={this.state.hasScrolledInner}
                    >
                        <P style={{ height: 800 }}>Test Paragraph 1</P>
                        <P style={{ height: 800 }}>Test Paragraph 2</P>
                        <P style={{ height: 800 }}>Test Paragraph 3</P>
                        <P style={{ height: 800 }}>Test Paragraph 4</P>
                        <div id="scroll-marker-inner">Test Div</div>
                    </Scroll>
                </Scroll>
                <div style={{ background: '#eee' }}>{this.state.label}</div>
            </div>
        );
    }
}

export default Basic;
