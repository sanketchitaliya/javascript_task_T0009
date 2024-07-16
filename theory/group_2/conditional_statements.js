let hour = new Date().getHours();
let greeting;

if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

// if else condition

let age = 18;
let suggest;

if (age >= 18) {
  suggest = "you are eligible for vote";
} else {
  suggest = "you are not eligible for vote";
}

console.log(suggest);

// else if condition

let salary = 25000;

if (salary <= 10000) {
  console.log("you are not qualify");
} else if (salary >= 20000 && salary <= 30000) {
  console.log("your probation period complete");
} else {
  console.log("you are employee");
}

// switch statement

let marks = 96;

switch (marks) {
  case marks >= 90:
    console.log("A1 gread");
    break;
  case marks >= 80:
    console.log("A2 hread");
    break;
  case marks >= 70 :
    console.log("A3 hread");
    break;
  case marks >= 60:
    console.log("A4 hread");
    break;
  default:
    console.log("you are failed");
}


switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
console.log(text);
