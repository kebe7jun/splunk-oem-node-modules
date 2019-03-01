import React from 'react';
import PropTypes from 'prop-types';
import ReactCommonmarkRenderer from 'commonmark-react-renderer';
import Commonmark from 'commonmark';
import Box from '@splunk/react-ui/Box';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';
import Code from '@splunk/react-ui/Code';
import Heading from '@splunk/react-ui/Heading';
import Link from '@splunk/react-ui/Link';
import List from '@splunk/react-ui/List';
import P from '@splunk/react-ui/Paragraph';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const parser = new Commonmark.Parser();

const { StyledCodeBlock, StyledCodeInline } = getStyled('Markdown');

const propTypes = {
    /** @private */
    className: ClassNamePropCheck,
    /** A custom blockquote renderer. The function is passed an object containing `children`. */
    blockquoteRenderer: PropTypes.func,
    /**
     * A custom code literal renderer. The function is passed an object containing `literal`
     * and `inline`.
     */
    codeRenderer: PropTypes.func,
    /**
     * A custom code block renderer. The function is passed an object containing `language` and
     * `literal`.
     */
    codeBlockRenderer: PropTypes.func,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * A custom heading renderer. The function is passed an object containing `level` (from 1 to
     * 6) and `children`.
     */
    headingRenderer: PropTypes.func,
    /**
     * A custom image renderer. The function is passed an object containing `src`, `title`,
     * and `alt`.
     */
    imageRenderer: PropTypes.func,
    /**
     * A custom link renderer. This is useful for single-page apps that need to handle links
     * internally. The function is passed an object containing `href`, `title`, and `children`.
     */
    linkRenderer: PropTypes.func,
    /**
     * A custom list renderer. The function is passed an object containing `start`,
     * `type` ('bullet' or 'ordered') and `tight`.
     */
    listRenderer: PropTypes.func,
    /** A custom list item renderer. The function is passed an object containing `children`. */
    itemRenderer: PropTypes.func,
    /**
     * A custom paragraph renderer. The function is passed an object containing `children`.
     */
    paragraphRenderer: PropTypes.func,
    /** The content to be parsed and rendered. */
    text: PropTypes.string.isRequired,
};

/**
 * The Markdown component renders the given markdown text as a React component.
 * The composing prefers @splunk/react-ui components over plain html components, for example
 * links will be rendered as the `@splunk/react-ui/Link` component instead of plain `<a>` tag.
 */
export default function Markdown(props) {
    const {
        // eslint-disable-next-line no-unused-vars
        className,
        elementRef,
        text,
        blockquoteRenderer,
        codeRenderer,
        codeBlockRenderer,
        headingRenderer,
        imageRenderer,
        linkRenderer,
        listRenderer,
        itemRenderer,
        paragraphRenderer,
        ...otherProps
    } = props;

    // keep this option object inside the constructor, otherwise the renderers
    // below will confuse the doc-gen
    /* eslint-disable react/prop-types */
    const rendererOptions = {
        renderers: {
            CodeBlock:
                codeBlockRenderer ||
                (({ literal, language }) => (
                    <StyledCodeBlock>
                        <Code language={language} value={literal} />
                    </StyledCodeBlock>
                )),

            Code: codeRenderer || (({ literal }) => <StyledCodeInline>{literal}</StyledCodeInline>),

            Heading:
                headingRenderer ||
                (({ level, children }) => <Heading level={Math.min(level, 4)}>{children}</Heading>),

            Link:
                linkRenderer ||
                (({ href, title, children }) => (
                    <Link to={href} title={title}>
                        {children}
                    </Link>
                )),

            List:
                listRenderer ||
                (({ children, type }) => (
                    <List type={type === 'bullet' ? 'disc' : 'decimal'}>{children}</List>
                )),

            Item: itemRenderer || (({ children }) => <List.Item>{children}</List.Item>),

            Paragraph: paragraphRenderer || (({ children }) => <P>{children}</P>),
        },
        escapeHtml: true,
    };
    /* eslint-enable react/prop-types */

    if (blockquoteRenderer) {
        rendererOptions.renderers.Blockquote = blockquoteRenderer;
    }

    if (imageRenderer) {
        rendererOptions.renderers.Image = imageRenderer;
    }

    const renderer = new ReactCommonmarkRenderer({ ...rendererOptions });

    const ast = parser.parse(text);
    const elements = renderer.render(ast);

    return (
        <Box data-test="markdown" innerRef={elementRef} {...otherProps}>
            {elements}
        </Box>
    );
}
Markdown.propTypes = propTypes;
