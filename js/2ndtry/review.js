// function binarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return -1;
//     }
    
//     let mid= Math.floor((left+right)/2)

//     if(arr[mid]==target){
//         return mid
//     }
//     if(arr[mid]>target){
//         return binarySearch(arr,target,mid+1,right)
//     }else{
//         return binarySearch(arr,target,left,mid-1)
//     }
// }

// const arr=[1,2,3,4,5,7,44,43,56,78].reverse()
// console.log(binarySearch(arr,1))


const students=[
    {
        "name": "Alice",
        "mark": 85
    },
    {
        "name": "Bob",
        "mark": 92
    },
    {
        "name": "Charlie",
        "mark": 78
    },
    {
        "name": "Diana",
        "mark": 88
    }
]

// for(let i=0;i<students.length;i++){
//     for(let j=i+1;j<students.length;j++){

//         if(students[i].mark>students[j].mark){
//             let temp=students[i]
//             students[i]=students[j]
//             students[j]=temp
//         }
//     }
// }


function sort(arr){
    if(arr.length<2){
        return arr 
    }

    let pivot= arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i].mark<pivot.mark){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...sort(left),pivot,...sort(right)]


}

console.log(sort(students))