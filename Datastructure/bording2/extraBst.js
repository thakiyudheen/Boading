class node{
    constructor(value){
        this.value=value;
        this.right=null
        this.left=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

    // insert node---------------------------------------

    insert(value){
        const newnode = new node(value)
        if(!this.root){
            this.root = newnode
        }else{
            return this.InsertNode(this.root,newnode)
        }
    }
    InsertNode(root,newnode){
        if(newnode.value<root.value){
            if(!root.left){
                root.left= newnode
            }else{
                this.InsertNode(root.left,newnode)
            }
        }else{
            if(!root.right){
                root.right= newnode
            }else{
                this.InsertNode(root.right,newnode)
            }
        }
    }

    // min node of the bst ------------------------------------------------
 

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    // kth small the bst ------------------------------------------------
 

    kthSmall(root,k){
        let result = null ;
        let count =0 ;
        function inorder(root){
            if(!root||result!=null){
                return null
            }

            inorder(root.left)
            count++
            if(count==k){
                result=root.value
                return 

            }
            inorder(root.right)
        }
        inorder(root)
        return result

    }
    height(root){
       if(!root){
         return 0
       }

       return 1+Math.max(this.height(root.left),this.height(root.right))
    }

    // height of the bst ------------------------------------------------

    heightWithBfs(root){   
        let queue=[]
        let height=-1
        queue.push(root)
        while(queue.length>0){

            for(let i=0;i<queue.length;i++){
                let current = queue.shift()
                
                if(current.left){
                    queue.push(current.left)
                }
                if(current.right){
                    queue.push(current.right)
                }
            }
            height++
            
        }
        return height
    }

    // delete Dublicates in the tree ---------------------------

    delete(root,value){
        if(!root){
            return null
        }
        if(value<root.value){
            root.left = this.delete(root.left,value)
        }else if(value>root.value){
            root.right = this.delete(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }else if(!root.left){
                return root.right 
            }else if(!root.right){
                return root.left 
            }

            root.value = this.min(root.right)
            root.right = this.delete(root.right,root.value)
        }
        return root
    }

    deleteDube(root){
        let queue=[root]
        let set = {};
        while(queue.length){
            let current = queue.shift()
            if(set[current.value]){
                this.delete(root,current.value)
            }else{
                set[current.value]=true
            }
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }

    }

    // pre order traversel ------------------------
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
            
    }

    // check is identical ----------------------------

    // isIdentical(root1,root2){
    //     if(!root1&&!root1){
    //         return true
    //     }
        
    //     if(!root1||!root2){
    //         return false
    //     }

    //     return (root1.value==root2.value&&this.isIdentical(root1.left,root2.left)&&this.isIdentical(root1.right,root2.right))
        
    // }

    findACE(root,q,p){
        if(!root){
            return null
        }
        if(q<root.value&&p<root.value){
            return this.findACE(root.left,q,p)
        }
        
        if(q>root.value&&p>root.value){
            return this.findACE(root.right,q,p)
        }

        return root
    }

    // isBst(root,min=-Infinity ,max= Infinity){
    //     if(root==null){
    //         return true
    //     }

    //     if(root.value<=min||root.value>=max){
    //         return false
    //     }

    //     return (this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max))
    // }

    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }
        if(root.value<=min||root.value>=max){
            return false
        }

        return this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max)


    }

    // isBalanced(root){
    //     if(!root){
    //         return false
    //     }

    //     function height(root){
    //         if(!root){
    //             return 0
    //         }

    //         return 1+Math.max(this.height(root.left),this.height(root.right))
    //     }

    //     let leftHeight = this.height(root.left)
    //     let rightHeight = this.height(root.right)
    //     return Math.abs(leftHeight-rightHeight)<=1&&this.isBalanced(root.left)&&this.isBalanced(root.right)
    // }

    isBalanced(root){
        if(!root){
            return true
        }

        function height(root){
            if(!root){
                return 0
            }
            return 1+Math.max(height(root.left), height(root.right))
        }

        let leftht = height(root.left)
        let rightht = height(root.right)

        return Math.abs(leftht-rightht)<=1&&this.isBalanced(root.left)&&this.isBalanced(root.right)

    }
    asc(root,p,q){
        if(!root){
            return null
        }
        if(p<root.value&&q<root.value){
            return this.asc(root.left,p,q)
        }
        if(p<root.value&&q<root.value ){
            return this.asc(root.right,p,q)
        }
       return root
    }

    isIdentical(root1,root2){
        if(!root1&&!root2){
            return true
        }
        if(!root1||!root2){
            return false
        }

        return (root1.value==root2.value&&this.isIdentical(root1.left,root2.left)&&this.isIdentical(root1.right,root2.right))
    }
    ascs(root,q,p){
        if(!root){
            return null
        }   
        if(q<root.value&&p<root.value){
            return ascs(root.left,q,p)
        }
        if(q>root.value&&p>root.value){
            return ascs(root.right,q,p)
        }

        return root


    }

    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }
        
        if(root.value<=min||root.value>=max){
            return false
        }

        return (this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max))
    }

    isBcd(root){
        if(!root){
            return true
        }
        function height(root){
            if(!root){
                return 0
            }
            return 1+Math.max(this.height(root.left),this.height(root.right))
        }

        let left = this.height(root.left)
        let right = this.height(root.right)

        return Math.abs(left-right)<=1&&this.isBcd(root.left)&&this.isBcd(root.right)
        
    }

    isIdentical(root1,root2){
        if(!root1&&!root2){
            return true
        }
        
        if(!root1||!root2){
            return false
        }

        return (root1.value==root2.value&&this.isIdentical(root1.left,root2.left)&&this.isIdentical(root1.right,root2.right))

    }

    
}

const bt1 = new bst()
bt1.insert(20);
bt1.insert(10);
bt1.insert(30);
bt1.insert(5);
bt1.insert(15);
bt1.insert(40);
bt1.insert(35);
bt1.insert(45);
bt1.insert(45);
const bt2 = new bst()
bt2.insert(20);
bt2.insert(10);
bt2.insert(30);
bt2.insert(5);
bt2.insert(15);
bt2.insert(40);
bt2.insert(35);
bt2.insert(45);
bt2.insert(45);

// find min node  -----------------
console.log('Find min node',bt1.min(bt1.root));

// kth smallest node --------------
console.log('This is the kth small',bt1.kthSmall(bt1.root,8));

// find the height of the tree-----
console.log('this is height of the tree',bt1.height(bt1.root));
console.log('this is height of the tree with bfs',bt1.heightWithBfs(bt1.root));

// find commen ancesistor----------
let act= bt1.findACE(bt1.root,5,30)
console.log('This are the ancistors',act?act.value:null);


// isIdentical check in bst--------
console.log('this is identical',bt1.isIdentical(bt1.root,bt2.root));


// delete deblicate----------------
bt1.deleteDube(bt1.root);

// delete normal ------------------
bt1.delete(bt1.root,15)

// print with pre order------------
bt1.preorder(bt1.root)

// is BSt--------------------------
console.log( 'is bst',bt1.isBst(bt1.root));

// is Balaced ----------------------
console.log('is balaces',bt1.isBalanced(bt1.root));




