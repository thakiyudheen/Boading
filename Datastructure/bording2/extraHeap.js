class heap{
    constructor(){
        this.heap= []
    }

   
    buildHeap(arr){
        this.heap= arr
        for(let i=Math.floor((arr.length)/2)-1;i>=0;i--){
            this.heapifyDown(i,this.heap.length)
        }
    }
    heapifyDown(i,size){
        let left = i*2 + 1
        let right = i*2 + 2
        let small = i

        if(i>size && this.heap[small]>this.heap[left]){
            small = left
        }
        
        if(i>size && this.heap[small]>this.heap[right]){
            small = right
        }

        if(i!=small){
            [this.heap[small],this.heap[i]]=[this.heap[i],this.heap[small]]
            this.heapifyDown(small,this.heap.length)
        }


    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)

    }
    heapifyUp(i){
        let parent = Math.floor((i-2)/2)
        while(i>0 && this.heap[parent]>this.heap[i]){
            [this.heap[parent],this.heap[i]]=[this.heap[i],this.heap[parent]];
            i = parent ;
            parent = Math.floor((i-2)/2)

        }
    }

    delete(){
        if(!this.heap.length){
            return null
        }
        let item  = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return item
    }
}

// build heap ------------------------
let arr=[1,5,2,3,6,8]
const hp= new heap()
hp.buildHeap(arr)
console.log(hp.heap);

// insert Heap -----------------------
const hp1 = new heap()
hp1.insert(1)
hp1.insert(5)
hp1.insert(2)
hp1.insert(3)
hp1.insert(6)
hp1.insert(8)
// hp1.delete()
console.log(hp1.heap);



function k(){
    for(let i=0;i<hp1.length;i++){
         b()
    }
}

function b(data,d){
    for(let i =data;i<hp1.length;i++){
        if(data>hp1[i]){
           temp=data
        }
    }
}