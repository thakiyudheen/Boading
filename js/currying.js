function add(a){
    return function add(b){
        return function add(c){
            return a+b+c
        }
    }
}
console.log(add(1)(2)(3));
