const SimranPromise = new Promise((resolve, reject)=>{
    let parentDecision = false
    if(parentDecision){
        resolve("Yayy")
    }
    else{
        reject("Nooo")
    }
});
SimranPromise.then((msg)=>{
    console.log("Simran's Message :", msg)
    console.log("Done")
}).catch((msg)=>{
    console.log("Simran's Message :", msg)
    console.log("Something new now")
});

const f1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("I am in 1")
        }
        else{
            reject("Sorry due to personal reasons")
        }
    },3000)
})
const f2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("I am in 2")
        }
        else{
            reject("Sorry due to medical reasons")
        }
    },2000)
})
const f3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("I am in 3")
        }
        else{
            reject("Sorry due to study reasons")
        }
    },1000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
    console.log(msg)
    console.log("We are going")
}).catch((msg)=>{
    console.log(msg)
    console.log("Plan cancelled")
})
//any