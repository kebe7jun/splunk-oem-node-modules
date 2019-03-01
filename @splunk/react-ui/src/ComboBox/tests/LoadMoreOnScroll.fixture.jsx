import React, { Component } from 'react';
import ComboBox from '@splunk/react-ui/ComboBox';
import FetchOptions from '@splunk/react-ui/FetchOptions';

class LoadMoreOnScroll extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: '',
            isLoading: false,
            isLoadingMore: false,
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

    handleChange = (e, { value }) => {
        this.handleFetch(value);
    };

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
            this.setState({ value: fetchParams, isLoading: true });
        }

        this.fetchOptions[fetchFunction](fetchParams).then(options => {
            this.setState({ isLoading: false, isLoadingMore: false, options });
        });
    };

    handleScrollBottom = () => {
        this.handleFetch(this.state.options, true);
    };

    generateOptions = () => {
        if (this.state.isLoading) {
            return null;
        }

        /*
        * Filtering is done server-side and the `matchRanges` prop would be either
        * be provided by the server, deduced based on the match algorithm, or omitted.
        */
        return this.state.options.map(movie => (
            <ComboBox.Option
                label={movie.title}
                value={movie.title}
                key={movie.id}
                matchRanges={movie.matchRanges}
            />
        ));
    };

    render() {
        const options = this.generateOptions();

        return (
            <ComboBox
                value={this.state.value}
                controlledFilter
                inline
                menuStyle={{ width: 300 }}
                onChange={this.handleChange}
                onScrollBottom={
                    // Disable when all items are loaded.
                    this.fetchOptions.getFullCount() === this.state.options.length
                        ? null
                        : this.handleScrollBottom
                }
                isLoadingOptions={this.state.isLoading}
                data-test="select-load-more"
                data-number-of-items={this.state.options.length}
            >
                {options}
            </ComboBox>
        );
    }
}

export default LoadMoreOnScroll;
