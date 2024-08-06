const weak = new WeakMap()

var obj1={}
var obj2={}

weak.set(obj1,'thakiyudheen')
console.log(weak.get(obj1))


const weakset = new WeakSet()

var obj1={}
var obj2={}

weakset.add(obj1)
console.log(weakset.has(obj2))

