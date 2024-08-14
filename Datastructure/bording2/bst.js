class node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class btree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const newnode = new node(val)
        if (this.root == null) {
            this.root = newnode;
        } else {
            return this.insertNode(this.root, newnode)
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
    // insert(val){
    //     const newnode= new node(val)
    //     if(!this.root){
    //         this.root=newnode
    //     }else{
    //         return this.insertNode(this.root,newnode )
    //     }
    // }
    // insertNode(root , newnode){
    //     if(newnode.value<root.value){
    //         if(root.left==null){
    //             root.left=newnode
    //         }else{
    //             return this.insertNode(root.left,newnode)
    //         }
    //     }else {
    //         if(root.right==null){
    //             root.right=newnode
    //         }else{
    //             return this.insertNode(root.right,newnode)
    //         }
    //     }
    // }
    insert(value) {
        const newnode = new node(value)
        if (this.root == null) {
            this.root = newnode
        } else {
            return this.insertNode(this.root, newnode)
        }
    }
    insertNode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left = newnode
            } else {
                return this.insertNode(root.left, newnode)
            }
        } else {
            if (!root.right) {
                root.right = newnode
            } else {

                return this.insertNode(root.right, newnode)
            }
        }

    }
    searching(root, t) {
        if (root == null) {
            return false
        }
        if (root.value == t) {
            return true
        } else if (root.value > t) {
            return this.searching(root.left, t)
        } else {
            return this.searching(root.right, t)
        }

    }

    // max(root) {
    //     if (!root.right) {
    //         return root.value
    //     } else {
    //         return this.max(root.right)
    //     }
    // }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.inorder(root.left)
            this.inorder(root.right)
        }
    }
    postorder(root) {
        if (root) {
            this.inorder(root.left)
            this.inorder(root.right)
            console.log(root.value);
        }
    }
    // bfs(root) {
    //     let queue = []
    //     queue.push(root)
    //     while (queue.length > 0) {
    //         let current = queue.shift()
    //         console.log(current.value);
    //         if (current.left) {
    //             queue.push(current.left)
    //         }
    //         if (current.right) {
    //             queue.push(current.right)
    //         }

    //     }
    // }
    bfs(root) { //to find the height of the tree
        const queue = []
        queue.push(root)
        let h = 0
        while (queue.length > 0) {
            let size = queue.length;
            h++;
            for (let i = 0; i < size; i++) {

                let current = queue.shift()
                console.log(current.value);
                if (current.left) {
                    queue.push(current.left)
                }
                if (current.right) {
                    queue.push(current.right)
                }

            }
        }
        return h
    }

    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)

        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    // }
    // search(root,t){
    //     if(!root){
    //         return false
    //     }
    //     if(root.value==t){
    //         return true
    //     }else if(root.value<t){
    //         return this.search(root.right,t)
    //     }else{
    //         return this.search(root.left,t)
    //     }
    // }
    search(root, t) {
        if (!root) {
            return false
        }
        if (root.value == t) {
            return true

        } else if (t < root.value) {
            return this.search(root.left, t)
        } else {
            return this.search(root.right, t)
        }
    }

    // delete(val){
    //     this.root= this.deleteNode(this.root,val)
    // }
    // deleteNode(root,val){
    //     if(!root){
    //         return root
    //     }
    //         if(val<root.value){
    //             root.left= this.deleteNode(root.left,val)
    //         }else if(val>root.value){
    //             root.right= this.deleteNode(root.right,val)
    //         }else{
    //             if(!root.left&&!root.right){
    //                 return null
    //             }
    //             if(!root.left){
    //                 return root.right
    //             }
    //             if(!root.right){
    //                 return root.left
    //             }

    //             root.val= this.min(root.right)
    //             root.right = this.deleteNode(root.right,root.value)
    //         }
    //         return root
    //     }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, val) {
        if (!root) {
            return root
        }
        if (val < root.value) {
            root.left = this.deleteNode(root.left, val)
        } else if (val > root.value) {
            root.right = this.deleteNode(root.right, val)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    // isIdentical(root1,root2){
    //     if(!root1&&!root2){
    //         return true
    //     }
    //     if(!root1 || !root2){
    //         return false
    //     }

    //     return (
    //        root1.value==root2.value&&this.isIdentical(root.left,root.right)&&this.isIdentical(root.right,root.left)
    //     )
    // }
    isIdentical(root1, root2) {
        if (!root1 && !root2) {
            return true
        }
        if (!root1 || !root2) {
            return false
        }
        return (
            root1.value == root2.value && this.isIdentical(root.left, root.right) && this.isIdentical(root.right, root.left)
        )
    }

    height(root) {
        let queue = []
        queue.push(root)
        let height = 0
        while (queue.length > 0) {
            let size = queue.length
            for (let i = 0; i <size; i++) {
                let current = queue.shift()
                if (current.left) {
                    queue.push(current.left)
                }
                if (current.right) {
                    queue.push(current.right)
                }
                
            }
            height++
        }
        return height

    }

    deletes(value){
        console.log('reaxh');
        
        this.root= this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(value<root.value){
            root.left= this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value= this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)

        }

        return root
    }
     
    dublicate(root){
       let queue=[]
       queue.push(root)
       let visited={}
       while(queue.length){
         let current = queue.shift()
         console.log(current.value);
         if(visited[current.value]){
            this.deletes(current.value)
         }else{
            visited[current.value]=true
         }
         if(current.left){
            queue.push(current.left)
         }
         if(current.right){
            queue.push(current.right)
         }
       }
    }
    

    // delete()

}


const bt = new btree()
const bt1 = new btree()
bt.insert(10)
bt.insert(11)
bt.insert(11)
bt.insert(11)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(12)
bt.insert(19)
bt.insert(39)
bt.insert(40)
bt.insert(70)
bt.insert(56)
// bt.inorder(bt.root)
// bt.delete(11)


// bt.deletes(11)
bt.dublicate(bt.root)
bt.preorder(bt.root)
// console.log(bt.isIdentical(bt.root, bt1.root));

// bt.postorder(bt.root)

// console.log('its the height',bt.bfs(bt.root));
// console.log('the height is ',bt.height(bt.root));



// console.log(bt.min(bt.root));
// console.log(bt.max(bt.root));
// console.log(bt.search(bt.root, 12));
// console.log(bt.searching(bt.root, 12));
