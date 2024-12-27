/**
 * String
 * 1. Immutable
 */

let str = "Batman"

console.log(str[0]) // Otherwise undefined if out of bounds

console.log(str.length)

let firstname = "Bruce"
let lastname = "Wayne"
/**let fullname = firstname + lastname*/
let fullname = firstname.concat(lastname)
console.log(fullname)

console.log(str.toUpperCase())
console.log(str.charAt(5))
//Slicing
console.log(str.slice(2))
console.log(str.slice(2,5))
console.log(str.slice(-5))
console.log(str.slice(-5,-1))

console.log(str.indexOf('a'))

num = "Bruce Wayne Batman"
console.log(num.split(" "))