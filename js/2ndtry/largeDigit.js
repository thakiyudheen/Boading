function maxdig(num){
  let max=num%10
  while(num>0){
    let mod= num%10;
    if(max<mod){
        max = mod;
    }
    num= Math.floor(num/10)
  }
  return max
}

console.log(maxdig(34324909022));