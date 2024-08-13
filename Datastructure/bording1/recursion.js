function sum(n){
    if(n<0){
        return 0
    }

    return n+sum(n-1)
}


function arrsum(arr,n=0){
    if(n>=arr.length){
        return 1
    }
    if(n%2!=0){

        return arr[n]
    }else{
        return arr[n]+arrsum(arr,n+1)

    }
}
console.log(arrsum([1,6,4]))

function febncci(n){
    if(n<2){
        return n;
    }

    return febncci(n-1)+febncci(n-2)
}

// console.log(febncci(10))

function isPalidrom(arr , left =0,right=arr.length-1){
    if(left>=right){
        return true
    }
    if(arr[left]!=arr[right]){
        return false
    }
    return isPalidrom(arr,left+1,right-1)
}

// console.log(isPalidrom([1,2,2,1]))


// console.log('ysss',this);


function reverce(arr,left=0,right=arr.length-1 ){
  if(left>=right){
    return true
  }
  if(arr[left]!=arr[right]){
    return false
  }
  return reverce(arr,right+1,left-1)
}

console.log(reverce([1,3,1]))


function isPal(arr,left=0,right=arr.length-1){
   if(left>=right){
    return true
   }

   if(arr[left]!=arr[right]){
    return false;
   }

   return isPal(arr,left+1,right-1)
}
console.log(isPal([2,1,2]));


function feb(num){
    if(num<2){
        return num;
    }
    return feb(num-2)+feb(num-1)
}

console.log('log',feb(10));


function summm(num,i=0){
    if(i>=num.length){
        return 0;
    }
    return num[i]+summm(num,i+1)
}
console.log(summm([1,2,3,4,5,2,33]));


// add odd 
function odd(arr,index=0){
    if(index>=arr.length){
       return 0;
    }

    return arr[index]+odd(arr,index+1)
}

console.log(odd([1,2,3,4,5,6]));
