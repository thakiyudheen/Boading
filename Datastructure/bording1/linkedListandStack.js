class node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
    }
    append(value){
        this.Replace(value)
        let newnode= new node(value)
        if(!this.head){
            this.head= newnode;
            return;
        }else{
            let temp = this.head;
            while(temp.next!==null){
                temp=temp.next;
            }
            temp.next=newnode;
        }
    }
    lastDelete(){
        let temp=this.head;
        let pre=null
        while(!temp.next){
            pre=temp;
            temp=temp.next;
        }
        pre.next=null

    }
    Replace(value){
        let temp=this.head;
        let pre=null
        while(temp&&temp.val!=value){
            pre=temp
            temp=temp.next
        }
        if(temp){
            if(pre){
                pre.next= temp.next;
            }else{
                this.head= temp.next
            }
        }
       
            
    }
    display(){
        let temp=this.head;
        while(temp){
            console.log(temp.val);
            temp=temp.next;
        }
            
    }
}

class stack{
    constructor(){
        this.list= new linkedList()
    }
    push(value){
        this.list.append(value)
    }
    pop(){
        this.list.lastDelete()
    }
    display(){
        this.list.display()
    }

}

let st= new stack()
st.push(10)
st.push(12)
st.push(13)
st.push(14)
st.push(15)
st.push(16)

st.display()