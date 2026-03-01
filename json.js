var person ={
    fname:"sumit",
    Lname:"gupta"
}

var jsonobj = JSON.stringify(person) // js --> json obj
console.log(jsonobj)
 
var jsobj = JSON.parse(jsonobj) // json -->js obj
console.log(jsobj)