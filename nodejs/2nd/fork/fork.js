const {fork}= require('child_process')

const child = fork('./process.js')

child.send({val:40})

child.on('message',(result)=>{
    console.log('this is the message',result);
    
})