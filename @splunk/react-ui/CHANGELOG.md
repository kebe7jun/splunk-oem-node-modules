Change Log
============

2.0.0 - TBA
----------
API Changes:
* `CardLayout` children are now required to be `Card`s.

1.5.2 - TBA
----------
Bug Fixes:
* New values in `Multiselect` were not added on click (SUI-1550).
  
1.5.1 - August 7, 2018
----------
Bug Fixes:
* `Resize` (in border mode) was not showing drag handles. The change introduced in 1.4.4 (for SUI-1409) was reverted.
* `react-event-listener` dependency was upgraded to avoid transistive dependency issues with `@babel/runtime` (SUI-1546).

1.5.0 - July 27, 2018
----------
New Features:
* `Concertina` panels now support a `disabled` status (SUI-529).
* `RadioList` now allows `RadioList.Option` to enable `disabled` (SUI-1534).

Bug Fixes:
* `Table` with a fixed head was calculating head column width incorrectly in some cases (SUI-1527).
* `Select` in a `ControlGroup` now works better with screen readers (SUI-1365).
* `Card` with onClick handler now renders with the same formatting as other `Card`s (SUI-1499).

1.4.4 - June 30, 2018
----------
Bug Fixes:
* Clicking away from `Multiselect` will clear filter (SUI-1263).
* Disabled `TabBar` tab will not display tooltip (SUI-1493).
* Bootstrap no longer overrides `File` input styles (SUI-1496).
* Content inside of `Resize` is not cropped (SUI-1409).

1.4.3 - June 7, 2018
----------
Bug Fixes:
* Fixed `Table` header rendering issue (SUI-1297).

Style Changes:
* `Switch` checkbox now uses a pointer cursor (SUI-1373).

1.4.2 - May 24, 2018
----------
Style Changes:
* `Button` pill hover border changed to match style guide (SUI-1390).

1.4.1 - May 3, 2018
----------
Bug Fixes:
* Fixed `MultiSelect compact` select all while disabled bug (APPLAT-835).

1.4.0 - April 23, 2018
----------
New Features:
* `Select` now supports a `suffixLabel` prop to add text after selected label (SUI-1426).
* `TabLayout.Panel` now supports a `disabled` prop (SUI-1434).

Bug Fixes:
* `Select` and `Dropdown` menu will not have overlapped rounded corners (SUI-1435).
* `Tooltip` now uses an easier to read cursor (SUI-1302).

Style Changes:
* `Table` padding changed to match style guide (SUI-1445).

1.3.3 - March 20, 2018
----------
Bug Fixes:
* `Text` now includes `name` in `onChange` callbacks after clearing (SUI-1413).

1.3.2 - March 6, 2018
----------
Bug Fixes:
* `Date` can now be set with the keyboard after pressing escape (SUI-1400).
* `Select` with a filter no longer breaks when the browser is zoomed (SUI-1378).

1.3.1 - N/A
----------
Was not published.

1.3.0 - March 2, 2018
----------
New Feature:
* `MultiSelect` now supports a `useClickawayOverlay` prop to prevent click aways from executing actions on the page (SUI-1393).

Bug Fix:
* `Select` no longer clears the filter on close (SUI-1389).

1.2.0 - February 14, 2018
----------
New Features:
* `Row` of `Table` now supports 'disabled' prop (SUI-1247).

Bug Fixes:
* Changed border-color for disabled `Text` input (SUI-1371).

1.1.1 - February 5, 2018
----------
Bug Fixes:
* Corrected brand color in `Logo` (SUI-1326).
* `StaticContent` now allows resizes vertically when text wraps (SUI-1351).
* Changed primary and error `Button` font weight to semibold (SUI-1350).
* Corrected hover color on `Button` (SUI-1364).

1.1.0 - January 24, 2018
----------
New Features:
* DOM hook added to `RenderToLayer` to facilitate interactions with Backbone components (SUI-1327).

Bug Fixes:
* Improved alignment of `Switch` with `ControlGroup` and other controls (SUI-1329).
* In `Switch`, the `value` prop is no longer required (SUI-1316).
* `RadioGroup` double borders fixed (SUI-1320).

Style Changes:
* `Slider` styles revamped (SUI-1301).
* Colors used in `Progress` updated (SUI-1317).
* Background color in `Accordion`, `Collapsible`, and `Concertina` updated to improve contrast (SUI-1324).
* Updated default and secondary button hover states to improve contrast (SUI-1325).
* Changed the color of the underline in `Tab` (SUI-1328).

