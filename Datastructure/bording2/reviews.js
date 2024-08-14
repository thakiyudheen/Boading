let str= 'abcaabdef'

function db(){
    let str1=''
for(let i=0;i<str.length;i++){
    let count=0;
    for(let j=0;j<str.length;j++){
        if(str[i]==str[j]&&j!=i){
           count++
        }
    }
    if(count==0){
        str1+=str[i]
    }

}
return str1
}
console.log(db(str))


