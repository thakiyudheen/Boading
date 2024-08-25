async function open(){
    const promise = new Promise((resolve ,reject)=>{
        resolve(10)
    })
    return promise
}
async function open1(){
    const promise = new Promise((resolve ,reject)=>{
        resolve(11)
    })
    return promise
}


async function run (){
    
    const last = await Promise.all([open(),open1()])
    console.log(last);
    
}

run()
