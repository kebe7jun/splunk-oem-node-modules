# @splunk/highcharts-annotations

This module is a Highcharts plugin that adds time-based annotation rendering functionality, with the same appearance and capabilities of the event annotations in Splunk's core charting library.

## Installation

`yarn add @splunk/highcharts-annotations`

or

`npm install @splunk/highcharts-annotations --save`

NOTE: The `@splunk/highcharts-annotations` module will not work correctly unless the `@splunk/highcharts-time-axis` module is also installed and used.

## Usage

### Basic Usage

```
import Highcharts from '@splunk/highcharts';
import timeAxisPlugin from '@splunk/highcharts-time-axis';
import annotationsPlugin from '@splunk/highcharts-annotations';

// This is required or the annotations plugin WILL NOT work correctly.
timeAxisPlugin(Highcharts);
annotationsPlugin(Highcharts);

// Any valid Highcharts configuration can be used here.
// The plugin will read the `annotations` property of the axis.
Highcharts.chart('container', {
    xAxis: {
        type: 'datetime',
        annotations: [
            {
                value: Date.UTC(2010, 0, 2),
                label: 'Annotation #1',
                category: 'Category #1',
                color: '#f00'
            },
            {
                value: Date.UTC(2010, 0, 2, 18),
                label: 'Annotation #2',
                category: 'Category #2',
                color: '#0f0'
            },
            {
                value: Date.UTC(2010, 0, 5, 2, 30),
                label: 'Annotation #3',
                category: 'Category #1',
                color: '#00f'
            }
        ]
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 24 * 3600 * 1000 // one day
    }]
});
```

### Supported Annotation Properties

- **value:** (required) The time value of the annotation, specified in epoch milliseconds.
- **label:** (optional) A string label describing the annotation.  If given, will be displayed in the tooltip.
- **category:** (optional) A string category indicating the type of the annotation.  If given, will be displayed in the tooltip.
- **color:** (optional) The color to use when rendering the annotation. Can by any valid CSS color.  Defaults to black.