import React from 'react'

function CommonButton({data,textColor,size}:any ) {
  return (
    <button  style={{color:textColor  }} >{data}</button>
  )
}

export default CommonButton 