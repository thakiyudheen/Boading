class customError extends Error{
    constructor( message, status){
        super(message)
        this.message=message;
        this.status= status;
        this.stack=(new Error).stack
    }


}

class NotFontError extends customError{
    constructor( message, status){
        super(message,status)
    }
}



try {
    
} catch (error) {
    throw new NotFontError('nt found')
}

app.use((errr,req,res,next)=>{
  if(errr instanceof customError){
    res.json(errr.message)
  }
})