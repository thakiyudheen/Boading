class customError extends Error{
    constructor(message,status){
        super(message)
        this.status=status
        this.stack=(new Error).stack
        this.messag=message
    }
}
class NotFontError extends customError{
    constructor(message,status){
        super(message,status)
    }
}

try{

}catch(error){
    throw new NotFontError('this is the',404)
}

app.use((error,req,res,next)=>{
    if(error instanceof customError){
       res.json({
          status:false,
          message:error.message
       })
    }
})