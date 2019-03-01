# @splunk/charting

This module provides a high-level API for rendering charts and gauges based a configuration similar to dashboards/reports and a data payload received from Splunk job results.

## Installation

`yarn add @splunk/charting`

or

`npm install @splunk/charting --save`

## Usage

### Package-level API

#### extractChartReadyData(rawData: Object): DataSet

- The `rawData` argument is a data payload of the form returned by the "json_cols" output mode of the [Splunk job results REST API](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Fresults).
- The return value is intended to be an opaque object, which will be used in a later stage of the chart API lifecycle.

#### createChart(container: Element, initialProps: [Properties](#properties-api)): [Chart](#chart-api)

- The `container` argument is a DOM element where the chart should be rendered to.
- The `initialProps` argument is an initial set of [Properties](Properties), which must specify at least the chart type, orientation (for gauges only), and split-series mode setting if enabled.
- The return value is a [Chart](#chart-api) instance.

#### setColorPalette(colors: Array<String>)

Sets the color palette for all charts.  The default palette is ['#1e93c6', '#f2b827', '#d6563c', '#6a5c9e', '#31a35f'].

- The `colors` argument is a list of color strings.  Can be in CSS format or rgb format.  Color names like "red" and "blue" are not valid.

#### useSplunkMoment(splunkMoment: @splunk/moment [, locale: String])

Sets the time localization library.  By default, charts use the browser locale.

- The `splunkMoment` argument is a reference to the `@splunk/moment` library, whose **timezone and locale** will be inherited by all charts for the purposes of time formatting.
- The optional `locale` argument can be any locale name supported by `@splunk/moment`, and will override the default locale that is currently being used by `@splunk/moment`.

#### setTimezone(timezoneDefinition: String)

Sets the timezone for all charts.  By default, charts use browser-local time.

- The `timezoneDefinition` argument is a time zone definition in Splunk's serialization format (typically this value is read from `window.$C.SERVER_ZONEINFO`)

IMPORTANT: Calling `setTimezone` will overwrite the timezone defined by a previous call to `useSplunkMoment`, and vice versa.  The `setTimezone` function is ONLY recommended for use cases where the `@splunk/moment` library cannot be used for some reason.

#### setTheme(themeKey: String)

Sets the theme for all charts. By default it will use the **default** / light theme.
Currently available themes:

- **default** : Default (light) Splunk charting theme
- **dark** : Dark mode for Splunk charting

Setting a non-existent theme will fall back to the default theme.

### Chart API

#### prepareAndDraw(properties: [Properties](#properties-api), dataset: DataSet, callback: Function): Promise

- The `properties` argument is the full set of configuration properties for the chart, which will be merged with the `initialProps` passed to `createChart`.
- The `dataSet` argument is the return value from a previous call to `extractChartReadyData`.
- The `callback` argument is optional and will be called once the chart has been rendered.  This may or may not happen asynchronously.
- The return value is a Promise which will be resolved once the chart has been rendered, providing an alternative to the `callback` argument.  This may or may not happen asynchronously.

The `prepareAndDraw` method can be called multiple times on the same chart instance with different values for `properties` and/or `dataSet`.  Internally, the chart instance will diff the new properties with the existing ones to determine if a whole new chart needs to be drawn or if the existing chart can be updated in-place.

Exception to the above:  If changing the chart type, orientation (for gauges only), or split-series mode setting, then the chart must be destroyed and a new one created with `createChart`.

#### resize()

Force the chart to resize itself to fit its container dimensions.

Calling `resize` should only be necessary if the container dimensions change after calling `prepareAndDraw`, since the initial draw will fit the chart to the container.

#### destroy()

Remove the chart from the DOM and tear down all event listeners and internal references.  The chart instance cannot be re-used.

#### on(eventType: String, listener: Function)

Add a listener for chart events of the type specified by `eventType`.  See [Chart Events](#chart-events) below for a list of possible event types.

#### off(eventType: String, listener: Function)

Remove a listener bound by `on` above.

### Properties API

The properties argument to `createChart` and `prepareAndDraw` is a plain Javascript object, supporting (almost) all of the same configuration options as a chart component in a dashboard panel.

The full set of chart configuration settings in dashboards [are document here](http://docs.splunk.com/Documentation/Splunk/latest/Viz/ChartConfigurationReference).  When using these option with the `@splunk/charting` module, the leading "charting." in the option name is omitted.  For example, to create an area chart with a logarithmic y-axis, the properties object would be:

```
{
    chart: 'area',
    'axisY.scale': 'log
}
```

Exceptions to the above: the following properties are dashboard-only and cannot be used with the `@splunk/charting` module:

- `charting.data.count`
- `charting.chart.resultTruncationLimit`
- `height`

### Chart Events

#### The `pointClick` event

Fired whenever the user clicks on a data point within the chart.  The listener will be given an event object with the following fields:

- **name**: The name of the x-axis field for the clicked point.
- **value**: The x-axis value for the clicked point.
- **name2**: The name of the y-axis field for the clicked point.
- **value2**: The y-axis value for the clicked point.
- **_span**: (for a binned time-based x-axis only) The number of seconds between the clicked point and the next point in the series.
- **rowContext**: An object containing key-value pairs for all fields at the corresponding x-axis value.  The x-axis field and value will be included in the object

NOTE that the chart properties must set drilldown="all" for this event to be fired.

#### The `legendClick` event

Fired whenever the user clicks on a legend item.  The listener will be given an event object with the following fields:

- **name2**: The name of the clicked series.

NOTE that the chart properties must set drilldown="all" for this event to be fired.

#### The `chartRangeSelect` event

Fired whenever the x-axis range is changed, this could be due to a user zoom gesture or a data update.  The listener will be given an event object with the following fields:

- **startXIndex**: The index of the x-axis value that represents the start of the selected range.
- **startXValue**: The x-axis value at the start of the selected range.
- **endXIndex**: The index of the x-axis value that represents the end of the selected range.
- **endXValue**: The x-axis value at the end of the selected range.
- **isReset**: A boolean to indicate whether the event represents a "reset" from a zoomed state to the full range.

## Usage Example

Draws an area chart with a logarithmic y-axis and click events enabled.

```
import splunkCharting from '@splunk/charting';

const container = document.getElementById('container');

const data = {
    fields: ['x', 'y1', 'y2'],
    columns: [
        ['a', 'b', 'c'],
        [1, 60, 3],
        [30, 2, 90]
    ]
};
const properties = {
    chart: 'area',
    'axisY.scale': 'log',
    drilldown: 'all'
};

const dataSet = extractChartReadyData(data);
const chart = createChart(container, properties);
chart.prepareAndDraw(
    dataSet,
    properties,
    () => console.log('Chart drawn successfully.')
);

chart.on('pointClick', e => {
    console.log(`Chart click at ${e.name2}=${e.value2}`);
});
```