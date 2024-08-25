import { useState } from "react";

function useHandle(initialvalue){

    const [count,setCount]=useState(initialvalue)
    
    const increment =()=>{
       setCount((pre)=> pre+1)
    }
    const decrement  =()=>{
       setCount((pre)=> pre-1)
    }

    return{
        count,
        increment,
        decrement,
    }

}

export default useHandle