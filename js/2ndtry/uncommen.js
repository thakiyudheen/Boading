const arr1=[1,2,3,4,4] 
const arr2=[1,3,4,8,8,20]

let common=new Set(arr1)
let visited = new Set(arr1)

for(let j=0;j<arr2.length;j++){
    if(visited.has(arr2[j])){
        common.delete(arr2[j])
    }else{
        common.add(arr2[j])
        visited.add(arr2[j])
    }

}

console.log(common)