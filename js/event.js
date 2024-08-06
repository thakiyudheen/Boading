const EventEmitter =require( 'events')
const myEmitter = new EventEmitter()


myEmitter.on('hello',(data)=>{
    console.log(data)
})
myEmitter.emit('hello', "event is working ..")
