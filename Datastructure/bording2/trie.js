class nodes{
    constructor(){
        this.child={}
        this.isEnd=false;
    }
}

class trie{
    constructor(){
        this.root=new nodes()
    }
    insert(word){
        let node=this.root;
        for(let i=0;i<word.length;i++){
            let char= word[i]
            if(!node.child[char]){
                node.child[char]= new nodes()
            }
            node=node.child[char]
        }
        node.isEnd=true
    }
    search(word){
        let node = this.root ;
        for(let i=0 ;i<word.length ;i++){
            let char=word[i]
            if(!node.child[char]){
                return false
            }
            node=node.child[char];
        }
        return node.isEnd
    }
    
    longest(word){
         let node=this.root
         let prefix=''
         for(let i=0;i<word.length;i++){
             
             let char=word[i]
            if(!node.child[char]){
                break;
            }
            prefix+=char
            node=node.child[char]
         }
         return prefix;
        
    }
    // auto(word){
    //     let node=this.root
   
    //     for(let i=0;i<word.length;i++){
    //         let char=word[i]
    //         if(!node.child[char]){
    //             return [];
    //         }
           
    //         node=node.child[char]
    //     }
    //     let item=[]
    //     this.compleation(node,word,item)
    //     return item;
        
    // }
    // compleation(node,word,item){
    //     // console.log('this is word',node);
        
    //     if(node.isEnd){
    //         item.push(word)
    //     }

    //     for(let check in node.child){
    //         console.log(check);  
    //         this.compleation(node.child[check],word+check,item)
    //     }
    // }

    auto(word){
        let node = this.root
        for(let i =0;i<word.length;i++){
            let char=word[i]
            if(!node.child[char]){
                return []
            }
            node=node.child[char]
        }
        let items=[]
        this.completioin(node,word,items)
        return items
    }
    completioin(node,word,items){
       if(node.isEnd){
          items.push(word)
       }

       for(let char in node.child){
         this.completioin(node.child[char],word+char,items)
       }
    }
    suffix(word){
        for(let i=0;i<word.length;i++){
            let node = this.root;
            for(let j=i;j<word.length;j++){
                let char=word[j]
                if(!node.child[char]){
                    node.child[char]= new nodes()
                }
                node=node.child[char]
            }
        }
    }
  
}

let tr= new trie()
// tr.insert('thakiyudheen')
// tr.insert('thakinjnjn')
// tr.insert('thajudheen')
tr.suffix('thajudheen')
console.log(tr.search('thajudheen'));
console.log(tr.search1('thajudheen'));
// console.log(tr.longest('thajuksdfasfda'));
// console.log(tr.auto('tha'));
