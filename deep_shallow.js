//shallow copy......

var person1 ={
    fname:"sumit",
    Lname:"gupta"
}

// var person2 = person1

// person2.age=20

// console.log(person1)
// console.log(person2)


//deep copy 

var person2 = JSON.parse(JSON.stringify(person1))
person2.age=20
console.log(person2)
console.log(person1)