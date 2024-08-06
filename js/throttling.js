function throttling(func,limit){
    let lastcall=0;
    return function(){
        let now = new Date()
        if(now-lastcall>=limit){
            func()
            lastcall=now;
        }

    }

}
const handleClick=()=>{
    console.log('iam the man');
}

let thrott= throttling(handleClick,2000)

setInterval(()=>{
    thrott()
   
},100)