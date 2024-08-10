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

 let str=''
for(let i=0;i<students.length;i++){
    str+=students[i].name
}
console.log(str.split(''))
 let longest = str.split('').reduce((acc,cv)=>{
    if(!acc[cv]){
        acc[cv]=1
    }else{
        acc[cv]+=1
    }
    return acc
 },{})
 console.log('this is longest',Object.entries(longest));
 let max=0
 let maxchar=''
 for(let char in longest){
 
    
    if(longest[char]>max){
        maxchar=char
        max=longest[char]
    }
    // console.log(char);
    
 }

 console.log(,maxchar);
 
 
 
 