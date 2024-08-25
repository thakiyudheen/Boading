import React from 'react'

function HocComponent({data}) {
    console.log('thsisi data ok',data);
    
  return (
    <>
    <div style={{background:'red'}}>HocComponent:</div>
    <div>{data}</div>
    </>
  )
}

export default HocComponent