const {parentPort } = require('worker_threads')
function fbbc(num){
  let limit = 1e7;
  let result = 0;
  for(let i=0;i<limit;i++){
    result = Math.sqrt(i)
  }
 return result
}

parentPort.postMessage(fbbc())