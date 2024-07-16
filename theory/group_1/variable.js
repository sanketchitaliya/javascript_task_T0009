// let and const

const bat_price = 1500;
const ball_price = 500;
let total =  bat_price + ball_price ;

console.log(total);

// hear first two variable declare using const and output var declare let


const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

console.log(pi+" "+person+" "+answer);



let person1 = "John Doe",
brand = "Volvo",
price = 200;

console.log(person1+" "+brand+" "+price);

// hear one time let declare after two automatically using


let brand1 = "audi";
//let brand1;  

//cannot redeclare with let or const




//  var using variable 
var  x = 10;
// Here x is 10

{  
var x = 2;
// Here x is 2
}

// Here x is 2
console.log(x);




let y = 10;
// Here y is 10

{
let y = 2;
// Here y is 2
}
console.log(y);
// Here y is 10



var z = 2;   // Allowed
//let z = 3;   Not allowed

{
let z = 2;   // Allowed
//let z = 3;   Not allowed
}

{
let z = 2;   // Allowed
// var z = 3;    Not allowed
}
console.log(z);



//brand2 = "Saab";
//let brand2 = "Volvo";
// Using a let variable before it is declared will result in a ReferenceError


//const PI;    must be value added
//PI = 3.14159265359;
//incorrect


// You can create a constant array:
const cat = ["Saab", "Volvo", "BMW"];

// You can change an element:
cat[0] = "Toyota";

// You can add an element:
cat.push("Audi");

console.log(cat);

//     const cat = ["Saab", "Volvo", "BMW"];

//     cat = ["Toyota", "Volvo", "Audi"];    // ERROR




// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

console.log(car);


// const car = {type:"Fiat", model:"500", color:"white"};

// car = {type:"Volvo", model:"EX60", color:"red"};     ERROR




const sanket = 1200;   // Allowed
//let z = 3;   Not allowed

{
const sanket = 2;   // Allowed
//let z = 3;   Not allowed
}

{
const sanket = 200;
console.log(sanket);   // Allowed
// var z = 3;    Not allowed
}
console.log(sanket);


function sanket(){
    let a = 10;
    function rr(){
        let b = 20;
        console.log(a,b);
    }
    rr()
 }
 sanket()