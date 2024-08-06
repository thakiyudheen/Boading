function Datas(name,age){
    this.name = name;
    this.age = age;
}     


Datas.prototype.getData = function (){
    console.log(`name:${this.name},\n age:${this.age} `)
}

const data = new Datas('thakiyudheen',20)
data.getData()

