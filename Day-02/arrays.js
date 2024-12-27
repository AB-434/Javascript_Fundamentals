arr = [1,3,5,7,9]
console.log(typeof arr) //Object

arr1 = new Array() //Creates empty array

// Indexing same as string
// No negative indexing
// Arrays are mutable

nums = [3,4,5,6,7]
nums.push(8,9)
console.log(nums)

nums.unshift(999)
console.log(nums)

console.log(nums.pop())
console.log(nums.shift())
console.log(nums)

let a1 = [1,2,3]
let a2 = [4,5]
let a3 = a1.concat(a2)

console.log(nums.length)

char_array = ['A','R','N','A','W']
console.log(char_array.join())
console.log(char_array.join(""))

console.log(char_array.toString())

//Slicing same as strings but array does not change

//Splicing

let numbers = [1,2,3,4]
let removed = numbers.splice(2,3)
console.log(removed)
console.log(numbers)

//Sorting
let x = [2,6,3,9,4]
x.sort((a,b) => b-a) //Descending
console.log(x)