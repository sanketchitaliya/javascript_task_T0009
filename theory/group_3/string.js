let text1 = "ABCDE";
console.log(text1.length);

var at_p = "HELLO WORLD";
console.log(at_p.charAt(0));
console.log(at_p.at(1));
console.log(at_p.charCodeAt(2));

// slice(start, end)

let slice = "Apple, Banana, Kiwi";

console.log(slice.slice(7, 13));
console.log(slice.slice(-12, -6));
console.log(slice.substring(7,13));
console.log(slice.substr(7, 6));

// string convert to uppercase and lowercase

console.log(slice.toUpperCase());
console.log(slice.toLowerCase());


let con1 = "Hello";
let con2 = "World";
let con3 = con1.concat(" ", con2);
console.log(con3);

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);

let jsva = "javaScript  ";
console.log(jsva.substring(4,10));

// lastindex of and indexof example

console.log(jsva.lastIndexOf("ript"));
console.log(jsva.indexOf("vaS"));

console.log(jsva.replace("Script","Tutorial"));
console.log(jsva);

// number to string convert

let a = 15;
console.log(a.toString())

// includes

console.log(jsva.includes("vaS"));   // true or false value return


// string to array convert 

a = "1,2,3,4,5,6";

console.log(a.split(","));


// value of method 

toy = "  bat and Ball  ";

console.log(toy.valueOf());

// trim method


console.log(toy.trim());

// match method in string

let intro ="my name is sanket your name? and name is very fine";

console.log(intro.match(/name/g));  // output create a new array 

console.log(intro.match(/name/gi));  // A global case insensitive search

console.log(intro.match("name")); // onetime print name 









