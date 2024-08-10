const http = require('http')


const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    console.log('thisis not working',req.url);
    if(req.url=='/'){
        
        res.write('thsi is home')
        res.end()
    }else if(req.url=='/admin'){
        res.write('thsi is admin')
        res.end()
    }else{
        res.write('thsi is none')
        res.end()
    }
   
}).listen(3000,()=>{
    console.log('server started!');   
})