'use strict';

const bashCommands = require('./bash-commands.json');
const exec = require('child_process').exec;

function getOutputFromBash(attributes, middleware) {
  return new Promise((resolve, reject) => {
    let currentExec = exec(attributes, (err, stdout, stderr) => {
      currentExec.kill();
      if (err) return reject(stderr);
      if (middleware) stdout = middleware(stdout);
      resolve(stdout);
    });
  });
}

let raspiInfo = {
  getCurrentTimeAndHost: () => {
    return getOutputFromBash(bashCommands.getCurrentTimeAndHost);
  },
  getGPUTemperature: () => {
    return getOutputFromBash(bashCommands.getGPUTemp, output => {
      return output.replace('temp=', '');
    });
  },
  getCPUTemperature: () => {
    return getOutputFromBash(bashCommands.getCPUTemp, output => {
      return `${parseInt(output, 10) / 1000}'C`;
    });
  }
};

module.exports = raspiInfo;
