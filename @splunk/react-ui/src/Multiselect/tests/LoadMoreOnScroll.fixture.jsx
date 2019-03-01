import React, { Component } from 'react';
import Multiselect from '@splunk/react-ui/Multiselect';
import FetchOptions from '@splunk/react-ui/FetchOptions';

class LoadMoreOnScroll extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            values: [10, 30],
            keyword: '',
            isLoading: false,
            options: [],
        };

        /**
         * FetchOptions mimicks a real server by setting a timeout before returning new options. It
         * automtically tracks current indexes fetched and filtered options. Depending on how a server
         * is implemented, you would have more state values to track here such as indexes and list count.
         */
        this.fetchOptions = new FetchOptions({ fetchTimeout: 0, fetchMoreTimeout: 0 });
    }

    componentDidMount() {
        this.handleFetch();
    }

    /**
     * @param fetchParams: For regular fetch, value is passed. If fetching more options,
     *                     currentOptions are passed to append new options to it. Note: Use
     *                     lodash concat instead of Array.concat. Array.concat runs very slow in IE.
     * @param fetchMore: If fetching more options.
     */
    handleFetch = (fetchParams = '', fetchMore = false) => {
        const fetchFunction = fetchMore ? 'fetchMore' : 'fetch';

        if (fetchMore) {
            this.setState({ isLoadingMore: true });
        } else {
            this.setState({ keyword: fetchParams, isLoading: true });
        }

        this.fetchOptions[fetchFunction](fetchParams).then(options => {
            this.setState({ isLoading: false, isLoadingMore: false, options });
        });
    };

    handleScrollBottom = () => {
        this.handleFetch(this.state.options, true);
    };

    createOption = (movie = {}, isSelected = false) => (
        /**
         * Filtering is done server-side and the `matchRanges` prop would be either
         * be provided by the server, deduced based on the match algorithm, or omitted.
         * To simplify this example, the search value only matches the beginning of the title.
         */
        <Multiselect.Option
            label={movie.title}
            value={movie.id}
            key={isSelected ? 'selected' : movie.id}
            hidden={!!isSelected}
            matchRanges={movie.matchRanges}
        />
    );

    generateOptions = () => {
        // The selected items always have to be in the option list, but can be hidden
        let selectedOptions = [];
        if (this.state.values.length) {
            const selectedMovies = this.fetchOptions.getSelectedOptions(this.state.values);
            selectedOptions = selectedMovies.map(movie => this.createOption(movie, true));
        }

        if (this.state.isLoading) {
            // Only return the select items
            return selectedOptions;
        }

        const list = this.state.options.map(movie => this.createOption(movie));
        return list.concat(selectedOptions);
    };

    render() {
        const options = this.generateOptions();

        return (
            <Multiselect
                values={this.state.values}
                onScrollBottom={
                    // Disable when all items are loaded.
                    this.fetchOptions.getFullCount() === this.state.options.length
                        ? null
                        : this.handleScrollBottom
                }
                isLoadingOptions={this.state.isLoading}
                inline
                data-test="select-load-more"
                data-number-of-items={this.state.options.length}
            >
                {options}
            </Multiselect>
        );
    }
}

export default LoadMoreOnScroll;
