function fbbc(num) {
    if (num < 2) {
        return num
    }
    return fbbc(num-2)+fbbc(num-1)
}

process.on('message',(data)=>{
    if(data.val){
        process.send(fbbc(data.val))
    }
})