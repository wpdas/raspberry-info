'use strict';

const bashCommands = require('./bash-commands.json');
const exec = require('child_process').exec;

function getOutputFromBash(attributes) {
  return new Promise((resolve, reject) => {
    let currentExec = exec(attributes, (err, stdout, stderr) => {
      currentExec.kill();
      if (err) return reject(stderr);
      resolve(stdout);
    });
  });
}

let raspiInfo = {
  getCurrentTimeAndHost: () => {
    return getOutputFromBash(bashCommands.getCurrentTimeAndHost);
  },
  getGPUTemperature: () => {
    return getOutputFromBash(bashCommands.getGPUTemp);
  },
  getCPUTemperature: () => {
    return getOutputFromBash(bashCommands.getCPUTemp);
  }
};

module.exports = raspiInfo;
