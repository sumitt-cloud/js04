var person = {
    fName : "sumit",
    LName : "gupta"
}
// accesing.
console.log(person)
console.log(person.fName)
console.log(person.LName)
console.log(person["fName"])
console.log(person["LName"])

person.age = 20 // updating
console.log(person.age)
delete person.age // deleting
console.log(person)