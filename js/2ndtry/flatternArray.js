const arr=[10,39,[8,[3,[4,[[4,[3]],3]]]],4,5,6]


function flat(arr){
    var arr1=[]
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
       arr1=arr1.concat(flat(arr[i]))
    }else{        
        arr1[arr1.length]=arr[i]
    }
    
}
return arr1
}
console.log(flat(arr));