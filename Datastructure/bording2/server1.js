function one1(data){
    const promise = new Promise((resolve,reject )=>{
      resolve(data)
    })
  
    return promise
      
  }
function one2(data){
    const promise = new Promise((resolve,reject )=>{
      resolve(data)
    })
  
    return promise
      
  }
function one3(data){
    const promise = new Promise((resolve,reject )=>{
      resolve(data)
    })
  
    return promise
      
  }
  

one1(10).then((data)=>{
  return one2(data)
    
}).then((data)=>{
    return one3(data)
}).then((data)=>{
    console.log(data);
    
})

                