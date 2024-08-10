import {  lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import UseCallback from './component/useCallback'
// const Sample = lazy(()=>import('./component/sample'));
// import ErrorBoundary from './component/ErrorBoudary'



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

const [input,setInput]=useState('')

const [filtered,setFilter]=useState<any>([])

useEffect(()=>{
  console.log("ok");
  console.log(input);
  
  var contries=['italy','india','brazil','pakistan']
   
  setFilter(contries.filter((el)=> el.startsWith(input)))
  console.log('this is the data',filtered);
  
},[input])

return (
  <>
  <input type="text" onChange={(e)=>setInput(e.target.value)} className='bg-white py-3 ' />
   <ul>
    {filtered.map((el:any)=>
      (<li>{el}</li>)
    )}
    
   </ul>
  </>
)
}

export default App
