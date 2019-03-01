## Unit Tests

Unit test commands:

* `$ yarn test:unit` - Run the unit tests.
* `$ yarn test:unit:watch` - Run unit tests in watcher mode.
* `$ yarn test:unit -- --testPathPattern field_utils` - run only tests matching the pattern.
* `$ yarn test:unit:watch -- --testPathPattern field_utils` - run only tests matching the pattern in watcher mode.
* `$ yarn test:unit:coverage` - Run tests and determine code coverage.

Coverage will be generated in the terminal output as well as a HTML report in the `/coverage` directory.