// const book ={
//     title : 'log',
//     year:2002 
// }

// const handler = ()=>{
//     get :(target,pros)=>{
//        return`this is ${pros}: ${target.pros}`
//     }
// } 


// const myProxy = new Proxy(book,handler)

// console.log(myProxy.title)

// const target = {
//     message: 'Hello, world!'
//   };
  
//   const handler = {
//     get(target, prop, receiver) {
//       console.log(`Getting property: ${prop}`);
//       // Use Reflect to get the default behavior
//       return Reflect.get(target,prop);
//     },
//     set(target, prop, value, receiver) {
//       console.log(`Setting property: ${prop} to ${value}`);
//       // Use Reflect to set the default behavior
//       return Reflect.set(target,value);
//     }
//   };
  
//   const proxy = new Proxy(target, handler);
  

//   console.log(proxy); 
  
//   proxy.message = 'Hello, Proxy!'; // Console: Setting property: message to Hello, Proxy!
//   console.log(proxy); 


const book={
  name:'thakiyu',
  age :23
}

const handler = {
    get:(target,pros)=>{
      console.log('this is prototype',target.name)
      return Reflect.get(target,pros)
    }
}

const proxy=new Proxy(book,handler)

console.log(proxy.name);


var a = structuredClone(book)
console.log('this',a);
var b = JSON.parse(JSON.stringify(book))
console.log('this1',b);