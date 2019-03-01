import React from 'react';
import PropTypes from 'prop-types';
import { flatten, isEmpty, indexOf, repeat, times } from 'lodash';
// import Prism in a pollution-free way
//   Prism will grab all <pre><code> on the page and inject them once
//   it finds itself in a browser, so here we set window to undefined in
//   his scope to trick him.
import Prism from 'imports-loader?window=>undefined,global=>undefined!prismjs';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled, StyledCode, StyledIndent, StyledToken } = getStyled('Code');

const supportedLanguages = [
    'markup',
    'xml',
    'html',
    'mathml',
    'svg',
    'css',
    'clike',
    'javascript',
    'js',
    'bash',
];

// Prism language extensions require Prism.languages exists in the context
// eslint-disable-next-line no-undef
const langExtensions = require.context(
    'exports-loader?Prism.languages!imports-loader?Prism=>{languages:{}}!prismjs/components',
    false,
    /\.js/
);

function tokenize(text, language) {
    let rules = Prism.languages[language];
    if (isEmpty(rules)) {
        if (__DEV__ && indexOf(supportedLanguages, language) < 0) {
            throw new Error(
                `unsupported language ${language}, list of supported languages can be found at syntax.supportedLanguages`
            );
        }
        rules = langExtensions(`./prism-${language}.js`)[language];
    }
    return Prism.tokenize(text, rules);
}

const propTypes = {
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Sets the length of the left-indent. Use only when the value of
     `showIndentGuide` is `true`.
     */
    indentChars: PropTypes.number,
    /**
     * Applies syntax highlighting for a specific programming language.
     */
    language: PropTypes.oneOf(supportedLanguages),
    /**
     * Displays the indent guideline.
     */
    showIndentGuide: PropTypes.bool,
    /**
     * Inserts code content into the code block.
     */
    value: PropTypes.string,
};

const defaultProps = {
    indentChars: 4,
    language: 'javascript',
    showIndentGuide: true,
    value: '',
};

export default function Code(props) {
    const { elementRef, value, indentChars, language, showIndentGuide, ...otherProps } = props;

    const indentBlock = repeat(' ', indentChars);
    const makeIndentGuide = spaces => {
        const level = Math.floor(spaces / indentChars);
        const rest = spaces % indentChars;
        const spans = times(level, idx => (
            <StyledIndent key={idx.toString()}>{indentBlock}</StyledIndent>
        ));
        if (rest) {
            spans.push(repeat(' ', rest));
        }
        return spans;
    };

    const tokens = tokenize(value, language);

    const render = tks =>
        tks.map((part, idx) => {
            if (typeof part === 'string') {
                if (!showIndentGuide) {
                    return part;
                }

                const lines = part.split('\n');
                if (lines.length === 1) {
                    return part;
                }

                return flatten(
                    lines.map((line, lineNo) => {
                        const res = lineNo === 0 ? [] : ['\n'];

                        const indentMatch = line.match(/^(\s+)(.*)/);
                        if (!indentMatch) {
                            res.push(line);
                        } else {
                            res.push(
                                <span key={`${idx.toString()}:${lineNo.toString()}`}>
                                    {makeIndentGuide(indentMatch[1].length)}
                                </span>,
                                indentMatch[2]
                            );
                        }

                        return res;
                    })
                );
            }

            const content = typeof part.content === 'string' ? part.content : render(part.content);

            return (
                <StyledToken partType={part.type} key={idx.toString()}>
                    {content}
                </StyledToken>
            );
        });

    const codeContent = render(tokens);

    return (
        <Styled data-test="code" innerRef={elementRef} {...otherProps}>
            <StyledCode className={`language-${language}`}>{codeContent}</StyledCode>
        </Styled>
    );
}

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;
