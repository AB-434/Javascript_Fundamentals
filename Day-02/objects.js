const user = {
    name : "Arnaw",
    age : 20,
    city : "Siliguri"
}

console.log(user.name)
console.log(user['name'])

user.country = "India"
user["continent"] = "Asia"

console.log(user)

delete user.continent
delete user['country']

console.log(user)

let person = {
    name : "Arnaw",
    age : 20,
    address : {
        city : "Siliguri",
        state : "West Bengal",
        country : "India"
    }
}
for(let key in person){
    console.log(key, "=>", person[key])
}
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


// Cloning
const new_person = Object.assign({}, person)
const new_person_1 = Object.assign({}, person, {role : "Developer"})