1.0.0 - January 4, 2018
----------
New visual design.

New Features:
* `Heading` supports section and subsection levels (SUI-1267).
* `Button` supports secondary appearance.
* `Slider` supports an arbitrary node for `minLabel` and `maxLabel` props (SUI-1256).
* `Message` supports a `fill` prop (SUI-1305).

API Changes:
* `Heading` no longer supports level 5 (SUI-1267).

Bug Fixes:
* Accessibility improvements in `Code`.
* Resize correctly tracks to mouse position when the window or parent element is scaled (SUI-1289).
* Test hooks in `Table` head renders correct data (SUI-1268).
* `JSONTree` clickable values correctly take focus (SUI-1282).
* `Popover` and `Modal` appear at the correct `z-index` within the page stacking context (SUI-1313).

0.13.2 - December 13, 2017
----------
Bug Fix:
* `Table` dropdown menus align to the mouse position (SUI-1273).

0.13.1 - December 1, 2017
----------
Bug Fix:
* `Text` with multiline no longer throws errors (SUI-1264).

0.13.0 - November 20, 2017
----------
New Features:
* `Select`, `ComboBox`, and `Multiselect` support loading more results when scrolling to the bottom of the menu (SUI-506).
* `Modal` supports peek mode to view content behind the modal (SUI-547).
* `Number` supports hiding the step buttons (SUI-1194).

New Test Hooks:
* `Message` `content` (SUI-1196).
* `Button`, `Menu.Item`, `Multiselect.Item`, `TabBar.Tab`, and the components that compose these support a `label` test hook (SUI-1197).

API Changes:
* Upgraded React to version 16. React 15 is no longer supported (SUI-1133).
* `className` prop is no longer accepted on components except where it has been explicitly included in the API. Passing in the `className` prop will throw an error and the value will not get passed down to the component.
* `data-component` attribute has been removed from all components. Use the [test api instead](/Packages/react-ui/Testing) (SUI-842).
* `Scroll#scrollTo` method was removed and replaced with `top` and `left` props (SUI-1124).

Bug Fixes:
* Corrects `Popover` position when `pointTo` prop is used with position above (SUI-1250).
* `Button` no longer overflows the size of the control box when placed in a `ControlGroup` (SUI-1130).
* `Date` calendar heading now has correct localization (SUI-1211).
* `Date` calendar will not open when disabled (SUI-1252).
* `Slider` handle aligned correctly with bar in Firefox (SUI-1249).

Style changes:
* `Link` inherits its font family (SUI-1213).

0.12.3 - November 7, 2017
----------
Bug Fix:
* `Tooltip` now closes when used with a disabled button (SUI-1232).

0.12.2 - October 6, 2017
----------
Bug Fix:
* `RadioBar` and a `ButtonGroup` fixes (SUI-1164):
    * `RadioBar.Option` and a `Button` accept styles.
    * `RadioBar.Option` and a `Button` will not grow beyond the size of the container.
    * When `appearance` is set to `'pill'`, the rounded corners are no longer removed.


0.12.1 - October 2, 2017
----------
Bug Fixes:
* `Popover` menus no longer shift position after opening when calculating size relative to the anchor (SUI-1154).
* `Tooltip` will not display if content is not defined. Children will style display if defined, but the '?' toggle will not (SUI-1157).
* `CardLayout` should now be usable and imports `Card` correctly (SUI-1156).

0.12.0 - September 25, 2017
----------

Deprecation Notices:
* The `data-component` attributes will be removed from every component in the next release. Use the [test API](/Packages/react-ui/Testing) instead.
* `className` prop will be ignored on components where it has not been explicitly included in the API.

New Components:
* `Card` and `CardLayout` (SUI-350)
* `Resize` (SUI-717)

New Features:
* `Card` and `CardLayout` component (SUI-350).
* `ComboBox`, `Multiselect`, and `Select`:
    * Text highlighting while filtering (SUI-507)
* `Multiselect` and `Select`:
    * Custom markup in options (SUI-893)
* `RadioList` and `Switch` now support error state (SUI-657, SUI-962).
* `Table`:
    * Docking the horizontal scroll bar (SUI-691)
    * Clickable rows (SUI-923)
    * Selectable rows (SUI-986)
    * Row expansion now supports multiple sub-rows (SUI-1052)
