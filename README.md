# raspberry-info [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A module that turns possible to know information about some resource from Raspberry sources (Linux only).

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
raspiInfo.getGPUTemperature().then(output => console.log(output));
// 39.7'C

// Get CPU temperature
raspiInfo.getCPUTemperature().then(output => console.log(output));
// 40.2'C
```

## License

MIT © [Wenderson Pires]()

[npm-image]: https://badge.fury.io/js/raspberry-info.svg
[npm-url]: https://npmjs.org/package/raspberry-info
[travis-image]: https://travis-ci.org/Wpdas/raspberry-info.svg?branch=master
[travis-url]: https://travis-ci.org/Wpdas/raspberry-info
[daviddm-image]: https://david-dm.org/Wpdas/raspberry-info.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Wpdas/raspberry-info
