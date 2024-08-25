// let num  = 121

// function isPalidrom(num){

//     if(num<0){
//         return false
//     }
    
//     let org=num 
//     let reverce=0
    
//     while(num>0){
//         let last = num%10
//          reverce = reverce*10+last
//         num = Math.floor(num/10)
//     }
//     if(reverce==org){
//         return true
//     }
//     return false
// }

// console.log(isPalidrom(num));


// function isPalidrom(nums){

//     if(nums<0){
//         return false
//     }
//     let org = nums;
//     let reverce = 0;

//     while(nums>0){
//         let digit = nums%10;
//          reverce = reverce*10 + digit;
//          nums =Math.floor(nums/10)
//     }

//     if(reverce==org){
//         return true
//     }

//     return false
// }
// console.log(isPalidrom(1213));


function isPalidrom(num){
    if(num<0){
        return false
    }

    let org = num
    let reverce =0

    while(num>0){
        let deg= num%10
        reverce = reverce*10+deg
        num = Math.floor(num/10)
    }
    if(org==reverce){
        return true
    }
    return false
}

console.log(isPalidrom(1214));
