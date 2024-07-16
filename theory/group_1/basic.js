var a = 5;
var b = 6;

y=21;  // without keyword declaration

var c= a+b;

var carName = "Volvo";
var carName;  // value print volvo can be redeclare


console.log(c);
console.log("my age"+ " " + y);

let myFirstfunction = () =>{
     a = 10;
     b= 20;
     return (console.log(a,b))
}

// reassign declaration 

let local = () =>{
    a = 50;
    b= 20;
    return (console.log(a,b))
}

a=5;
console.log(a);

myFirstfunction()
local()

