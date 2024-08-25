import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(){
        return { hasError: true }
    }

    componentDidCatch(error,errorInfo){
        console.log('this is the error',error,errorInfo);
        
    }
    render(){

        if(this.state.hasError){
          return   <p>this is error</p>
        }
        return this.children
    }
}

export default ErrorBoundary