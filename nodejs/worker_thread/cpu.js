const { parentPort } = require('worker_threads');

function cpuIntensiveTask() {
  let result = 0;
  const limit = 1e7; 
  for (let i = 0; i < limit; i++) {
    result += Math.sqrt(i);
  }
  return result;
}


const result = cpuIntensiveTask();
parentPort.postMessage(result);
