class queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    push(value){
       this.stack1.push(value)
    }
    pop(){
        if(this.stack1.length==0){
            return null
        }

        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }

        let pop = this.stack2.pop()

        while(this.stack2.length){
            this.stack2.push(this.stack1.pop())
        }

        return pop;
    }

    DeleteMid(){
        
        let temp =[]

        for(let i =0;i<this.stack1.length;i++){
            if(Math.floor(this.stack1.length/2)==i){
                this.stack1.pop()
            }else{
                temp.push(this.stack1.pop())
            }
        }

        for(let i =0;i<temp.length;i++){
            this.stack1.push(temp.pop())
        }
    }
}