* `TabBar.Tab` and `TabLayout.Panel` now support a `tooltip` prop.
* All components now support an `elementRef` prop for accessing the underlying DOM element of the component (SUI-897).
* `FormRows` has static methods to facilitate adding, moving, and removing rows (SUI-907).

API Changes:
* `getEl` methods were removed from all components and replaced with the `elementRef` prop (SUI-897).
* `Menu.Item` no longer supports the `label` prop. Use `children` instead (SUI-1044).
* In `Multiselect.Option` and `Select.Option`, `children` will now replace `label` if provided (SUI-893).
* `Clickable` props removed: `screenReaderContent`, `contentWrapperClassName`, and `newContextIconClassName` (SUI-984).
* `Popover`s now close on mousedown rather than click (SUI-1038).

Style Changes:
* If a `Button` only has an icon it will be square (SUI-1085).

Bug Fixes:
* `JSONTree` is no longer cut off when wider than its container (SUI-960)
* `Multiselect` now shows no matches message when there are heading and all options are selected (SUI-1018).
* `Popover` now closes when clicking on an element that is removed from the DOM (SUI-1038).
* `Table` row expansion works with docking header (SUI-1039).
* `RadioBar.Option` `icon` prop validation was fixed (SUI-1103).
* `File` allows replacement of selected files (SUI-1114).

0.11.4 - September 5, 2017
----------

Bug Fix:
* `ComboBox`, `Select`, and `Multiselect` no longer throw prop validation errors when
  `noResultsMessage` is a node (SUI-1072).


0.11.3 - August 29, 2017
----------

Bug Fixes:
* `Table` with a fixed head no longer throws errors if the parent component re-renders on mount (SUI-1039).
* `Switch` no longer shrinks when its label wraps (SUI-1041).

0.11.2 - August 15, 2017
----------

Bug Fix:
* In Firefox, `Popover` now closes when clicking away to a `Text` component (SUI-1030).


0.11.0 - July 24, 2017
----------

New Features:
* New test hook API added to make testing easier and more robust (PBL-3359). The documentation now has a [Testing Overview](/Packages/react-ui/Testing)  and test section for each component describing the API.
* All subcomponents are now available as named exports. For example, `import Accordion, { Panel } from '@splunk/react-ui/Accordion';` now works as expected (SUI-750).
* All controls now provide the `name` prop to the `onChange` callback (SUI-759).
* A number of accessibility improvements (PBL-3580).
* `File`:
    * New prop that enables the user to drop the file anywhere on the screen (SUI-788).
    * Now supports disabled state (SUI-648).
* `Multiselect`:
    * `Item`s now support icons (SUI-835).
* `Slider`:
    * Custom min, max, and current values (SUI-754).
    * Disabled state (SUI-898).
* `Table`:
    * New head cell component, `Table.HeadDropdownCell`, that supports opening a dropdown menu of options (SUI-803).
    * Added hover, focus, and other styles for clickable table cells. (SUI-912).
    * Option to increase padding on the first and last columns (SUI-738).
* `Tabs`:
    * Completely redesigned to the new UX standard (SUI-794).
    * Now supports two layouts: `horizontal` (default) and `vertical` (SUI-815).
* `TransitionOpen` now supports `animation` `none` (SUI-821).

API Changes:
* `Scroll` prop `component` renamed to `tagName`.

Bug Fixes:
* `Concertina`:
    * Tabbing improved (SUI-908).
    * Scrolling on IE and Edge fixed (SUI-929).
* `ComboBox` popover menu closes on click when uncontrolled (SUI-930, SUI-963).
* `Date`:
    * Now opens and closes correctly under all situations (SUI-807, SUI-819, SUI-820, SUI-928).
* `Progress` now validates that the percentage is between 0 and 100 (SUI-964).
* `Select` now focuses on the selected item when opened (SUI-812).
* `Slider` handle retains focus when clicked (SUI-912).
* `Switch` now has the same cursor style for the label and the button.
* `Table`:
    * Tabbing the docked header now scrolls the table correctly (SUI-716).
    * Drop indicator improved when reordering table columns (SUI-736).
    * Duplicate id when head is docked (SUI-918).
    * Head cells no longer destroyed when docking (SUI-924).
    * Empty body no longer removes bottom border (SUI-942).


0.10.3 - June 26, 2017
----------

Bug Fix:
* Restores Scroll and Concertina functionality.


0.10.2 - June 12, 2017
----------

Bug Fix:
* Corrects placement calculation of docked `Table` header when a `dockOffset` is used.


