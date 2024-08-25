function itsone(callback){
    callback()
}
function itstwo(callback){
    callback()
}
function itsthree(callback){
    callback()
}

itsone(()=>{
   itstwo(()=>{
     itsthree(()=>{
        console.log('its working');
        
     })
   })
    
})