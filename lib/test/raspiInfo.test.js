const process = require('process');
const raspiInfo = require('../index.js');

describe('raspiInfo', () => {
  const isItLinux = process.platform === 'linux';
  it('should return current time and host', async done => {
    let output = await raspiInfo.getCurrentTimeAndHost();
    expect(output).toBeDefined();
    done();
  });

  it('should return current GPU temperature', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getGPUTemperature();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });

  it('should return current CPU temperature', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getCPUTemperature();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });

  it('should return the Serial Number', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getSerialNumber();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });

  it('should return IP', async done => {
    let output = await raspiInfo.getIP();
    expect(output).toBeDefined();
    done();
  });

  it('should return the memory total', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getMemoryTotal();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });

  it('should return the memory free', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getMemoryFree();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });

  it('should return the memory available', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getMemoryAvailable();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });

  it('should return the memory usage', async done => {
    if (isItLinux) {
      let output = await raspiInfo.getMemoryUsage();
      expect(output).toBeDefined();
      done();
    } else {
      console.warn('Must be run on Linux OS.');
      done();
    }
  });
});