0.10.1 - June 8, 2017
----------

Bug Fix:
* Fixes `Select` when `hidden` prop set on `Select.Option`.


0.10.0 - May 25, 2017
---------

In the release, we did a major refactor of our package names:
* All packages were moved into the `@splunk` scope. This will enable us to use more descriptive package names without worrying about conflicts in the npm ecosystem.
* The `splunk-ui` package was broken into three packages:
    * `@splunk/react-ui` - The core components.
    * `@splunk/react-icons` - The core icons.
    * `@splunk/splunkweb-utils` - Utilities for interacting with the Splunk runtime.

To upgrade:
* Uninstall `splunk-ui`.
* Install the new packages:
    * Install `@splunk/react-ui`.
    * If you are using any icons components, install `@splunk/react-icons`.
    * If you are using the `i18n` util, install `@splunk/splunkweb-utils`.
* Update imports:
    * Find and replace `splunk-ui/components/` with `@splunk/react-ui/`.
    * Find and replace `splunk-ui/icons/` with `@splunk/react-icons/`.
    * Find and replace `splunk-ui/util/i18n` with `@splunk/splunkweb-utils/i18n`.

New Features:
* `Markdown` now supports a link renderer. This enables internal routing for single page apps.

API Changes:
* `ControlGroup.Help` was removed because it was not necessary.
* Package renamed and broken into three. See summary and upgrade steps above.

Bug Fixes:
* `TabLayout` now tabs correctly between tabs on IE.
* `Slider` no longer triggers redundant `onChange` events.
* The tab order when changing a selection in a `RadioBar` within a dialog has been fixed.
* In `Date`, the `onKeyDown` and `onFocus` props are now called correctly.
* When a blur event occurs on `Date`, the popover now closes.
* `ControlGroup` in `Modal` now handles long labels correctly.
* Large `File` now fits within a `Modal` correctly.
* Removed extra spacing around `Concertina` headings in IE.
* Added aria attributes to TabBar and TabLayout for accessibility.


0.9.3 - May 2, 2017
----------

Bug Fix:
* Fixes `data-component` attributes for splunk-ui-docs.


0.9.2 - April 28, 2017
----------

Bug Fixes:
* Adds css reset to drag style on `Table.HeaderCell`.
* `Menu` now handles invalid elements correctly.


0.9.1 - April 27, 2017
----------

Bug Fix:
* `Select` with filter restores keyboard interaction for selecting options.


0.9.0 - April 20, 2017
----------

API Changes:
* `Date` no longer attempts to automatically set the locale. Use the new `locale` prop.
* `ControlGroup` `Help` subcomponent was removed.
* `FormRows` no longer requires the `sortable` prop on the container or the `Row`. The presence of the `onRequestMove` callback will enable sorting.
* `Grid` was renamed to `ColumnLayout` and:
    * `gutter` now uses pixels rather than rems.
    * The default `gutter` is now 30.
    * `Column` `span` props must add up to 12.
    * `Column` can now be styled when using gutters.
* `Menu` `useSyntheticScroll` prop was renamed to `stopScrollPropagation`.
* `RadioBar` no longer supports `'primary'` `appearance`.
* `StepBar.Step` no longer supports the `label` prop. Use `children` instead.
* `Table`
    * `maxHeight` and `style` props are no longer supported. Use new `tableStyle`, `innerStyle`, and/or `outerStyle` props instead.
    * `HeaderCell` text now truncates instead of wrapping by default. Set the new `truncate` prop to `false` to enable wrapping.
    * `HeaderCell` text cannot be center or right aligned using inline styles. Use the `align` prop instead.
* `WaitSpinner` no longer supports the `color` prop.
* Icons:
    * Renamed `Export` to `Download`.
    * Renamed `X` to `Clear`.
    * Renamed `AlertTriangle` to `Warning`.
    * Renamed `CheckCircle` to `Success`.
    * Removed `MinusCircle`, `AlertCircle`, `QuestionCircle`, `PlusCircle`, and `XCircle`.

New Features:
* `Table`:
    * Resizable columns,
    * Reorderable columns,
    * `onScroll` prop,
    * `HeaderCell` now supports an `align` and `truncate` props for text.
    * `Cell` now supports an `align` for text.
