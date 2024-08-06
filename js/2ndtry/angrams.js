const arr=["listen", "silent", "enlist", "abc", "bca", "cab", "hello"]

function sortWord(words){
    let arr1=[]
    for(let i=0;i<words.length;i++){
        arr1[i]=words[i]
    }
    for(let i=0;i<arr1.length-1;i++){
        for(let j=0;j<arr1.length-i-1;j++){
            if(arr1[j]>arr1[j+1]){
                [arr1[j],arr1[j+1]]=[arr1[j+1],arr1[j]];
            }
        }
    }
    let reverce='';
    for(let i=0;i<arr1.length;i++){
        reverce+=arr1[i]
    }
    console.log('this is words',reverce);
    return reverce

}

function together(arr){

    let obj={}
    for(let i=0;i<arr.length;i++){
        
       let  sorted= sortWord(arr[i])
        if(!obj[sorted]){
            obj[sorted]=[]
        }
        obj[sorted][ obj[sorted].length]=arr[i]
        
    }
    console.log(obj);
let result=[]
   let count=0
   for(const key in obj){
     result[count]=obj[key]
    count++

   }

   return result
}


console.log(together(arr));