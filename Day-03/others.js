/**
 * forEach Method
 */

players = ["Sachin","Dhoni","Rohit","Virat"]
players.forEach((player)=>console.log(player))

/**
 * map
 */

let arr = [1,2,3,4,5]
cube_array = arr.map(num => num**3)
console.log(cube_array)

/**
 * filter
 */

let arr1 = [1,2,3,4,5]
let even_array = arr1.filter((num) => num%2==0)
console.log(even_array)

/**
 * reduce
 */

const sum = [1,2,3,4,5,6,7,8,9,10].reduce((curr,next)=> curr+next)
console.log(sum)