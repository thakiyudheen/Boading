const arr=[5,3,6,1,9,1]
// for(let i=1;i<arr.length;i++){
//     let key=arr[i]
//     let j = i-1;
//     while(j>=0&&key<arr[j]){
//         arr[j+1]=arr[j]
//         j--;
//     }
//     arr[j+1]=key
// }

// console.log(arr)

for(let i=1;i<arr.length;i++){
    let key=arr[i]
    let j=i-1;
    while(j>=0&& key<arr[j]){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1]=key
}

console.log(arr);