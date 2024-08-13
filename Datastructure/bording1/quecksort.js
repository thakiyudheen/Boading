// function quecksort(arr){
//     if(arr.length<=1){
//         return arr;
//     }

//     let pivot = arr[arr.length-1]
//     let left =[]
//     let right =[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }

//     return [...quecksort(left),pivot,...quecksort(right)]
// }


function quecksort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left =[]
    let right =[]

    for(let i=0;i<arr.length-1;i++){
        if(pivot<arr[i]){
            left.push(arr[i])
        }else{
            
            right.push(arr[i])

        }
    }

    return [...quecksort(left),pivot,...quecksort(right)]
}
const arr=[4,3,2,6,0,8]
console.log(quecksort(arr))
