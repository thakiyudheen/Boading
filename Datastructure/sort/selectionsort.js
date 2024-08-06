const arr = [3,1,7,4,3,7,2]

// for(let i=0;i<arr.length-1;i++){
//     let minIndex=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[minIndex]>arr[j]){
//             minIndex = j
//         }
//     }
//     if(minIndex!=i){
//         [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
//     }
// }
// console.log(arr)

for(let i=0;i<arr.length-1;i++){
    let minIndex=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[minIndex]>arr[j]){
            minIndex = j;
        }
    }
    if(minIndex!=i){
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
}
console.log(arr);