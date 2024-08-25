import React from 'react'

function HocComponent2(Wrapper) {
  
  return function (props){
    if(props.isLoading){
        return <p>its loading....</p>
    }
    return <Wrapper {...props} />
  }

}

export default HocComponent2