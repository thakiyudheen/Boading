class graph {
    constructor() {
        this.adList = {}
    }

    addVertex(vertex) {
        if (!this.adList[vertex]) {
            this.adList[vertex] = new Set()
        }
    }
    addEdge(v1, v2) {
        if (!this.adList[v1]) {
            this.addVertex(v1)
        }
        if (!this.adList[v2]) {
            this.addVertex(v2)
        }
        this.adList[v1].add(v2)
        this.adList[v2].add(v1)
    }

    print() {
        for (let char in this.adList) {
            console.log(char, '=>', this.adList[char]);

        }
    }

    // bfs(start) {
    //     if(!this.adList[start]){
    //         return null
    //     }
    //     let queue = []
    //     let visited = {}
    //     queue.push(start)
    //     visited[start] = true
    //     while (queue.length>0) {
    //         let current = queue.shift()
    //         console.log(current);
    //         for (let neighbour of this.adList[current]) {
    //             if (!visited[neighbour]) {
    //                 queue.push(neighbour)
    //                 visited[neighbour] = true
    //             }
    //         }

    //     }

    // }

    // dfs(start) {
    //     let stack = []
    //     let visited = {}
    //     stack.push(start)
    //     while (stack.length) {
    //         let current = stack.pop()
    //         if (!visited[current]) {
    //             console.log(current);
    //             visited[current] = true
    //             for (let neighbor of this.adList[current]) {
    //                 stack.push(neighbor)
    //             }

    //         }
    //     }
    // }
    bfs(start) {
        if (!this.adList[start]) {
            return null
        }

        let visited = {}
        let queue = []
        queue.push(start)
        visited[start] = true
        while (queue.length) {
            let current = queue.shift()
            console.log(current);

            for (let neighbor of this.adList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            }

        }
    }

    dfs(start) {
        let visited = {}
        let stack = []
        stack.push(start)
        while (stack.length) {
            let current = stack.pop()

            if (!visited[current]) {
                console.log(current);
                visited[current] = true
                for (let neighbor of this.adList[current]) {
                    stack.push(neighbor)
                }


            }
        }

    }

    // cycleDetected(start){
    //     let visited ={}
    //     let queue =[]
    //     let parent ={}

    //     queue.push(start)
    //     visited[start]=true
    //     parent[start]= -1

    //     while(queue.length){
    //         let current = queue.shift()
    //         for(let neighbor of this.adList[current]){
    //             if(!visited[neighbor]){
    //                 visited[neighbor]=true
    //                 queue.push(neighbor)
    //                 parent[neighbor]= current
    //             }else if( parent[current]!==neighbor){
    //                 return true
    //             }
    //         }
    //     }
    //     return false

    // }
    isCyclic(start) {
       
        let queue = []
        let visited = {}
        let parent = {}
        queue.push(start)
        visited[start] = true
        parent[start] = -1;

        while (queue.length) {
            let current = queue.shift()
            for (let neighbor of this.adList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                    parent[neighbor] = current
                } else if (parent[current] !== neighbor) {
                    return true
                }


            }
        }

        return false

    }

    degree(vertex) {
        return this.adList[vertex].size()
    }






}


let gr = new graph()

gr.addVertex('a')
gr.addVertex('b')
gr.addVertex('c')
// gr.addVertex('d')

gr.addEdge('a', 'b')
gr.addEdge('b', 'c')
gr.addEdge('c', 'a')

gr.print()


// gr.bfs('a')
gr.dfs('a')
console.log(gr.isCyclic('a'));


