import { createContext, lazy, useEffect, useState } from 'react'
import './App.css'
import Login from './components/login'



function App() {
  const [count,setCount]= useState(0)
  const [count2,setCount2]= useState(0)
  // createContext({data:10})
  // const expensive = ()=>{
  //   for(let i=0;i<100000000000;i++){
      
  //   }
  //   return count%2==0
  // } 

  // console.log(expensive);
  const { createContext, useState } = require("react");
  const [state,setState]= useState(0)
  const status = createContext(state)
  console.log(status);
  

  return (
    <>

       
       {/* <h1>{expensive()&&count}</h1> */}
       <Login/>
       {/* <button onClick={()=>setCount((pre)=>pre+1)}> click </button>
       <button  onClick={()=>setCount2((pre)=>pre+1)}> {count2} </button> */}

    </>
  )
}

export default App
