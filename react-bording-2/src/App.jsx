import { createContext, lazy, useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/login'
import {  Datas } from './context/context'
import { useSelector } from 'react-redux'
import HocComponent from './components/HocComponent'
import HocComponent2 from './components/HocComponent2'
import {Route, useParams,BrowserRouter as Router, Routes,useLocation } from 'react-router-dom'
import useHandle from './components/useHandle'
import Mains2 from './heigher/heigher2'
import Mains from './heigher/heigher'



function App() {

  const count = useSelector((state)=>state.count)
  console.log('this',count);
  
  const {states} = useContext(Datas)
  console.log(states);
  const [counter ,setCounter]= useState(0)
  const [click ,setClick]= useState(false)
  const [isLoading,setLoading]= useState(true)
  const [data,setData]= useState(10)

  useEffect(()=>{
    let time=null
    if(click){
     time = setInterval(()=>{
        setCounter((pre)=>pre+1)
      },1000)
    }else{
      clearInterval(time )
    }

    return ()=>{
      clearInterval(time)
    }
      
  },[click,counter])
  
  let Hoc = HocComponent2(HocComponent)

  setTimeout(()=>{
    setLoading1(false)
  },3000)
 
  const {id} = useParams()
  console.log('this is params', id);
  

  // const { increment,decrement} = useHandle(0)
  const [isLoading1,setLoading1]= useState(true)

  let Hocc = Mains2(Mains)
  
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path='/thakiyu/:id' element={<Login/>} />
      </Routes> */}


    {/* <button onClick={()=>setClick(true)} >{counter}</button> */}
    {/* <button onClick={()=>setClick(false)} >puse</button>
    <button onClick={()=>{setCounter(0);}} >restart</button> */}
       {/* <Login/>
        <button>{count.count}</button> */}
   
    {/* <Hoc  isLoading={isLoading} data={data}/> */}
       
        {/* </Router> */}
  
  
    <Hocc isLoading={isLoading1} data={data} />

 
    </>
  )
}

export default App
