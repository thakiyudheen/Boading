function* ok() {
    let count =2;
    while(true){
        
            yield count
            count=count+2
    }
}

let oks = ok()

for(let i=0;i<10;i++){
    if(i%2==0){

        console.log(oks.next());
    }
}