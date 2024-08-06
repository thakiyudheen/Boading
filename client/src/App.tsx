import {  lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import UseCallback from './component/useCallback'
const Sample = lazy(()=>import('./component/sample'));
import ErrorBoundary from './component/ErrorBoudary'



function App  () {
  const [count ,setCount]= useState(0)
  const [count2 ,setCount2]= useState(0)

  // useEffect(() => {

  //   const intervalId = setInterval(() => {      
  //     setCount(pre=>pre+1);
  //     setCount(pre=>pre+1);
  //     setCount(pre=>pre+1);
  //     setCount(pre=>pre+1);
  //   }, 1000);
 
  //   return () => clearInterval(intervalId);
  // }, [count]);\

  const exp = useMemo(() =>{
    for(let i=0;i<1000000000;i++){

    }
    
    return count%2==0 
  },[count])

return (
  <>
    <div>
      <ErrorBoundary
      <h1>
        
      {exp?'hi':'hekki'}
      </h1>

      <button onClick={()=>setCount(pre=>pre+1)}>{count}</button>
      <button onClick={()=>setCount2(pre=>pre+1)}>{count2}</button>
    </div>
  </>
)
}

export default App
