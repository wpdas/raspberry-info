# raspberry-info [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A module that turns possible getting information from Raspberry. Information such as GPU temperature and CPU temperature, serial number, IP and etc. (Linux only)

## Installation

```sh
$ npm install --save raspberry-info
```

## Usage

```js
const raspiInfo = require('raspberry-info');

// Get current time and Host
raspiInfo.getCurrentTimeAndHost().then(output => console.log(output));
// qui set  6 16:50:57 -03 2018 @ host

// Get GPU temperature
// @param useSignal Default true
raspiInfo.getGPUTemperature().then(output => console.log(output));
// 39.7°C

// Get CPU temperature
// @param useSignal Default true
raspiInfo.getCPUTemperature().then(output => console.log(output));
// 40.2°C

// Get Serial Number
raspiInfo.getSerialNumber().then(output => console.log(output));
// 00000000xxXxXXXX

// Get IP
raspiInfo.getIP().then(output => console.log(output));
// 00.000.000.00

// Get memory total
// @param useSignal Default true
raspiInfo.getMemoryTotal().then(output => console.log(output));
// 764720 kB

// Get memory free
// @param useSignal Default true
raspiInfo.getMemoryFree().then(output => console.log(output));
// 315036 kB

// Get memory available
// @param useSignal Default true
raspiInfo.getMemoryAvailable().then(output => console.log(output));
// 200012 kB

// Get memory usage
// @param useSignal Default true
raspiInfo.getMemoryUsage().then(output => console.log(output));
// 56%
```

## License

MIT © [Wenderson Pires]()

[npm-image]: https://badge.fury.io/js/raspberry-info.svg
[npm-url]: https://npmjs.org/package/raspberry-info
[travis-image]: https://travis-ci.org/Wpdas/raspberry-info.svg?branch=master
[travis-url]: https://travis-ci.org/Wpdas/raspberry-info
[daviddm-image]: https://david-dm.org/Wpdas/raspberry-info.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Wpdas/raspberry-info
