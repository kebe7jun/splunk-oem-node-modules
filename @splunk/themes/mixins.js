'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createReset = createReset;
exports.clearfix = clearfix;
exports.ellipsis = ellipsis;
exports.printWidth100Percent = printWidth100Percent;
exports.printHide = printHide;
exports.printNoBackground = printNoBackground;
exports.printWrapAll = printWrapAll;
/**
 * @file
 * A collection of style-related helper functions. All of them return a single object containing
 * DOM CSS properties, for example: `{ display: …, fontFamily: … }`.
 *
 * `@splunk/css-loader` automatically makes these mixins available for use but converts their name
 * to kebab-case (to achive backwards compatability). For example: `printHide` can be used as `print-hide`.
 */

// Markdown examples in this file have to prepend a zero width joiner character before each @
// to prevent jsdoc from interpreting something like @mixin as a tag, see:
// https://github.com/jsdoc3/jsdoc/issues/821

function createReset(variables) {
    /**
     * The `reset` mixin resets all css properties to their browser defaults, plus many to
     * theme-specific values. This ensures an element is not inheriting any inappropriate styles.
     *
     * Note that the output includes `all` set to `initial`, which is further transformed by the
     *  `@splunk/css-loader` to support IE11, see `postcss-initial`.
     *
     *  ##### Example (@splunk/css-loader)
     *  ```css
     *  .myButton {
     *      ‍@mixin reset inline-block;
     *  }
     *  ```
     * @name reset
     * @kind function
     * @param {string} [display=inline] Set the `display` property (block, inline-block, …)
     * @public
     */
    return function () {
        var display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'inline';
        return {
            all: 'initial',
            fontFamily: variables.fontFamily,
            fontSize: variables.fontSize,
            lineHeight: variables.lineHeight,
            color: variables.textColor,
            boxSizing: 'border-box',
            display: display,
            borderWidth: '1px',
            visibility: 'inherit',
            outline: 'medium none ' + variables.focusColor
        };
    };
}

/**
 * `clearfix` is used on a container to ensure it's height is at least as tall as any floating
 * children.
 *
 * ##### Example (@splunk/css-loader)
 * ``` css
 * .container {
 *     ‍@mixin clearfix;
 * }
 * ```
 * @public
 */
function clearfix() {
    return {
        '&::after': {
            display: 'table',
            content: '""',
            clear: 'both'
        }
    };
}

/**
 * Use `ellipsis` for overflowing text. Requires `display` to be set to `inline-block` or `block`.
 *
 *  ##### Example (@splunk/css-loader)
 * ```css
 * .button {
 *     ‍@mixin ellipsis;
 *     display: inline-block;
 * }
 * ```
 * @public
 */
function ellipsis() {
    return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    };
}

/**
 * Force an element to be exactly 100% wide so that it doesn't overflow the page.
 *
 * ##### Example (@splunk/css-loader)
 * ```css
 * ‍@media print {
 *     .container {
 *         ‍@mixin print-width-100-percent;
 *     }
 * }
 * ```
 * @public
 */
function printWidth100Percent() {
    return {
        maxWidth: '100% !important',
        width: '100% !important',
        overflow: 'hidden !important'
    };
}

/**
 * Hide an element (such as a button).
 *
 * ##### Example (@splunk/css-loader)
 * ```css
 * ‍@media print {
 *     .interactiveElement {
 *         ‍@mixin print-hide;
 *     }
 * }
 * ```
 * @public
 */
function printHide() {
    return {
        display: 'none !important'
    };
}

/**
 * Remove background gradients and images.
 *
 * ##### Example (@splunk/css-loader)
 * ```css
 * ‍@media print {
 *     .interactiveElement {
 *         ‍@mixin print-no-background;
 *     }
 * }
 * ```
 * @public
 */
function printNoBackground() {
    return {
        background: 'none !important'
    };
}

/**
 * Ensure that all text wraps so that it doesn't overflow the page.
 *
 * ##### Example (@splunk/css-loader)
 * ```css
 * ‍@media print {
 *     .interactiveElement {
 *         ‍@mixin print-wrap-all;
 *     }
 * }
 * ```
 * @public
 */
function printWrapAll() {
    return {
        wordBreak: 'break-all !important',
        wordWrap: 'break-word !important',
        overflowWrap: 'break-word !important',
        whiteSpace: 'normal !important'
    };
}