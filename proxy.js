const book ={
    title : 'log',
    year:2002 
}

const handler = ()=>{
    get :(target,pros)=>{
       return`this is ${pros}: ${target.pros}`
    }
} 


const myProxy = new Proxy(book,handler)

console.log(myProxy.title)