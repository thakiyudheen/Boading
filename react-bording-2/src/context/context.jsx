import { createContext, useState } from "react";


const Datas = createContext()

const ContextP = ({children})=>{
    const [states,setStates]= useState(0)
    return (
        <Datas.Provider  value={{states,setStates}}>
            {children}
        </Datas.Provider>
    )

}

export {ContextP, Datas}