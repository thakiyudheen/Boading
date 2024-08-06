let num = 1239567
let large= -Infinity;
while(num>0){
   let mod = num%10
   if(mod>large){
    large=mod
   }

   num =Math.floor(num/10)
}
console.log(large)


let today = new Date();
// let xmas = new Date(2024,0o6,31)

// let deff =  xmas - today 

// let rem = Math.floor(deff /(1000*60*60*24))
let tomorrow=  today.getDate()
console.log(tomorrow)

var number= Math.trunc(18.2345)


function* ok(){
   let count=0
   while(true){
     
            yield count;
            
            count++
       
   }
}

let oks = ok()
for(let i=0;i<10;i++){
   console.log(oks.next());
   
}


let arr=[19,[4],[3,[4,8,[4,[4,[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

function flat(arr){
   var result=[]
   for(let i =0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
       result= result.concat(flat(arr[i]))
     }else{
       result[result.length]=arr[i]
     }
   }
   return  result
}
console.log(flat(arr));