* `Menu`, `ComboBox`, `Multiselect`, and `Select` have a new `Heading` subcomponent for grouping items and options.
* `Scroll` component added. It can be used to stop scroll propagation and animate scrolling.
* `Select` `appearance` prop now support `'link'`.
* `Paginator` now has an `alwaysShowLastPageLink` prop.
* `Color` supports `error` and `disabled` props.
* `FormRows` now supports a `header` prop.

Style Changes:
* `File` now has a larger drop target.
* `StepBar` has a simplified appearance.
* Normalized margins between content elements including `Paragraphs`, `Heading`, and `List`. It may be necessary to update margin from these components to maintain current layout.
* New design for `Refresh` icon.
* Updated `Heading` styles.
* In `ControlGroup`, increased spacing between help and controls.

Bug Fixes:
* The `autoCloseWhenOffScreen` prop in `Popover` now closes when the anchor is not visible in it's scroll container, not just the window.
* `Paginator` correctly handles the case where `numPageLinks` is greater than `totalPages`.
* All components now correctly handle children with non-rendered values such as `false` and `null`.
* `Table`:
    * Inconsistencies across browsers in `Table` head cell text alignment has been resolved.
    * All callbacks are now cleared before unmount.
* `FormRows` can be reordered in a `Modal` and `Popover`.
* Icons no longer take focus when tabbing in IE.


0.8.1 - March 17, 2017
----------

Bug Fixes:
* Scrolling Menus work with trackpads.
* Fixed issue in `TransitionOpen` related to `takeFocus`.


0.8.0 - March 15, 2017
----------

New Features:
* New components:
    * `FormRows`
    * `SidePanel`
    * `Grid`
    * `Clickable`
* Compact mode in `Multiselect`.
* Disabled prop in `RadioList`.
* Added `Refresh` icon.
* `TransitionOpen` supports `takeFocus` and `retainFocus` props.

Bug Fixes:
* Fixed accessibility issues with `StepBar` and `JSONTree`.
* The `truncate` prop in `Menu.Item` now works with descriptions.
* `Slider` now works correctly in IE11.
* `Concertina` and `Accordion` no longer throws an error on non-rendered children.
* Disabled options in `Select`, `Multiselect`, and `ComboBox` are no longer selectable via the keyboard.
* Falsey option values in `Select`, `Multiselect`, and `ComboBox` can now be selected via the keyboard.


0.7.3 - March 17, 2017
----------

Bug Fixes:
* Scrolling Menus work with trackpads.


0.7.2 - March 9, 2017
----------

* Adds test hooks to `Table` components.


0.7.1 - March 1, 2017
----------

New Features:
* `Multiselect` accepts a `menuStyle` prop, like `ComboBox`.
* `Multiselect` has a `max-height`, after which it scrolls. This can be overridden with inline styles.

Bug Fixes:
* `Multiselect` now calls `onFilterChange` when the user selects a value, which clears the filter.
* `Multiselect`'s menu is now always the same width as the input, unless it is smaller than 200px.
* `Multiselect` clears the use input on click away.
* `Slider` now conforms to controlled and uncontrolled patterns.
* `Slider` rounds floating point errors to conform to step value.
* `Number` preserves it's display string when value is uncontrolled and it receives new props.
* Animation names are no longer minimized, which caused naming conflicts.


0.7.0 - February 17, 2017
----------
API Changes:
* `Number` no longer supports `append` and `prepend` at the same time.
* `Multiselect` now returns the event, item index and item name when the user requests to removed an
  item.
* `File`'s callback handlers have been renamed and revised:
    * `onAddFiles` changed to `onRequestAdd`.
    * `onRemoveFile` changed to `onRequestRemove`.
    * `onRequestRemove` is passed an object with three properties: `event`, `name`, and `index`.

Style Changes:
* `Number`'s appearance has changed.
* `Multiselect` was not correctly expanding when the inline prop was set to false. This may affect
  layout in some scenarios.
* `Modal.Header` has changes that may affect layout when children are added instead of
  or in addition to the `title` prop.
* `Slider` no longer has left margin.

Bug Fixes:
* `Button`s have a `type=button` so they no longer act as submit buttons by default.
* At least one code example had missing text.


0.6.4 - March 17, 2017
----------

Bug Fixes:
* Scrolling Menus work with trackpads.


0.6.3 - February 14, 2017
----------

Bug Fixes:
* `Multiselect` styles are now consistent with `Text`.
* New values in `Multiselect` are now added on click.
* `TransitionOpen` makes overflowing content visible once the opening animation completes.


0.6.2 - February 3, 2017
----------

