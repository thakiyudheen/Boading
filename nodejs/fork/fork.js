const {fork}= require('child_process')

const child = fork('./child.js')

child.send({task:'them',time:8})

child.on('message',(result)=>{
    console.log('this is the result',result);
    
})