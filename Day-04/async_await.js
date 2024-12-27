async function getMessage(){
    return "Hello Students"
}
console.log(getMessage())
getMessage().then(result => console.log(result))

async function printHello(){
    console.log("First Line")
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Students")
        },3000)
    })
    let result = await data
    console.log(result)
    console.log("Last Line")
}
printHello()
console.log("Hello from end")