New Features:
* `JSONTree` for displaying and exploring JSON data.

Bug Fixes:
* A `Dropdown` inside a `Dropdown` now closes as specified on content clicks.
* `SlidingPanels` handles content that changes size.
* Fixed the error state for `File` where the border was partially obscured.


0.6.1 - February 1, 2017
----------

Bug Fixes:
* Fixed a few `ComboBox` user experience issues related to when the popover opens and closes.
* Fixed an issue where `Popover` could briefly appear in the wrong location when animation was
  set to false.
* Updated `Tooltip` styles to match standards.


0.6.0 - January 23, 2017
-----------

API Changes:
* Icons underwent a large refactor, including:
    * Icons have been separated into their own files and moved to their own directory.
        * Before: `import { Code } from 'splunk-ui/components/Icon'`
        * Now: `import Code from 'splunk-ui/icons/Code';`
        * This improves consumers bundle size. They only get the icon files they use.
    * The `square` prop was removed, and `height` and `width` props added.
    * The `size` prop now supports a string for setting a value with unit.
    * The `ornamental` prop was removed from Icon. `screenReaderText` can be set to `null` or
      empty string instead.
* `Collapsible` was replaced with `TransitionOpen`, which supports a variety of animation types.
* The API for `Modal` and `Modal.Header` were updated to conform to our standard API used elsewhere.
    * The `onClose` callback was replaced with `onRequestClose`, which is now passed a reason and an
    event.
    * The `enableClickAway` and `enableEscClose` props were removed. Use the reason provided by the
    `onRequestClose` callback instead.
* In the `Date` component, the `defaultDate` prop has been replaced with `defaultValue` to be more
consistent with the API of other components. See also, the new controlled mode below.
* In the `Text` component, the `rows` prop has been renamed to `rowsMin`.
* The `Calendar` component has been removed.

New Features:
* New components:
    * `Code` for displaying code snippets with syntax highlighting.
    * `Markdown` parses and renders markdown.
        * Renders to Splunk-UI components when appropriate.
        * No injection of html.
        * Useful in conjunction with i18n to translate text with links and such.
* Many components now support a `size` prop.
    * `Button`, `Color`, `ComboBox`, `ControlGroup`, `Date`, `File`, `MultiSelect`, `Number`,
    `RadioBar`, `Select`, `StaticContent`, `Switch`, `Text`
* UI for server-side fetching with `Select`, `MultiSelect`, and `ComboBox`.
* Support for `autofocus` in the `Text` component.
* The `Date` component now supports a controlled mode and the `value` prop.
* `File` now supports an error state.

Bug Fixes:
* Tabbing within the `Color` palette now works as expected.
* Improved scrolling behavior in `Menu`, `Select`, `MultiSelect`, and `ComboBox`.
    * Scroll no longer propagates to parent.
    * Highlighted item is now kept in view when navigating with arrow keys.
* `File` now works correctly in Firefox.
* `Modal` is now passes arbitrary props to it's container.
* `Popover` now supports `open` being true on the initial render.
* Corrected styles for `Text` when it is both in error and in focus.
* `Button` now supports setting the label with a string as a child.
* Transitions no longer throw errors when the component is unmounted during the transition. We have
migrated our animations to React Motion.
* The theme loader now verifies the existence of `/services/server/info` in
`window._splunkd_partials_` before accessing it, preventing it from throwing an error.


0.5.2 - December 14, 2016
-----------

Bug Fix:
* Fixed bug on Safari where key presses were not handled correctly.
* Arbitrary props now correctly passed to Modal.


0.5.1 - December 9, 2016
-----------

Bug Fix:
* Fixed bug on Safari where the page scrolled on the in initial open of a `Dropdown` or `Select`.


0.5.0 - December 6, 2016
-----------

API Changes:
* `onChange` prop is no longer required when `value` prop is set in `Text`.

New Features:
* New components:
    * `Color` for entering a hex color.
    * `File` for uploading and displaying one or more files.
    * `Progress` for showing the progress of an action.
    * `SlidingPanels` for animating the transition between multiple interfaces.
    * `Slider` for entering a number in a defined range.
* `Select`, `Dropdown`, and `Menu`
    * Added support for arrow key navigation.
    * Can use enter key to select an item when filtering in `Select`.
    * Improved accessibility attributes.
* `Table` now supports `tableStyle` prop.

Bug Fixes:
* `Text` no longer throws error when it is under multiline mode and switching from enable to disable.
* Fixed error and disabled states for `Multiselect`.

