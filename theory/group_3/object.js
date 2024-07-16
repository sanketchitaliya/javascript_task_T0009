let students ={
    fname: 'sanket',
    lname:'chitaliya',
   
    age:21
}

console.log(students);
console.log(students.fname +" "+ students.lname +" "+students.age);

keys = Object.keys(students);

console.log(keys);

keys = Object.values(students);

console.log(keys);
console.log(keys);

keys = Object.entries(students);

console.log(keys);

let employes ={
    fname: 'ram',
    lname:'chitaliya',
    jj:55,
    study:44,
    age:21
}

keys = Object.assign(students,employes);
console.log(students); 

// whenever call assign object after key and value are changes in assign object


// freeze object how to work explained hear

let a = {
    product : 'bat',
    price: 99,
    quality : "bad"
}

Object.freeze(a);

console.log(a.product+" "+a.price)

 a.price=100;
 console.log(a);
