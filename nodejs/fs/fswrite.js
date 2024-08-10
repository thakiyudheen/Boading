const fs = require('fs')
fs.writeFile('sample.js','console.log()',(err)=>{
    if(err){
        console.log('the error is occure');
    }else{
        console.log('file created cccsuccessfully');
        
    }

    
})

fs.readFile('./sample.js','utf8',(err,data)=>{
    if(!err){
        console.log('this is are the data',data);
        
    }else{
        console.log('this is errorf',err);
        
    }
})


fs.appendFile('./sample.js','iam.js',(err,data)=>{
    if(err){
        console.log('error occured while updating');
        
    }else{
        console.log('data updated',data);
        
    }
})

fs.rename('./sample.js','sam.js',(err,data)=>{
    if(err){
        console.log('this is are the error');
        
    }
})

fs.unlink('./sam.js',(err)=>{
    if(!err){
        console.log('deleted succcesfully');
        
    }
})