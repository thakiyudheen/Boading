const express = require('express')
const app= express()
app.use((req,res)=>{
    res.send('THIS IS EXPRESS')
})
app.listen(3000,()=>{
    
    console.log('this is expresss');
    
})