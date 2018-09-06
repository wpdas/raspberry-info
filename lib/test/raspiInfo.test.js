const raspiInfo = require('../index.js');

describe('raspiInfo', () => {
  it('should return current time and host', async done => {
    let output = await raspiInfo.getCurrentTimeAndHost();
    expect(output).toBeDefined();
    done();
  });

  it('should return current GPU temperature', async done => {
    let output = await raspiInfo.getGPUTemperature();
    console.log(output);
    expect(output).toBeDefined();
    done();
  });

  it('should return current CPU temperature', async done => {
    let output = await raspiInfo.getCPUTemperature();
    console.log(output);
    expect(output).toBeDefined();
    done();
  });
});
