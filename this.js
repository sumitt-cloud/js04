// global - scope points to the window object
console.log(this)

function saymyage(){
    console.log(this.age) // points to the object where it belons to
}

var person ={
    fname : "sumit",
    age : 20,
    saymyage : saymyage
}

var person2 ={
    fname : "rumit",
    age : 30,
    saymyage : saymyage
}

person.saymyage()
person2.saymyage()

// fat arrow function do not bind their own "this"