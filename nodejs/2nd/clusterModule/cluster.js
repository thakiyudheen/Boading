const cluster = require('cluster')
const len = require('os').cpus().length
const http = require('http')

if(cluster.isMaster){
    for(let i=0;i<len;i++){
        cluster.fork()
    }

    cluster.on('exit',()=>{
        console.log('cluster exited');
        
    })
}else{
   http.createServer((req,res)=>{

   }).listen(3000,()=>{
    
        console.log('server running successfully');
    
   })
}
