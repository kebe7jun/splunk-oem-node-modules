import 'core-js/es6/promise';
import { find, concat } from 'lodash';
import { movies } from './movies.json';

/**
 * @param fetchTimeout: number - The number of milliseconds to defer fetching of options.
 * @param fetchMoreTimeout: number - The number of milliseconds to defer fetching additional options.
 * @param numberOfResults: number - Then mumber of options to retrieve per fetch.
 */
export default class FetchOptions {
    constructor({ fetchTimeout = 600, fetchMoreTimeout = 200, numberOfResults = 20 } = {}) {
        this.fetchTimeout = fetchTimeout;
        this.fetchMoreTimeout = fetchMoreTimeout;
        this.numberOfResults = numberOfResults;
        this.reset();
    }

    /**
     * Fake fetches options from a server.
     * @param filter: string - filter options.
     * @param timeout: number - Number of milliseconds to defer fetch.
     * @return A promise that will resolve based on the fetchTimeout value.
     *         Returns array of new options.
     */
    fetch(filter = '', timeout = this.fetchTimeout) {
        if (!this.list.length || this.filter !== filter) {
            this.reset();
        }
        this.filter = filter;

        // If currently fetching, add timeout of previous fetch to current timeout
        if (this.fetching) {
            this.currentFetch += timeout;
        } else {
            this.currentFetch = timeout;
        }
        this.fetching = true;

        return new Promise(resolve => {
            this.timer = setTimeout(() => {
                this.fetching = false;
                this.list = this.concatAndFilter(this.currentOptions, this.filter);
                clearTimeout(this.timer);
                return resolve(this.list);
            }, this.currentFetch);
        });
    }

    /**
     * Increases searching index for new options and runs fetch.
     * @param currentOptions: array - Append options to given array.
     * @return A promise that will resolve based on the fetchTimeout value.
     *         Returns array of new options appended to currentOptions.
     */
    fetchMore(currentOptions = []) {
        this.currentOptions = currentOptions;
        this.firstIndex += this.numberOfResults;
        this.lastIndex += this.numberOfResults;
        return this.fetch(this.filter, this.fetchMoreTimeout);
    }

    concatAndFilter = (options, filter) =>
        concat(
            options,
            this.filterResults(filter)
                .slice(this.firstIndex, this.lastIndex)
                .map(movie => ({
                    title: movie.title,
                    id: movie.id,
                    matchRanges: [
                        {
                            start: 0,
                            end: filter.length,
                        },
                    ],
                }))
        );

    filterResults = filter =>
        movies.filter(movie => movie.title.toLowerCase().indexOf(filter.toLowerCase()) === 0);

    /**
     * Resets firstIndex, LastIndex, currentOptions and list to default values.
     */
    reset() {
        this.firstIndex = 0;
        this.lastIndex = this.numberOfResults;
        this.currentOptions = [];
        this.list = [];
    }

    /**
     * @return Option of given value;
     */
    getOption = value => find(movies, movie => movie.id === value);

    /**
     * @return Options of given values;
     */
    getSelectedOptions = values =>
        movies.filter(movie => !!find(values, value => movie.id === value));

    /**
     * Get current length of indexes fetched.
     */
    getCurrentCount = () => this.list.length;

    /**
     * Get full count of all possible items fetched.
     */
    getFullCount = () =>
        this.filter ? this.filterResults(this.filter || '').length : movies.length;
}