Other:
* Examples updated to use the class properties syntax.


0.4.1 - November 22, 2016
-----------

Bug Fixes:
* `Select` no longer vibrates when using max and min width.


0.4.0 - November 22, 2016
-----------

API Changes:
* When using the `isMenu` prop on a `Button`, the label is now aligned to the left and the caret to the right.
* `Popover`:
    * The placement algorithm got a major refactor to make it more performant and flexible.
    * `placement` prop renamed to `defaultPlacement` to better reflect that it might not be the final placement.
    * In addition to `above`, `below`, `left`, and `right`, `defaultPlacement` now supports `vertical` and `horizontal` modes.
    * The `canCoverAnchor` prop was added, allowing the `Popover` to cover the anchor if there is not enough space in a direction to accommodate it.
    * `repositionMode` replaced `canAutoPosition` and provides three options: `none`, `flip`, or `any`. `canAutoPosition` is no longer available.
    * `anchor` replaced `anchorEl`. This no longer needs to be a DOM element. Any React or DOM element will work.
    * The scale animation was removed. Dropdown and Select fade in.
* `Dropdown` changed in similar ways to `Popover`:
    * `placement` is now `defaultPlacement`.
    * `canCoverAnchor` was added.
    * `repositionMode` replaced `canAutoPosition`.
* `Tooltip`s `placement` prop was renamed to `defaultPlacement`.
* `DatePicker` renamed to `Date`.
* `Paginator` now renders nothing if there is only one page.
* Reduced spacing between `ControlGroup`s.

New Features:
* New Components:
    * `ComboBox`
    * `TabLayout`
    * `StepBar`
* `Select`:
    * Supports error states.
    * Menu size now relative to toggle size.

Bug Fixes:
* `Concertina`:
    * Rendering issues on Safari.
    * Correctly accommodates children that change size.
* `Collapsible` handles the removal of its node with out throwing.


0.3.2 - November 16, 2016
-----------

Bug Fixes:
* `Paginator` no longer adds Ellipses or a link to the first page when all page links can be shown.


0.3.1 - November 10, 2016
-----------

Bug Fixes:
* Corrects error in `Calendar` example in docs.


0.3.0 - November 9, 2016
-----------

API Changes:
* `Select.Option` now accepts any type for the `value` prop.
* `Accordion` prop `onRequestOpen` changed to `onChange` and now has the format `(event, data)`.
* `Text` prop `elementId` changed to `inputId`.

New Features:
* New components:
    * `Concertina`
    * `DatePicker`
    * `Multiselect`
    * `Number` (input control)
    * `TabBar`
* `Switch`:
    * New `toggle` appearance.
    * Now supports `disabled` prop.
* Focus methods added to `Select` and `Dropdown`.
* Better font handling. See the Fonts section of the [Overview](/Packages/react-ui/Overview) page.
* Better handling of aria attributes.

Bug Fixes:
* `ControlGroup`s in error correctly display red labels.


0.2.1 - October 28, 2016
-----------

Bug Fixes:
* Focus style on `Table` `HeadCell` no longer shows content underneath it.
* Corrects position of `Popover` when browser is zoomed and position numbers are rounded.


0.2.0 - October 27, 2016
-----------

