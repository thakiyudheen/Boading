const express = require('express')
const cookieParser = require('cookie-parser');
const app=express()
app.use(cookieParser())

// app.get('/create',(req,res)=>{
//     res.cookie('user','thakiyu',{maxAge:300000,httpOnly:true })
//     res.send('cookie created')
// })

app.use(session({
    secret : 'this',
    resave:true,
    saveUninitialsed:false,
    cookies:{maxAge:300000}
}))

app.get('/get',(req,res)=>{
    console.log('thsi is cookie',req.cookies);
    
    res.send(req.cookies)
})

app.listen(4000,()=>{
    console.log('server running');
    
})