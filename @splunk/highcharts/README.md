# @splunk/highcharts

## Description

This module provides access to a "Splunk-ified" version of the [Highcharts library](https://www.highcharts.com/).  The purpose of this module is to provide full access to the [Highcharts API](api.highcharts.com) while still also providing a way to share common Highcharts-related configuration and functionality across Splunk.

There are two main motivations for this approach:

1. Consumers are pinned to a version of Highcharts that is known to work well with the Splunk-provided Highcharts plugins.
2. Provides a mechanism for default Highcharts configuration to be shared among multiple projects.  Note that this is not currently the case, the Highcharts version exported is unmodified.  But establishing this usage pattern allows for shared configuration to be added in the future.

Highcharts version included: 5.0.12

## Installation

`yarn add @splunk/highcharts`

or

`npm install @splunk/highcharts --save`

## Usage

### Standard Highcharts API

Import the module and use it for any Highcharts API calls:

```
import Highcharts from '@splunk/highcharts';

// Any valid Highcharts configuration can be used here...
Highcharts.chart('container', {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});
```

### Using the highcharts-more module

The "highcharts-more" module is not included by default, but can be imported and applied if needed:

```
import Highcharts from '@splunk/highcharts';
import highchartsMore from '@splunk/highcharts/highcharts-more';

highchartsMore(Highcharts);

// All configuration options from the highcharts-more module are now available
```

### Create an isolated highcharts instance

Keep in mind that @splunk/highcharts will returns a global highcharts instance by default. If you apply extra plugin or modify highcharts internal, it's going to impact other @splunk/highcharts consumers in the same page.


This issue can be workaround by creating a new highcharts instance via noConflict function.

```
import Highcharts from '@splunk/highcharts';

const isolatedHC =  Highcharts.noConflict();

export default isolatedHC;
```
