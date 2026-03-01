// nesting
var person = {
    fname : "sumit",
    city : {
        name : "delhi",
        location : "north"
    }
}
console.log(person.city.location)

var person1 ={
    fname : "sumit",
    lname : "gupta",
    saymyname : function(){
        console.log(person1.fname+ " "+person1.lname)
    }
}
person1.saymyname()