class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class linkedlist{
    constructor(){
        this.head=null;
    }
    append(val){
       const newnode = new node(val)
       if(!this.head){
           this.head=newnode;
           return 
        }
        let temp=this.head
        while(temp.next){
            temp=temp.next;
            
        }

        temp.next=newnode
           
    }
    dispalay(){
        let temp=this.head;
        while(temp){
            console.log(temp.val);
            temp=temp.next;
        }
    }
}


function merge(list1,list2){
   let list3 = new linkedlist()
   let l1 =list1.head
   let l2 =list2.head

   while(l1!=null||l2!=null){
    if(l1==null){
        list3.append(l2.val)
        l2=l2.next;
    }else if(l2==null){
        list3.append(l1.val)
        l1=l1.next;
    }else{
        if(l1.val<l2.val){
            list3.append(l1.val)
            l1=l1.next;
        }else{
            list3.append(l2.val)
            l2=l2.next;
        }
    }
    
   }
   list3.dispalay()

}

const l1 = new linkedlist()
const l2 = new linkedlist()
l1.append(1)
l1.append(10)
l1.append(11)
l1.append(12)
l1.append(13)

l2.append(30)
l2.append(40)
l2.append(50)
l2.append(60)
l2.append(70)
// l1.dispalay()
// l2.dispalay()

merge(l1,l2)