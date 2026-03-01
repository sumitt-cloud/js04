
var person ={
    fname:"sumit",
    Lname:"gupta",
    age:20
}

var key = Object.keys(person)
console.log(key)

var value = Object.values(person)
console.log(value)

var entries = Object.entries(person)
console.log(entries)

var fromentries = Object.fromEntries(key)
console.log(fromentries)