// function binarysearch(arr,target){
//     let left = 0
//     let right = arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left + right )/2)

//         if(arr[mid]==target){
//             return mid;
//         }
//         if(arr[mid]<target){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }

//     return -1
// }


// function binarysearch(arr,target,start=0,end=arr.length-1){
//     if(start>end){
//         return -1
//     }

  
//         let mid = Math.floor((start+end )/2)
//         if(arr[mid]==target){
//             return mid 
//         }
//         if(arr[mid]<target){
//             return binarysearch(arr,target,mid+1,end)
//         }else{
//            return  binarysearch(arr,target,start,mid-1)
            
//         }
    
// }

// const arr=[1,3,6,7,9]
// console.log(binarysearch(arr,9));

// function binarysearch(arr,target){
//     let left =0
//     let right=arr.length-1
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid]==target){
//             return mid;
//         }

//         if(arr[mid]>target){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
   
//     }
//     return -1
// }

// const arr=[1,3,6,7,9]
// console.log(binarysearch(arr,9));

// function binarysearch(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]==target){
//         return mid
//     }
//     if(arr[mid]<target){
//         return binarysearch(arr,target,mid+1,right)
//     }else{
        
//         return binarysearch(arr,target,left,mid-1)
//     }
// }

// const arr=[1,3,6,7,9]
// console.log(binarysearch(arr,3));

function binarysearch(arr,target){
  
    let left = 0
    let right=arr.length-1

    while(left<=right){
        let mid=Math.floor((right+left)/2)
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]>target){
            right = mid-1
        }else{
            left=mid+1
        }
    }
   return -1;
}

const arr=[2,33,73,88,99]

console.log(binarysearch(arr,2));


function binary(arr,target,left=0,right=arr.length-1){
    if(left>right){
        return -1
    }

    let mid =Math.floor((left+right)/2)
    if(arr[mid]==target){
        return mid
    }
    if(arr[mid]>target){
       return binary(arr,target,left,mid-1)
    }else{
        return binary(arr,target,mid+1,right)
    }
}


console.log(binary(arr,33));