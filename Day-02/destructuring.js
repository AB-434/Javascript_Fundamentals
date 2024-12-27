const nums = [1,2,3,4,5]
const [a,b,c] = [1,2,3]

const per = {
    age : 20,
    name : "Arnaw",
    city : "Siliguri",
    address : {
        state : "WB",
        country : "India"
    }
}
const {name, age, address : {state, country}} = per
console.log(name)
console.log(age)
console.log(state)