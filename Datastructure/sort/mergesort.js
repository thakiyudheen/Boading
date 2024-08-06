// function mergesort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftarr=arr.slice(0,mid)
//     let rightarr=arr.slice(mid)

//     return merge(mergesort(leftarr),mergesort(rightarr))
    
// }

// function merge(left,right){
//     let sorted=[]

//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }

//     }

//     return [...sorted,...left,...right]
// }

function sort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(sort(left),sort(right))
}

function merge(left ,right){
    let sorted=[]
    
    while(left.length&& right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
            
    }

    return [...sorted ,...left,...right]
}

const arr=[9,2,4,1,6,4]
console.log(sort(arr));