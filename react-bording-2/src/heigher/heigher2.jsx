function Mains2(Wrapper){
  return function (props){
     if(props.isLoading){
        return <><p>loading please wait ....</p></>
     }
     return <Wrapper  {...props} />
  }
}

export default Mains2