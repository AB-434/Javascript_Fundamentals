/**
 * Higher Order Functions
 */

function operation(operatorFn, a, b){
    return operatorFn(a,b)
}
function add(a,b){
    return a+b
}
let result = operation(add,7,8)
console.log(result)

function getGreetMethod(){
    return function(){
        console.log("Hello Students")
    }
}
let greetFn = getGreetMethod()
console.log(typeof greetFn)
greetFn()