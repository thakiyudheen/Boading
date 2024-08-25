class Trienode {
    constructor() {
        this.child = {}
        this.isEnd = false
    }
}

class trie {
    constructor() {
        this.root = new Trienode()
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.child[char]) {
                node.child[char] = new Trienode()
            }
            node = node.child[char]
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.child[char]) {
                 return false
            }
            node = node.child[char]
        }
        return node.isEnd;

    }

    longestSubstring(word) {
        let node = this.root;
        let prefix = ''
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.child[char]) {
                break;
            }
            prefix +=char
            node = node.child[char]
        }
        return prefix
    }

    suffix(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            for (let j = i; j < word.length; j++) {
                let char = word[j]
                if (!node.child[char]) {
                    node.child[char] = new Trienode()
                }
                node = node.child[char]
            }
        }
    }

    auto(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.child[char]) {
                return []
            }
            node = node.child[char]
        }
        let items =[]
        this.autoCompletion(node,word,items)
        return items
    }
    autoCompletion(node,word,items){
        if(node.isEnd){
            items.push(word)
        }

        for(let char in node.child){
            this.autoCompletion(node.child[char],word+char,items)
        }
    }

    // delete(word) {
    //     const deleteRecursively = (node, word, index) => {
    //         if (index === word.length) {
    //             if (!node.isEnd) {
    //                 return false; // Word not found
    //             }
    //             node.isEnd = false; // Unmark the end of the word
    //             // Return true if the node has no children (cleanup needed)
    //             return Object.keys(node.child).length === 0;
    //         }

    //         const char = word[index];
    //         const childNode = node.child[char];
    //         if (!childNode) {
    //             return false; // Word not found
    //         }

    //         const shouldDeleteChild = deleteRecursively(childNode, word, index + 1);

    //         if (shouldDeleteChild) {
    //             delete node.child[char]; // Remove the child node
    //             // Return true if the current node is no longer needed
    //             return Object.keys(node.child).length === 0 && !node.isEnd;
    //         }

    //         return false;
    //     };

    //     deleteRecursively(this.root, word, 0);
    // }


    deleteTrie(word){
        function deleteNodes(node,word,index=0){
            if(index==word.length){
                if(!node.isEnd){
                    return false
                }
                node.isEnd=false

                return Object.keys(node.child).length==0
            }

            let char = word[index]
            let child = node.child[char]
            if(!child){
                return false
            }
            let deletedNode = deleteNodes(child,word,index+1) 

            if(deletedNode){
                delete node.child[char]
                return Object.keys(node.child).length==0&&!node.isEnd
            }
        }

        deleteNodes(this.root,word)
    }

    dlt(word){
        function dltWord(node,word,index=0){
            if(index==word.length){
                if(!node.isEnd){
                    return false
                }
                node.isEnd=false

                return Object.keys(node.child).length==0;
            }

            let char = word[index]
            let child = node.child[char]
            if(!child){
                return false
            }

            let deleted = dltWord(child,word,index+1)

            if(deleted){
                delete node.child[char]
                return Object.keys(node.child).length==0 && !node.isEnd ;
            }
        }
        dltWord(this.root,word)
    }

    deleteTotel(word){
        function deletes(node,word,index=0){
            if(index==word.length){
                if(!node.isEnd){
                    return false
                }
                node.isEnd = false 
                return Object.keys(node.child).length==0
            }

            let char = word[index]
            let child = node.child[char]
            if(!child){
                return false
            }

            let deletedd= deletes(child,word,index+1)

            if(deletedd){
                delete node.child[char]
                return Object.keys(node.child).length==0&& !node.isEnd;
            }
            
        }
        deletes(this.root,word)
    }
}

let tr = new trie()


// insertion  -------------------
tr.insert('Thakiyudheen')
tr.insert('Thajudheen')


// tr.deleteTotel('Thajudheen')
// searching---------------------
console.log('searched',tr.search('nahyan'));

// auto complete ----------------
console.log(tr.auto('Tha'));

// isert suffixx-----------------
console.log(tr.longestSubstring('Thaksadfafaaf'));
 

 