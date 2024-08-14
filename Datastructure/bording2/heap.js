class heap{
    constructor(){
        this.heap=[]
    }
    insert(val){
        this.heap.push(val)
        this.heapifyUp(this.heap.length-1)
    }
    // heapifyUp(i){
    //     let parent= Math.floor((i-1)/2);
    //     while(i>0&&this.heap[i]<this.heap[parent]){
    //         [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]];
    //         i = parent
    //         parent=Math.floor((i-1)/2)
    //     }
    // }
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length/2);i>=0;i--){
            this.heapifyDown(i,this.heap.length)
        }
    }
    // heapifyDown(i,size){
    //     let left = 2*i+1
    //     let right = 2*i+2
    //     let small = i
    //     if(left<size&&this.heap[small]>this.heap[right]){
    //          small=right
    //     }
    //     if(right<size&&this.heap[small]>this.heap[left]){
    //         small= left
    //     }
    //     if(i!=small){
    //         [this.heap[i],this.heap[small]]=[this.heap[small],this.heap[i]]
    //         this.heapifyDown(small,this.heap.length)
    //     }
    // }
    delete(){
        if(!this.heap.length){
            return null
        }
        let item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return item 
    }
    heapifyUp(i){
       let parent= Math.floor((i-2)/2)
       while(i>0&&this.heap[parent]<this.heap[i]){
          [this.heap[parent],this.heap[i]]=[this.heap[i],this.heap[parent]]
          i=parent;
          parent=Math.floor((i-2)/2)
       }
    }
    heapifyDown(i,size){
        let left = 2*i+1
        let right = 2*i+2
        let small = i

        if(i<size&&this.heap[small]>this.heap[left]){
            small = left
        }
        if(i<size&&this.heap[small]>this.heap[right]){
            small = right
        }
        if(small!=i){
            [this.heap[small],this.heap[i]]=[this.heap[i],this.heap[small]]
            this.heapifyDown(small,this.heap.length-1)
        }
    }

}

const hp = new heap()
// hp.insert(13)
// hp.insert(10)
// hp.insert(11)
// hp.insert(12)
const arr=[3,2,5,7,1,9]
hp.buildHeap(arr)
// console.log(hp.delete());
console.log(hp.heap);
