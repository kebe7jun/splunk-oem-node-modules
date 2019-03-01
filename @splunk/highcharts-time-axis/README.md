# @splunk/highcharts-time-axis

## Description

This module is a Highcharts plugin that enhances the built-in Highcharts time axis with the look and feel of the time axes in Splunk's core charting library.  It also provides compatibility with Splunk time zone definitions.

## Installation

`yarn add @splunk/highcharts-time-axis`

or

`npm install @splunk/highcharts-time-axis --save`

## Usage

### Basic Usage

```
import Highcharts from '@splunk/highcharts';
import timeAxisPlugin from '@splunk/highcharts-time-axis';

timeAxisPlugin(Highcharts);

// Any valid Highcharts configuration can be used here.
// The plugin logic will automatically apply to any axis with type="datetime".
Highcharts.chart('container', {
    xAxis: {
        type: 'datetime'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 24 * 3600 * 1000 // one day
    }]
});
```

### Basic Usage Caveats

For the most part, any default Highcharts configuration that the time axis plugin uses can be seamlessly overridden.  There are a few exceptions where the behavior might be unexpected:

- **Label Formatting:** The default label formatter provided by the plugin contains a significant amount of the logic that defines the look and feel of the axis labels (hiding the time of day when all labels are at midnight, only showing the year for the first label in that year, etc).  There is currently no way to override the default label formatter without opting out of all of that behavior.

- **Compact Mode:** When the plugin detects that the axis is "compact" (less than ~350px for horizontal axes and less than ~250px for vertical axes), any overrides to the `units` and `tickPixelInterval` configuration options will be ignored and the plugin will apply its own values to maximize the number of labels that will fit on the axis.

### Integration with @splunk/moment

By default, the time axis will use the current browser locale and timezone.  Custom localization can be achieved using the `@splunk/moment` library and the time axis `useSplunkMoment` method.  By injecting a reference to the `@splunk/moment` library, charts will inherit the **timezone and locale** from `@splunk/moment`.

The `useSplunkMoment` method takes an optional second argument, which can be any locale name supported by `@splunk/moment`.  This will override the default locale that is currently being used by `@splunk/moment`.

Note that the locale and timezone are shared by all charts.  There is currently no support for per-chart localization.

```
import Highcharts from '@splunk/highcharts';
import splunkMoment from '@splunk/moment';
import timeAxisPlugin from '@splunk/highcharts-time-axis';

const { useSplunkMoment } = timeAxisPlugin(Highcharts);
useSplunkMoment(splunkMoment);

// Usage of the Highcharts API is unchanged.
```

### Advanced Usage - Custom Timezone Definition

A custom time zone can be injected directly using the `setTimezone` method.  This method expects a time zone definition in Splunk's serialization format (typically this value is read from `window.$C.SERVER_ZONEINFO`).

Note that the custom timezone is shared by all charts.  There is currently no support for per-chart timezones.

```
import Highcharts from '@splunk/highcharts';
import timeAxisPlugin from '@splunk/highcharts-time-axis';

const { setTimezone } = timeAxisPlugin(Highcharts);
setTimezone(/* timezone defintion obtained from somewhere */);

// Usage of the Highcharts API is unchanged.
```

IMPORTANT: Calling `setTimezone` will overwrite the timezone defined by a previous call to `useSplunkMoment`, and vice versa.  The `setTimezone` method is ONLY recommended for use cases where the `@splunk/moment` library cannot be used for some reason.