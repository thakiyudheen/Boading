// class customError extends Error{
//     constructor(message,status){
//         super(message)
//         this.status=status
//         this.stack=(new Error).stack
//         this.messag=message
//     }
// }
// class NotFontError extends customError{
//     constructor(message,status){
//         super(message,status)
//     }
// }

// try{

// }catch(error){
//     throw new NotFontError('this is the',404)
// }

// app.use((error,req,res,next)=>{
//     if(error instanceof customError){
//        res.json({
//           status:false,
//           message:error.message
//        })
//     }
// })

class constomError extends Error{
    constructor(message,status){
        super(message)
        this.status= status
        this.stack=(new Error).stack
        this.message =message;
    }
}

class notFontError extends constomError{
    constructor(message,status){
        super(message,status)

    }
}

try{
    console.log('ok');
    
}catch(error){
  throw new notFontError('nothing',404)
}

app.use((err,req,res,next)=>{
    if(err instanceof constomError){
        res.json({
            error:'its ok'
        })
    }
})