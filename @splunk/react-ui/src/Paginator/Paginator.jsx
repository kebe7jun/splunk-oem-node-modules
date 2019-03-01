import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import Box from '@splunk/react-ui/Box';
import ChevronLeft from '@splunk/react-icons/ChevronLeft';
import ChevronRight from '@splunk/react-icons/ChevronRight';
import PaginatorButton from './PaginatorButton';

const propTypes = {
    /** Display a link to the last page in a collection */
    alwaysShowLastPageLink: PropTypes.bool,
    /** Currently selected page */
    current: PropTypes.number.isRequired,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Number of pages to display. If greater than `totalPages`, `totalPages` will be used instead.
     */
    numPageLinks: PropTypes.number,
    /** Callback to handle page change */
    onChange: PropTypes.func,
    /** Total number of pages in collection. This can change as collection populates. */
    totalPages: PropTypes.number.isRequired,
};

const defaultProps = {
    current: 1,
    alwaysShowLastPageLink: false,
    numPageLinks: 9,
};

function Paginator(props) {
    const {
        onChange,
        current,
        alwaysShowLastPageLink,
        numPageLinks,
        totalPages,
        ...otherProps
    } = props;

    // Can't show more links than total number of pages.
    const numLinks = Math.min(numPageLinks, totalPages);

    const loMid = Math.ceil(numLinks / 2);
    const hiMid = Math.ceil(totalPages - numLinks / 2);

    const pages = [];
    if (totalPages <= 1) {
        return null;
    }
    if ((current > totalPages || current < 1) && __DEV__) {
        throw new Error('Error in Paginator: Current page is out of bounds');
    }
    let firstPage;
    let lastPage;
    if (current <= loMid) {
        firstPage = 1;
        lastPage = firstPage + Math.min(totalPages, numLinks) - 1;
    } else if (current > loMid && current < hiMid) {
        lastPage = Math.ceil(current + (numLinks - 1) / 2);
        firstPage = lastPage - numLinks + 2;
    } else if (current >= hiMid) {
        firstPage = totalPages - numLinks + 1;
        lastPage = totalPages;
    }

    pages.push(
        <PaginatorButton
            data-test="prev"
            disabled={current === 1}
            onClick={onChange}
            page={current - 1}
            key="prev"
            aria-label={_('Go to previous page')}
        >
            <ChevronLeft screenReaderText={null} style={{ marginRight: 3, marginTop: -1 }} />
            {_('Prev')}
        </PaginatorButton>
    );

    if (current > loMid && totalPages > numLinks) {
        pages.push(
            <PaginatorButton
                label="1"
                key="first"
                onClick={onChange}
                page={1}
                aria-label={_('Go to first page')}
            />
        );
        pages.push(<PaginatorButton label="..." disabled key="prevEllipsis" role="presentation" />);
    }

    for (let i = firstPage; i <= lastPage; i += 1) {
        const isCurrent = i === current;

        pages.push(
            <PaginatorButton
                label={String(i)}
                selected={isCurrent}
                onClick={onChange}
                page={i}
                key={i}
                aria-label={isCurrent ? _('Current page') : _('Go to page $1').replace('$1', i)}
            />
        );
    }

    if (current < hiMid && totalPages > numLinks) {
        pages.push(<PaginatorButton label="..." disabled key="nextEllipsis" role="presentation" />);
        if (alwaysShowLastPageLink) {
            pages.push(
                <PaginatorButton
                    data-test="last"
                    label={String(totalPages)}
                    key="last"
                    onClick={onChange}
                    page={totalPages}
                    aria-label={_('Go to last page')}
                />
            );
        }
    }

    pages.push(
        <PaginatorButton
            data-test="next"
            disabled={current === totalPages}
            onClick={onChange}
            page={current + 1}
            key="next"
            aria-label={_('Go to next page')}
        >
            {_('Next')}
            <ChevronRight screenReaderText={null} style={{ marginLeft: 3, marginTop: -1 }} />
        </PaginatorButton>
    );
    return (
        <Box
            data-test="paginator"
            data-test-current={current}
            flex
            inline
            role="navigation"
            aria-label={_('Pagination navigation')}
            {...otherProps}
        >
            {pages}
        </Box>
    );
}

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;
export default Paginator;
