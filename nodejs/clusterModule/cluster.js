// const cluster = require('cluster')
// const http = require('http')
// const numOf= require('os').cpus().length


// if(cluster.isMaster){
//   for(let i=0;i<numOf;i++){
//      cluster.fork()
//   }

//   cluster.on('exit',()=>{
//     console.log('cluster is exited');
    
//   })
// }else{
//     http.createServer((req,res)=>{
//         res.write('the cluster')
//         res.end()
//     }).listen(3000,()=>{
//         console.log('The worker process running successfully!');
        
//     })
// }

const cluster= require('cluster')
const http = require('http')
const upu= require('os').cpus().length
if(cluster.isMaster){ 
    for(let i=0;i<upu;i++){
        cluster.fork()
    }
    cluster.on('exit',()=>{
        console.log('its exite');
        
    })
}else{
    http.createServer((req,res)=>{
        
        
    }).listen(3000,()=>{
        console.log('this is working');
        
    })
}