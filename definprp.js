var person ={
    fname:"sumit",
    Lname:"gupta",
    age:20
}

Object.defineProperty(person,"fname",{
    value :"rumit",
    enumerable:false
})

// fname key is not enuerable now loop not iterate on it.

var allProps = Object.getOwnPropertyDescriptors(person)
console.log(allProps)

for(let key in person){
    console.log(person[key])
}