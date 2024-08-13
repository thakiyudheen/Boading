// class stack{
//     constructor(){
//         this.stack = []
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//         return this.stack.pop()
//     }
//     peek(){
//         if(this.stack.length<1){
//             return 'oops'
//         }
//         return this.stack[this.stack.length-1]
//     }
//     display(){
//         console.log(this.stack);
//     }
// }


// stack using queue

class Queueusingstack{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }
    push(value){
        this.queue1.push(value)
    }
    pop(){
        if(this.queue1.length==0){
            return null
        }

        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())
        }
        let top=this.queue1.shift()
        [this.queue1,this.queue2]=[this.queue2,this.queue1]
        return top
    }
  
}
