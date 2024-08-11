function make(num){
    if(num<2    ){
        return num
    }

    return make(num-1)+make(num-2)

}
console.log(make(8));

process.on('message',(data)=>{
    if(data){
        process.send(make(data.time))
    }
})   
// jkj