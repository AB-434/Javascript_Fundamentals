/**
 * Global Scope
 */

var name = "Arnaw"
console.log(name)

function func(){
    console.log(name)
}
func()

/**
 * Local/Function Scope
 */

/**
 * Block Scope
 */

{
    var num = 35
    console.log(num)
    // var is not block scope
}