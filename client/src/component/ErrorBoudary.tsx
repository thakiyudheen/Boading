// import { Component } from "react";

// class ErrorBoundary extends Component{
//   constructor(props){
//     super(props)
//     this.state={hasError:false}
//   }
//    static getDerivedStateFromError(){
//     return {hasError:true}
//   }
//   static componentDidCatch(error,errorInfo){
//     console.error("Error:",error,ErrorInfo)
//   }

//   render(){
//     if(this.state.hasError){
//       return <h1>somthing went wrong !</h1>
//     }
//     return this.props.children
//   }

// }