const http = require('http')
const fs = require('fs')


const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text\plain'})

    fs.readFile('./hello.txt',(err,data)=>{
        if(!err){
            res.write('thsi is ok',data)
            res.end()
            
        }
    })
    
    // if(req.url=='/'){
        
    //     res.write('thsi is home')
    //     res.end()
    // }else if(req.url=='/admin'){
    //     res.write('thsi is admin')
    //     res.end()
    // }else{
    //     res.write('thsi is none')
    //     res.end()
    // }
   
}).listen(3000,()=>{
    console.log('server started!');   
    fs.readFile('./hello.txt',(err,data)=>{
        if(!err){
            // res.write('thsi is ok',data)
            // res.end()
            console.log(data);
            
            
        }
    })

})