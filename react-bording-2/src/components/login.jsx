import React, { useContext } from 'react'
import {  Datas } from '../context/context';
import { useDispatch } from 'react-redux';
import { setCount } from '../redux/features/userSlice';
import { useLocation, useParams } from 'react-router-dom';

function Login() {
  const location = useLocation()
  const param = new URLSearchParams(location.search)

  const { id } = useParams();
  console.log('this is params', id);
  


    const {setStates} =useContext(Datas)
    const dispatch = useDispatch()

  return (
    <div>login
      <button onClick={()=>dispatch(setCount(1))}>click</button>
    </div>
  )
}

export default Login