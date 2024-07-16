let fruits ={
    name:"banana",
    price:20,
    quality:"bad"
}

fruits.owner = "hero";
console.log(fruits);

let array = ["banan","mango","graps","orange","kiwi"]

console.log(array);


console.log(array.map((num)=>num+"22"));

console.log(array.filter((num)=>num=="orange"));



console.log(array.length);


//let c= array.push("gggg");

console.log(array.push("gggg"));
console.log(array.pop());


console.log(array);

console.log(array.indexOf("orange",3));

let array1 = [1,2,3,4,5]



console.log(array1.includes(6));
// output only declare true or false

console.log(array1.indexOf(2));
// output 1 its declare index of element

console.log(array1.map((num)=>Math.pow(num,num)));
// output in array [1,4,27,256,3125]

array2 = [50,40,30,50,80,9];

console.log(array2.indexOf(50,1));  // (elment,startsearchof index) 

console.log(array2.filter(filter));
console.log(array2.filter(num => num >=50));
console.log(array2); // map and filter always create new array 

console.log(array2.every(num => num >=50));
console.log(array2.some(num => num >=50));


function filter(num){

    return num>=10;

}

console.log(array2.fill(20));

console.log(array1);

array4=[1,11,22,33,44,55,66];

console.log(array4.push(77));

console.log(array4);


// reduce method 
// accu do  value store 

reduce_array = [5,6,7,8]

let rr = reduce_array.reduce((accu,num)=>  {
    //debugger;
    return accu + num;
})

console.log(rr);


// reduceright method

let rrr = reduce_array.reduceRight((accu,num,index,arry)=>  {
    //debugger;
    return accu - num;
},100)

// , after 10 do not use out will 

console.log(rrr);



// find and findindex 

obj = [{n:"sanket",a:"20"},{n:"yash",a:"30"},{n:"mihir",a:"40"}]

c_arr= obj.find((v,i)=> {

     return v.n==="sanket";

})
console.log(c_arr);

i_arr= obj.findIndex((v,i)=> {

    return v.a==="40";

})
console.log(i_arr);


// slice and splice 

sl = [2,12,22,33,55,48];

sl_o = sl.slice(1,4);

console.log(sl_o);

console.log(sl);

console.log(sl.splice(1,"dd"));

console.log(sl.reverse());
console.log(sl);


// array from and join

str = "123456";
 
console.log(Array.from(str,(num)=>Number(num)));  // function called array value string to number and array from function always string value store in array

console.log(Array.of("1",2,"3",4,5)); // differnt element to merge and create array

console.log(Array.isArray(str));


