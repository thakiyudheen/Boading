let str ='bak'
let str1 ='tab'
var hash={}
for(let char of str){
    console.log(char);
    if(!hash[char]){
        hash[char]=1
    }else{
        hash[char]+=1
    }
}
for(let char of str1){
    console.log(char);
    if(!hash[char]){
        console.log(false);
        
        return false

    }else{
        hash[char]-=1
    }
}
console.log(hash);
