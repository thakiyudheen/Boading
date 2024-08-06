const person1={
    name:'Thakiyudheen',
    age:20,
    getAlldata:function(greet){
        console.log('The age is '+this.age,this.name + greet )
    }
}


const person2={
    name:'nahyan',
    age:24
}


// person1.getAlldata.call(person2,'hello')
// person1.getAlldata.apply(person2,['hello'])
const binds = person1.getAlldata.bind(person2,'hello')
binds()



