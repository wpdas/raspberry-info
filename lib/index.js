'use strict';

const exec = require('child_process').exec;
const bashCommands = require('./bash-commands.json');
const fs = require('fs');

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
  getGPUTemperature: (useSignal = true) => {
    return getOutputFromBash(bashCommands.getGPUTemp, output => {
      output = output.replace('temp=', '');
      if (useSignal) {
        output = output.replace("'C", '°C');
      } else {
        output = output.replace("'C", '');
      }
      return output;
    });
  },
  getCPUTemperature: (useSignal = true) => {
    return getOutputFromBash(bashCommands.getCPUTemp, output => {
      return `${(parseInt(output, 10) / 1000).toFixed(1)}${useSignal ? '°C' : ''}`;
    });
  },
  getSerialNumber: () => {
    return getOutputFromBash(bashCommands.getSerialNumber);
  },
  getIP: () => {
    return getOutputFromBash(bashCommands.getIP);
  },
  getMemoryTotal: async (useSignal = true) => {
    let content = await fs.readFileSync(bashCommands.memoryInfo, 'utf8');
    content = content.split('\n')[0].replace(/[^\d]/g, '');
    if (useSignal) content = content.concat(' kB');
    return content;
  },
  getMemoryFree: async (useSignal = true) => {
    let content = await fs.readFileSync(bashCommands.memoryInfo, 'utf8');
    content = content.split('\n')[1].replace(/[^\d]/g, '');
    if (useSignal) content = content.concat(' kB');
    return content;
  },
  getMemoryAvailable: async (useSignal = true) => {
    let content = await fs.readFileSync(bashCommands.memoryInfo, 'utf8');
    content = content.split('\n')[2].replace(/[^\d]/g, '');
    if (useSignal) content = content.concat(' kB');
    return content;
  },
  getMemoryUsage: async (useSignal = true) => {
    let total = parseFloat(await raspiInfo.getMemoryTotal(false));
    let free = parseFloat(await raspiInfo.getMemoryFree(false));
    let available = parseFloat(await raspiInfo.getMemoryAvailable(false));
    let cmaTotal = await fs.readFileSync(bashCommands.memoryInfo, 'utf8');
    cmaTotal = parseFloat(cmaTotal.split('\n')[34].replace(/[^\d]/g, ''));

    let realAvaiable = total - (total - available) + free + cmaTotal;

    let avarage = `${Math.round(((total - realAvaiable) * 100) / total)}${
      useSignal ? '%' : ''
    }`;
    return avarage;
  }
};

module.exports = raspiInfo;
