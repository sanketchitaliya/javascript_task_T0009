let a;       // Now x is undefined
console.log(a);


b = 5;       // Now b is a Number
console.log(typeof(b));

c =  "John";  // Now c is a String

console.log(typeof(c));


let d = 16 + "sanket";
console.log(d);

console.log(typeof(d));

let e = "sanket" + 16;
console.log(e);

console.log(typeof(e));


let f = 16 + 4 + "sanket";
console.log(f);

console.log(typeof(f));
// hear javascript run left to right so output 20Volvo

let g = "snaket" + 16 + 4;
console.log(g);

console.log(typeof(g));



let x = 5;
let y = 5;
let z = 6;
let con = (x == y)       // Returns true
console.log(con);

console.log(typeof(con));



// Single quote inside double quotes:
let answer1 = "It's alright";
console.log(answer1);

// Single quotes inside double quotes:
let answer2 = "He is called 'sanket'";
console.log(answer2);

// Double quotes inside single quotes:
let answer3 = 'He is called "sanket"';
console.log(answer3);
