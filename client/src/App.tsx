import {  lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import UseCallback from './component/useCallback'
import CommonButton from './component/commonButton'
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





return (
  <>
    <CommonButton textColor={'red'} size={'19px'} data={'button please'} />
  </>
)
}

export default App
