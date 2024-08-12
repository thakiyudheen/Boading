class node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
    }
}

class btree{
    constructor(){
        this.root=null
    }
    insert(val){
        const newnode= new node(val)
        if(this.root==null){
            this.root=newnode;
        }else{
           return this.insertNode(this.root,newnode)
        }
    }

    // insertNode(root,newnode){
        
    //     if(newnode.value<root.value){
           
    //         if(root.left==null){
    //             root.left=newnode;
    //         }else{
    //             return this.insertNode(root.left,newnode)
    //         }
    //     }else{

    //         if(root.right==null){
    //             root.right=newnode;
    //         }else{
    //             return this.insertNode(root.right,newnode)
    //         }
    //     }
    // }
    insert(val){
        const newnode= new node(val)
        if(!this.root){
            this.root=newnode
        }else{
            return this.insertNode(this.root,newnode )
        }
    }
    insertNode(root , newnode){
        if(newnode.value<root.value){
            if(root.left==null){
                root.left=newnode
            }else{
                return this.insertNode(root.left,newnode)
            }
        }else {
            if(root.right==null){
                root.right=newnode
            }else{
                return this.insertNode(root.right,newnode)
            }
        }
    }

    searching(root,t){
        if(root==null){
            return false
        }
        if(root.value==t){
            return true
        }else if(root.value>t){
            return this.searching(root.left,t)
        }else{
            return this.searching(root.right,t)  
        }
        
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    inorder(root){
        if(root){
           this.inorder(root.left)
           console.log(root.value);
           this.inorder(root.right)     
        }
    }
    preorder(root){
        if(root){
           console.log(root.value);
           this.inorder(root.left)
           this.inorder(root.right)     
        }
    }
    postorder(root){
        if(root){
            this.inorder(root.left)
            this.inorder(root.right)     
            console.log(root.value);
        }
    }
    bfs(root){
        let queue=[]
        queue.push(root)
        while(queue.length>0){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            
        }

    }
    search(root,t){
        if(!root){
            return false
        }
        if(root.value==t){
            return true
        }else if(root.value<t){
            return this.search(root.right,t)
        }else{
            return this.search(root.left,t)
        }
    }
   
    delete(val){
        this.root= this.deleteNode(this.root,val)
    }
    deleteNode(root,val){
        if(!root){
            return root
        }
            if(val<root.value){
                root.left= this.deleteNode(root.left,val)
            }else if(val>root.value){
                root.right= this.deleteNode(root.right,val)
            }else{
                if(!root.left&&!root.right){
                    return null
                }
                if(!root.left){
                    return root.right
                }
                if(!root.right){
                    return root.left
                }
                
                root.val= this.min(root.right)
                root.right = this.deleteNode(root.right,root.value)
            }
            return root
        }
    
}


const bt= new btree()
bt.insert(10)
bt.insert(11)
bt.insert(12)
bt.insert(19)
bt.insert(39)
// bt.inorder(bt.root)
// bt.preorder(bt.root)
// bt.postorder(bt.root)
bt.delete(19)
 
bt.bfs(bt.root)
 
// console.log(bt.min(bt.root));
// console.log(bt.max(bt.root));
console.log(bt.search(bt.root,12));
console.log(bt.searching(bt.root,12));
