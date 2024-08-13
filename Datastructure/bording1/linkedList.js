class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class  linkedList{
    constructor(){
        this.head=null;
    }
    append(value){
       const newnode= new node(value)
       
       if(this.head==null){
          this.head= newnode;
          return 
       }else{
        let temp = this.head;
         while(temp.next!=null){
            temp=temp.next
         }
         temp.next=newnode
       }
    }
    prepent(value){
        const newnode= new node(value)
        let temp =this.head;
        if(temp==null){
            this.head=newnode
            return ;
        }else{
            let pre=null;
            while(temp.next!=null){
                pre=temp ;
                temp=temp.next
            }
            if(pre==this.head){
                newnode.next=this.head
                this.head= newnode
            }
            pre.next=newnode;
            newnode.next=temp 
        }
        
    }
    delete(value){
        let temp = this.head;
        let pre=null
        
        while(temp!=null&&temp.value!=value){
            pre=temp;
            temp=temp.next;
           
        }
        if(temp==null){
            return 
        }
        if(this.head==value){
            this.head=this.head.next
        }else{
            pre.next=temp.next
        }
    }
    nth(n){
        let temp =this.head
        let pre=null
        let count=1;
        while(temp!=null&& count!=n){
            pre= temp
           temp = temp.next;
           count++;
        }

        if(temp==null){
            return 
        }
        if(temp==this.head){
            this.head=null
        }else{
            pre.next=temp.next
        }

    }
    reverce(){
       let next =null; 
       let current =this.head
       let pre =null;

       while(current!=null){
        next =current.next
        current.next=pre
        pre=current;
        current=next
       }
      
      this.head=pre

    }
    isPalidrom(){
        if(this.head==null|| this.head.next==null){
         return true
        }
 
       let slow = this.head
       let fast =this.head;
       while(fast.next&&fast.next.next){
         slow = slow.next
         fast =fast.next.next
       }
 
       let secondHalf = slow;
       let next =null;
       let prev = null;
 
       while(secondHalf!=null){
          next = secondHalf.next;
          secondHalf.next= prev;
          prev= secondHalf;
          secondHalf = next
          
       }

       let reversed= prev

       let half = this.head;
       while(reversed!=null){
        if(half.value!= reversed.value){
            return false
        }
        half=half.next
        reversed= reversed.next
       } 

       return true
     }
    mid(){

        let slow =this.head;
        let fast =this.head;
        while(fast.next&&fast.next.next){
            slow=slow.next
            fast=fast.next.next
        }

        console.log('this is the middle', slow.value)

        
    }
    display(){
        let temp =this.head;
        if(temp){
            while(temp!=null){
                console.log(temp.value)
                temp = temp.next;
            }

        }
    }
}

function mergeLinked(ll1,ll2){
    const list = new linkedList()
    let l1 = ll1.head
    let l2 = ll2.head 

    while(l1!=null||l2!=null){
        if(l1==null){
            list.append(l2.value)
            l2=l2.next
        }else if(l2==null){
            list.append(l1.value)
            l1=l1.next
        }else{
            if(l1.value<l2.value){
                list.append(l1.value)
                l1=l1.next
            }else{
                list.append(l2.value)
                l2=l2.next
            }
        }
    }

    list.display()
}

 function findUncommen(l11,l22){
     var common = new Set()
     var visited = new Set()
   let  l1= l11.head;
   let  l2= l22.head;
     while(l1){
        visited.add(l1.value)
        common.add(l1.value)
        l1 =l1.next;
     }
     while(l2){
        if(visited.has(l2.value)){
            common.delete(l2.value)
        }else{
            common.add(l2.value)

        }
        l2= l2.next
     }

     return common
 }

const nt=new linkedList()
nt.append(1)
nt.append(2)
nt.append(4)
nt.append(8)
nt.append(9)
const nt2=new linkedList()
nt2.append(32)
nt2.append(1)
nt2.append(45)
nt2.append(46)
nt2.append(48)
// nt2.mid()
// nt2.nth(2)

// mergeLinked(nt2,nt)
console.log(findUncommen(nt2,nt)); 

// nt.display()
// console.log( nt.isPalidrom());