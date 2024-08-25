// class queue{
//     constructor(){
//         this.queue = []
//     }
//     enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         this.queue.shift()
//     }
//     peek(){
//         return this.queue[0]
//     }
//     display(){
//         console.log(this.queue)
//     }
// }

class queueusingstack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack1.length==0){
            return null
        }

        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
        let pop= this.stack2.pop()
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop())
        }
        return pop

    }
   

    
}   