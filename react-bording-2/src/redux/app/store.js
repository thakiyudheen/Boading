// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from '../features/userSlice'



// const store = configureStore({
//     reducer: {
//         user: userSlice
//     }
// })

// export default store

// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../features/userSlice";

// const store= configureStore({
//     reducer:{
//         user : userSlice
//     }
// })

// export default store

// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../features/userSlice";

// const store = configureStore({
//     reducer:{
//         count:userSlice
//     }
// })

import {configureStore} from '@reduxjs/toolkit'
import userSlicer from '../features/userSlice'

const store = configureStore({
    reducer:{
        count : userSlicer
    }
})

export default store