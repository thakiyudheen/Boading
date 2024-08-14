class graph{
    constructor(){
        this.adlist={}
    }

    insert(ver){
        if(!this.adlist[ver]){
            this.adlist[ver]=new Map()
        }
    }
    addEdge(v1,v2,weight){
        if(this.adlist[v1]){
            this.insert(v1)
        }
        if(this.adlist[v2]){
            this.insert(v2)
        }

        this.adlist[v1].set(v2,weight)
        this.adlist[v2].set(v1,weight)
    }
    print(){
        for(let ver in this.adlist){
            console.log(ver,'=>',this.adlist[ver]);
            
        }
    }
}

const gr= new graph()
gr.insert('a')
gr.insert('b')
gr.insert('c')
gr.addEdge('a','b',1)
gr.addEdge('b','c',3)
gr.addEdge('c','a',2)

gr.print()