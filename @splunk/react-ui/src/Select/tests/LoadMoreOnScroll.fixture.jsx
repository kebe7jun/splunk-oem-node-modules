import React, { Component } from 'react';
import Select from '@splunk/react-ui/Select';
import FetchOptions from '@splunk/react-ui/FetchOptions';

class LoadMoreOnScroll extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: '',
            keyword: '',
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
        this.setState({ value, keyword: '' });
    };

    /**
     * @param fetchParams: For regular fetch, value is passed. If fetching more options,
     *                     currentOptions are passed to append new options to it. Note: Use
     *                     lodash concat instead of Array.concat. Array.concat runs very slow in IE.
     * @param fetchMore: If fetching more options.
     */
    handleFetch = (fetchParams, fetchMore = false) => {
        const fetchFunction = fetchMore ? 'fetchMore' : 'fetch';

        if (fetchMore) {
            this.setState({ keyword: this.state.keyword, isLoadingMore: true });
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
        <Select.Option
            label={movie.title}
            value={movie.id}
            key={isSelected ? 'selected' : movie.id}
            hidden={!!isSelected}
            matchRanges={movie.matchRanges}
        />
    );

    generateOptions = () => {
        // The selected item always has to be in the option list, but can be hidden
        let selectedOption;
        if (this.state.value) {
            const selectedMovie = this.fetchOptions.getOption(this.state.value);
            selectedOption = this.createOption(selectedMovie, true);
        }

        if (this.state.isLoading) {
            // Only return the selected item
            return selectedOption;
        }

        const list = this.state.options.map(movie => this.createOption(movie));
        if (selectedOption) {
            list.push(selectedOption);
        }
        return list;
    };

    render() {
        const options = this.generateOptions();

        return (
            <Select
                value={this.state.value}
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
            </Select>
        );
    }
}

export default LoadMoreOnScroll;
