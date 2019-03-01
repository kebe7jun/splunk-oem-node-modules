# Change Log

0.2.3 - Release date: July 16, 2018

* Releasing again, 0.2.2 release failed.


0.2.2 - Release date: July 16, 2018

New Features:

* Add canMoveColumns prop to enable/disable column re-ordering
* make getEditUrl prop optional
* Add isSingleRowTableFilter prop which renders the TableFilters on one single row
* Remove tableFiltersStyle prop
* Apply Viz-refresh styles on the page
* Add support to open ModelEdit on click of object name in ColumnName

Bug fixes:

* Fix CSS to match UX designer specs

---

0.2.1 - Release date: April 30, 2018

Bug fixes:

* Fix testing selectors

---

0.2.0 - Release date: April 30, 2018

New Features:

* Add ability to target components for testing

Bug fixes:

* Change the way strings are localized
* Fix ESLint errors

---

0.1.35 - Release date: April 24, 2018

* Upgrade most of the components from package.json React 16.2.0, react-ui 1.3.3, etc...
* Move component to workflow-components repository

---

0.1.34 - Release date: April 9, 2018

Bug fixes:
Previous release package was broken.

---

0.1.33 - Release date: April 9, 2018

New Features:

* Add tooltips to Name column for truncated values.

Bug Fixes:

* Fix warning for bulk change status modal.

---

0.1.32 – Release date: April 6, 2018

Bug Fixes:

* Fix ChangeStatus modal content.
* Go back to previous page if deleting all objects on current page.

---

0.1.31 – Release date: March 19, 2018

Bug Fixes:

* Use props.nameAttribute instead of hardcoded 'name'.

---

0.1.30 – Release date: March 16, 2018

New Features:

* Add warning messages to modals.

---

0.1.28 – Release date: March 1, 2018

Bug Fixes:

* Remove WaitSpinners and update labels when state.isWorking instead.

---

0.1.27 – Release date: Feb 28, 2018

Bug Fixes:

* In NewEditClone Modal, defaults description to empty string to avoid React warning about controlled and uncontrolled Text.

---

0.1.26 – Release date: Feb 28, 2018

New Features:

* Add more flexibility to ColumnActions.

---

0.1.25 – Release date: Feb 28, 2018

Bug Fixes:

* In Column/Actions handleRequestClose, don't setState of component that might be unmounted

---

0.1.24 – Release date: Feb 23, 2018

New Features:

* Add WaitSpinners to Modals

---

0.1.23 – Release date: Feb 22, 2018

New Features:

* Add objectCollectionFields prop to Main in order to support partial fetches

Bug Fixes:

* Fix unit tests

---

0.1.22 – Release date: Feb 16, 2018

New Features:

* Add prop to rowInfo in HelperMethod that contains the value of the table row 'toggle-switch'

---

0.1.21 – Release date: Feb 16, 2018

New Features:

* Adopt new 'disabled' prop of Row of Table

---

0.1.20 – Release date: Feb 1, 2018

Bug Fixes:

* Align vertically cell content
* Add single quote to wrap object name in Delete and Change Status modals
* Fix FOC by switching fetching state before the debouncing of handleRefreshListing

---

0.1.19 – Release date: Jan 25, 2018

* Check object permissions before showing enable/disable control
* Extract setPageTitle function
* Add ErrorBoundary

---

0.1.18 – Release date: Jan 18, 2018

* Fix URLs where rootPath is already defined in this.props.objectsCollectionPath

---

0.1.17 – Release date: Jan 17, 2018

* Fix webpack.config.js

---

0.1.16 – Release date: Jan 17, 2018

* Fix isWorking state on handleError modal functions
* Add support for divider in edit actions and bulk actions
* Fix webpack.config.js

---

0.1.15 – Release date: Jan 12, 2018

* Fix function signature of fetchCount

---

0.1.14 – Release date: Jan 11, 2018

* Add isEnabled function parameter which evaluates whether the current object is enabled for customization purpose.
* Fix demo app bug with mock data.
* Add isWorking bool to state to disabled primary button on save.
* Add additionalCreateOptions option to header.
* Add unit and functional tests.
* Change fixed Menu width to auto
* Add support for customBulkActions and customActions
* Add support for change status
* Add clear selection handler

---

0.1.13 – Release date: Dec 14, 2017

* Add ROOT_PATH to default fetch URLs

---

0.1.12 – Release date: Dec 13, 2017

* Fix bug where the page didn't refresh on new this.props.permissions value

---

0.1.11 – Release date: Dec 12, 2017

* Fix webpack.config.js bug for utils files.

---

0.1.10 – Release date: Dec 12, 2017

* Fix expansion row colSpan.
* Fix long names for Delete Modal, App and owner filters.

---

0.1.9 – Release date: Dec 12, 2017

* Fix IE11 with buttons.

---

0.1.8 – Release date: Dec 11, 2017

* Fix ESLint issues.

---

0.1.7 – Release date: Dec 11, 2017

* Deploy latest version.

---

* Initial version
