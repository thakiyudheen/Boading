class graph {
    constructor(){
        this.adlist={}
    }

    addVertex(value){
        if(!this.adlist[value]){
            this.adlist[value]= new Set()
        }
    }
    addEdges(v1,v2){
        if(!this.adlist[v1]){
            this.addVertex(v1)
        }
        if(!this.adlist[v2]){
            this.addVertex(v2)
        }
        this.adlist[v1].add(v2)
        this.adlist[v2].add(v1)
    }
    removeVer(v1,v2){
        this.adlist[v1].delete(v2)
        this.adlist[v2].delete(v1)
    }
    removeEdge(v1){
        for(let v2 in this.adlist){
            this.removeVer(v2,v1)
        }
    }
    print(){
       for(let v1 in this.adlist){
        console.log(v1,'=>>', this.adlist[v1]);
        
       }
    }
    degree(v1){
      return this.adlist[v1].size
    }
    bfs(start){
        if(!this.adlist[start]){
            return null
        }
        let visited = {}
        let queue=[]
        queue.push(start)
        visited[start]=true
        while(queue.length){
            let current = queue.shift()
            console.log(current);
            for(let neighbor of this.adlist[current]){
                if(!visited[neighbor]){
                    queue.push(neighbor)
                    visited[neighbor]=true
                }
            }
            
        }
    }

    dfs(start){
       
        let visited={}
        let stack=[]
        stack.push(start)
        while(stack.length){
            let current= stack.pop()
            if(!visited[current]){
                console.log(current);
                visited[current]=true
                for(let neighbor of this.adlist[current]){
                    stack.push(neighbor)
                }
                
            }
        }
    }
   
  bfss(start){
    if(!this.adlist[start]){
        return null
    }
    let visited={}
    let queue=[]
    queue.push(start)
    visited[start]=true
    while(queue.length){
        let current= queue.shift()
        console.log(current);
        for(let neighbor of this.adlist[current]){
            if(!visited[neighbor]){
                visited[neighbor]=true
                queue.push(neighbor)
            }
        }
        
    }
  }
  dfss(start){
    let visited={}
    let stack=[]
    stack.push(start)
    while(stack.length){
        let current= stack.pop()
        while(!visited[current]){
            console.log(current);
            visited[current]=true
            for(let neighbor of this.adlist[current]){
                stack.push(neighbor)
            }
        }
    }
}
bfssss(start){
    if(!this.adlist[start]){
        return null
    }
    let queue=[]
    let visited={}
    queue.push(start)
    while(queue.length>0){
        let current= queue.shift()
        console.log(current);
        for(let neighbor of this.adlist[current]){
            if(!visited[neighbor]){
                visited[neighbor]=true
                queue.push(neighbor)  
            }
        }
        
    }
}
dfssss(start){
    let visited={}
    let stack =[]
    stack.push(start)
    while(stack.length){
        let current= stack.pop()
        if(!visited[current]){
            console.log(current);
            visited[current]=true
            for(let neighbor of this.adlist[current]){
                stack.push(neighbor)
            }
            
        }
    }
}

}

const gr= new graph()
gr.addVertex('a')
gr.addVertex('b')
gr.addVertex('c')
gr.addEdges('a','b')
gr.addEdges('b','c')
gr.addEdges('c','a')
gr.print()
gr.dfssss('a')
// gr.dfs('a')
