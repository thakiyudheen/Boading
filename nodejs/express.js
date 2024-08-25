// const express = require('express')
// const fs = require('fs')
// const app= express()
// app.use(express.json());


// app.use(express.urlencoded({ extended: true }));
// app.use((req,res)=>{
//     fs.readFile('./server.js','utf8',(err,data)=>{
//         if(!err){
//             res.send(data)
            
//         }
//     })
//     // res.send('THIS IS EXPRESS')
// })
// app.listen(4000,()=>{
    
//     console.log('this is expresss');
    
// })



// const obj ={
//     name:'Thakiyu',
//     age:20,
//     time:{
//        k:10
//     }
// }


//  const obj1={...obj}

//  const deep= JSON.parse(JSON.stringify(obj))

//  console.log(deep);
const ok={
    getName:()=>{
        console.log('this is the data',this.name);
        
    }
}

const obj={
    name :'thakiyudhee'
}
 
ok.getName.call(obj)


