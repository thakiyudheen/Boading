// class heap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(arr){
//         this.heap=arr.slice()
//         for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
//             this.heapifyDown(i,this.heap.length)
//         }
//     }

//     heapifyDown(i,size){

//         let left = i*2+1
//         let right = i*2+2
//         let  small = i ;

//         if(left<size&&this.heap[small]>this.heap[left]){
//             small=left
//         }
//         if(right<size&&this.heap[small]>this.heap[right]){
//             small= right
//         }

//         if(i != small){
//             [this.heap[small],this.heap[i]] = [this.heap[i],this.heap[small]];
            
//             this.heapifyDown(small,size)
//         }

//     }
    
//     heapSort(arr){
//         this.buildHeap(arr)
//         for(let i=this.heap.length-1;i>0;i--){
//             [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]];
//             this.heapifyDown(0,i)
//         }
//         return this.heap
//     }
       
    
    

    
// }





// let hp = new heap()
// const arr=[4,1,7,4,5,0,8]
// console.log(hp.heapSort(arr));

class heap{
    constructor(){
        this.heap=[]
    }

    buildHeap(arr){
        this.heap=arr
        for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
            this.heapifyDown(i,this.heap.length)
        }

    }
    heapifyDown(i,size){
        let left = i*2+1 ;
        let right = i*2+2 ;
        let small = i ;

        if(left<size && this.heap[left]<this.heap[small]){
            small = left
        }

        if(right<size && this.heap[right]<this.heap[small]){
            small = right
        }
        
        if(i!=small){
            [this.heap[small],this.heap[i]]=[this.heap[i],this.heap[small]];
            this.heapifyDown(small,size)
        }
    }

    heapSort(arr){
        this.buildHeap(arr)

        for(let i=this.heap.length-1;i>0;i--){
            [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]];
            this.heapifyDown(0,i)
        }

        return this.heap
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
        parent =Math.floor((i-2)/2)

       }
    }

    delete(){
        let item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
    }
}


const hp = new heap()

// const arr=[4,1,7,4,5,0,8]
// console.log(hp.heapSort(arr));

hp.insert(12)
hp.insert(1)
hp.insert(14)

hp.insert(6)
hp.insert(2)
hp.insert(9)
console.log(hp.delete());
 console.log(hp.heap);
 