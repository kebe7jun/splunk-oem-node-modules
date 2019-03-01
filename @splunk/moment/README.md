# Moment Utils

A package of [Moment](http://momentjs.com/) and [Moment Timezone](http://momentjs.com/timezone)
with plugins for Splunk timezones, and formatting for locales with second and millisecond precision.


Install
-------
```
npm install @splunk/moment
```
Or
```
yarn add @splunk/moment
```

Basic Usage
-------
Import moment from the Splunk UI package. This provides a Moment class with the timezone and
timezone util plugins.
```
import moment from '@splunk/moment';
```

Create new moment instances in the server timezone and locale.
```
const time1 = moment.newSplunkTime({time: 1490500800});
const time2 = moment.newSplunkTime({time: '10/10/2017', format: 'l'});
```


Manipulate and query times using the [Moment](http://momentjs.com/docs/) API.
```
time1.subtract(1, 'day').startOf('day';);
const isBefore = time1.isBefore(time2);
```


Format Times using second or millisecond precision
```
const displayValue = time1.splunkFormat('lls');
```

Advanced Usage
-------
If used in an environment without the window.$C properties set by splunkweb, there are
functions to setup and use the plugins with Splunk's raw timezone data.

The timezone data can be retrieved from `services/search/timeparser/tz`. *To access this
service from the client, it must be added to the whitelist in web.conf.*
```
http://localhost:8000/en-US/splunkd/__raw/services/search/timeparser/tz
```

Set this data as the default Splunk timezone, which can be used for creating and manipulating times.
```
const splunkTimezoneName = moment.setDefaultSplunkTimezone(zoneData);

const time = moment.newSplunkTime({time: 1490500800}); // uses the default timezone
const nowInTokyo = moment.tz('Asia/Tokyo').locale('ja_JP');
const nowAtServer = nowInTokyo.clone().tz(splunkTimezoneName).locale('en_US');
```