Overview:
This release contains a major refactor of how state is managed by our components. Many components now support both the controlled and uncontrolled patterns. In general, to use the controlled pattern, set the `propName` and to use the uncontrolled pattern set the `defaultPropName`. See [React Forms Documentation](https://facebook.github.io/react/docs/forms.html) for more details on these patterns and the detailed notes below for impacts on Splunk UI. We also standardized the api for components that open and close with `onRequestOpen` and `onRequestClose` callbacks.

API Changes:
* `Dropdown` now supports both the controlled and uncontrolled patterns for open. To use the controlled pattern, use the `open` prop and to use the uncontrolled use `defaultOpen`.
* `Accordion`:
    * Now only supports a single panel. Use `CollapsiblePanel` when `Accordion` does not provide the necessary functionality.
    * `Accordion.Section` was renamed to `Accordion.Panel`.
    * `active` prop was replaced with the `openPanelId` prop.
    * Now supports both the controlled and uncontrolled patterns for the `openPanelId` prop.
* `RadioBar`:
    * Renamed `Radio` to `RadioBar`.
    * Renamed `Radio.Button` to `RadioBar.Option`.
    * Now supports both the controlled and uncontrolled patterns for the `value` prop.
* `RadioList`:
    * Renamed `RadioList.Item` to `RadioList.Option`.
    * Now supports both the controlled and uncontrolled patterns for the `value` prop.
* `Select`:
    * Renamed `Select.Item` to `Select.Option`.
    * Now supports both the controlled and uncontrolled patterns for the `value` prop.
* `Text` now supports both the controlled and uncontrolled patterns for the `value` prop.
* `Tooltip` now provides the `onRequestOpen` and `onRequestClose` props for use in controlling the `open` prop. The uncontrolled pattern is still supported, but there is no `defaultOpen` prop.

New Features:
* Sortable column headers in `Table`.
* Expandable rows in `Table`.
* New `StaticContent` component for showing well formatted static content in a `ControlGroup`.
* `Button` and `Link` now have a `focus` method.
* Splunk configuration data is now available through the `splunk-ui/util/splunkConfig` module.
* New `CollapsiblePanel` component. This was a subcomponent of `Accordion`, but was moved to its own component to provide greater flexibility.

Bug Fixes:
* Removed hover styles from `Accordion` Head.
* `Dropdown`s no longer scroll the page and close on Safari.
* The clear button now works for `Text`s with the `search` appearance.
* `Popover` now positions correctly when the trigger is partly off the bottom of the screen.
* Fixes the error in RadioList in production mode where `propTypes` was undefined.
* `Table`'s docking head now works on IE11.
* `Modal.Body` now scrolls correctly on IE11.
* `Tooltip` array now fades correctly on IE11.


0.1.3 - October 19, 2016
-----------

Bug Fixes:
* Popover now correctly centers vertically when positioned right or left.


0.1.2 - October 13, 2016
-----------

Bug Fixes:
* ControlGroup now handles arbitrary children correctly.


0.1.1 - October 13, 2016
-----------

Bug Fixes:
* Removes eval source map from production.


0.1.0 - October 12, 2016
-----------

API Changes:
* **React and associated packages are now peerDependencies and must be added per project.** Add the following dependencies to your project's package.json:
    * react ^15.3.1
    * react-addons-css-transition-group ^15.3.1
    * react-addons-transition-group ^15.3.1
* **`className` has been removed from props in all components.** Prefer inline styles or wrappers for adjusting layout. See the [Overview](/Packages/react-ui/Overview)  page in docs for details.
* Changed Text prop autocomplete renamed to autoComplete.
* Changed the Control Group's default layout from 'fillJoin' to 'fill'.
* Control Group's 'none' layout no longer makes children inline. If required, add this prop
manually to each child.

New Features:
* New DefinitionList component.
* Support for Splunk Light styles when `__splunkd_partials__` are loaded.
* Instructions and best practices added to docs about styling and coding practices.
* Version number added to docs.
* Select includes a configurable placeholder.
* Internationalization utility that works with Splunk's internationalization tooling.

Bug Fixes:
* Restored clear button on Text component.
* Prevent Select menus from growing taller than the viewport.
* Select and Dropdown components no longer take focus when scrolled off screen.
* Other miscellaneous small fixes and improvements.


0.0.7 - October 3, 2016
------------

API Changes:
* Icons changed to SVG. Each icon is a separate component instead of a property of Icon.
* Button, Menu.Item and Select.Item now require a node for the icon property, such as and
instantiated Icon or svg, instead of an icon string.
* Logos are moved to a new component.
* Message has a "type" property instead of an "iconType" property.

New Features:
* Buttons support hrefs via the "to" property.
* Links can be disabled.
* Popovers, Select, Dropdown and Modal implement circular tabbing for keyboard access.
* Select and Dropdown will return focus to the toggle when closed.
* Menu items can include links.
* New Change Log that also appears in the documentation.

Bug Fixes:
* The filter in Select does not create warnings.
* Select does not reposition when filtering.


0.0.6 - September 28, 2016
------------

API Changes:
* Buttons "menu" property renamed to "isMenu".
* ControlRadio component renamed to Radio.
* ControlRadioList component renamed to RadioList.
* ControlSelect component renamed to Select.
* ControlText component renamed to Text.

New Features:
* New Table component supporting docking and fixed headers.
* New List component for ordered and unordered lists.
* New Paragraph component.
* Text component supports multi-line.
* Select component can optionally include a filter field.
* Control Group and Text support an error state.

Bug Fixes:
* ControlSelect did not trigger onChange.


0.0.5- September 19, 2016
------------
