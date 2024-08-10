const eventEmitter = require('events')
const myEmiter= new eventEmitter()
myEmiter.on('message',(data)=>{
    console.log('this is event emitter',data.data);
    
})

myEmiter.emit('message',{data:10})