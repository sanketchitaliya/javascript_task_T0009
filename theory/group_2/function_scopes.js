function sanket(){
    let a=10;
    let b =20;
    function ff(){
        let c=30;
      console.log(a,b,c)  // output valid 
    }
    ff()
   // console.log(a,b,c)  error because scope variable not use
}
sanket();


const sum = function(){
     let a = 10;
     let b= 20;
     let c =a+b;
     console.log(c);
}

sum()

const div = () => {
    let a = 10;
    let b= 20;
    let c =a-b;
    console.log(c);
}

div();

const mul = (a,b) => {

    let c =a*b;
    return c;
}

mul(5,6);

let store = mul(5,6);

console.log(store);