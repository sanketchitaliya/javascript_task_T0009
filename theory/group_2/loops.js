// simple for loop running

let x = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      x+= j;
    }
    x+="\n";
  }

 console.log(x);



 for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if(i==2){break;}
      x+= "*";
    }
    x+="\n";
  }

 console.log(x);



 for(let i = 0; i < 5; i++) { 
    for(let j = 0; j < 5; j++) { 
      if(i === 0 || i === 5 - 1) {
        x += "*";
      }
      else {
        if(j === 0 || j === 5 - 1) {
          x += "*";
        }
        else {
          x += " ";
        }
      }
    }
    // newline after each row
    x += "\n";
  }
  console.log(x);


  // for in loop 

  const person = {fname:"sanket", lname:"chitalia", age:21};

  let value = ""
   
  for(let name in person){

     value += person[name] + "  "

  }
  console.log(value);



  const number = [1,2,3,4,5];

  let getnum = "";

  for(let num in number){

    getnum += number[num] + "\n";

 }
 console.log(getnum);


 // foreach loop

let foreach = "";
 number.forEach((value) => {
    foreach+=value + "\n"
});

console.log(foreach);


// while loop

let f= 0;
let g="";

while(f<5){
    g+="while" + f +"\n";
    f++;
}
console.log(g);


do{
    g+="do while"+f+"\n";
    f++;
}
while(f<5);
console.log(g);