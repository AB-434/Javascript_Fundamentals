function outerFn(){
    let outerVar = "Hii"
    function innerFn(){
        console.log(outerVar)
    }
    return innerFn
}
let fn = outerFn()
fn()

function customerCount(){
    let count = 0
    return function(){
        count++
        console.log(count)
    }
}
let counter = customerCount()
counter()
counter()
counter()