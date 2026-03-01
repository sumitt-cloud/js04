var person ={
    fname:"sumit",
    Lname:"gupta",
    age:20
}

Object.freeze(person) // prevent creting,updatind ,delete

person.fname = "riumit"
person.height = 6
delete person.Lname
console.log(person)

Object.seal(person)  // only upadting allowed

person.fname = "riumit"
person.height = 6
delete person.Lname
console.log(person)