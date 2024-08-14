// const {Worker} = require('worker_threads')

// const worker = new Worker('./cpu.js')

// worker.on('message',(result)=>{
//     console.log('worker thrad is working',result);
    
// })

// worker.on('error',()=>{
//     console.log('this is the error');
    
// })

// worker.on('exit',(code)=>{
//     console.log('the worker thread is exited!');
    
// })

const {Worker}= require('worker_threads')

const worker = new Worker('./cpu.js')

worker.on('message',(result)=>{
    console.log('this is the result',result);
    
}) 
worker.on('error',(error)=>{
    console.log('the error');
    
})
worker.on('exit',(error)=>{
    console.log('the exit happen');
    
})