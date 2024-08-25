// import {createSlice} from '@reduxjs/toolkit'

// let initialState={
//     count : 0
// }
// const userSlice= createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         setUser:(state,action)=>{
//             state.count+=action.payload 
//         }
//     }
// })

// export const {setUser} = userSlice.actions
// export default userSlice.reducer

// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     count:''
// }

// const userSlicer= createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         setUser:(state,action)=>{
//             state.count=action.payload
//         }
//     }
// })

// export const {setUser}= userSlicer.actions
// export default userSlicer.reducer

// import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     count:0
// }

// const userSlice = createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         setCount:(state,action)=> {
//             state.count+=1
//         }
//     }
// })

// export const {setCount} = userSlice.actions
// export default userSlice.reducer


import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    count : 0
 }
const userSlicer = createSlice({
    name:'count',
    initialState,
    reducers:{
        setCount:(state,action)=>{
            state.count += action.payload
        }
    }
})

export const {setCount}=userSlicer.actions
export default userSlicer.reducer