class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size = size;
    }
    hash(key,value){
        let sum = 0;
       for(let i=0;i<key.length;i++){
         sum += key.charCodeAt(i);

       }
       return sum%this.size;
    }
    set(key,value){
        let index = this.hash(key)
        const  bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let match = this.table.find(el=>el[0]==key)
            if(match){
                match[1]=value
            }else{
                this.table[index].push([key,value])
            }
                
            
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const match = bucket.find(el=> el[0]==key)
            if(match){

                return match[1]
            }else{
                return 'not fond'
            }
        }
    }
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let match = bucket.find(el=> el[0]==key)
            if(match){
                bucket.splice(this.table[index].indexOf(match),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                
                console.log(i,'=>',this.table[i])
            }
        }
    }
}

const ht =new hashtable(50)

ht.set('name','Thakiyudheen')
// ht.remove('name')
console.log(ht.get('name'))
ht.display()