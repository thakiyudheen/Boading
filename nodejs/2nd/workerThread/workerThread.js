const {Worker} = require('worker_threads')

const worker = new Worker('./process.js')

worker.on('message',(result)=>{
    console.log('this is the result',result);
    
})

worker.on('exit',()=>{
    console.log('Exit program worker thread');
    
})