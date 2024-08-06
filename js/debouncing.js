// function debounce(func,dalay){
//     let time
//     return function(...args){
        
//         if(time){
//           clearTimeout(time)
//         }
    
//         time = setTimeout(()=>{
//             func()
//         },dalay)
//     }
// }


// const handleClick=()=>{
//     console.log('iam the man');
// }

// const debouncedHandleClick = debounce(handleClick, 1000);
// var x=setInterval(()=>{
    
//     debouncedHandleClick()
// },200)
// setTimeout(()=>{
//   clearInterval(x)
// },2000)


function debounce(func,delay){
    let time 
    return function(){
        if(time){
            clearTimeout(time)
        }
        time = setTimeout(()=>{
            func()
        },delay) 

    }
}

function throwttling(func , limit){
    let last = 0;
    return function(){
        let now = new Date()
        if(now-last>=limit){
            func()
            last=now;
        }
    }
     
}