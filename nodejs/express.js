const express = require('express')
const fs = require('fs')
const app= express()
app.use((req,res)=>{
    fs.readFile('./server.js','utf8',(err,data)=>{
        if(!err){
            res.send(data)
            
        }
    })
    // res.send('THIS IS EXPRESS')
})
app.listen(4000,()=>{
    
    console.log('this is expresss');
    
})