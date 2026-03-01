// objects

// enumerable properties.

var person ={
    fname:"sumit",
    Lname:"gupta",
    age:20
}
// for(let key in person){
//     console.log(person[key])
// }

var allProps = Object.getOwnPropertyDescriptors(person);
console.log(allProps);

var c = Object.getOwnPropertyNames(person)
console.log(c)