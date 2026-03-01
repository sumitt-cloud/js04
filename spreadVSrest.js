var obj ={
    name : "SUMIT",
    age : 20
}
var obj2 ={
    ...obj ,// spread prop of obj in obj2,
    city : "DELHI"
}
console.log(obj)
console.log(obj2)

var a =[2,3,4,5,6,7]
function add (a,b,c){
    console.log(a+b+c)
}
add(...a) // spread.

//REST

function pack (...num){
 console.log(num)
}
pack(1,2,3,4,5,6,7,8,9,0)  // return aray of arguments

