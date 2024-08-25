// 10
// 10 = 10
// 10+1 = 11
// 10+9+2+1=23
// 10+9+8+3+2+1 =..
// 10+9+8+7+4+3+2+1=..
// 10+9+8+7+6+5+4+3+2+1 = 55
// console.log('10');


for(let i=1;i<=20;i=i+2){
    var str='';
    let ma=10
    let min=Math.floor(i/2)
    for(let j=1;j<=i-1;j++){
        if(Math.floor(i/2)>=j){
            str+=`${ma--}${j==i-1?`=${eval(str+1)}`:'+'}`
        }else{
            str+=`${min--}${j==i-1?`=${eval(str+1)}`:'+'}`
        } 
    }
    console.log(`${i!=1?`${str}`:'10\n10=10'}`);
    
}