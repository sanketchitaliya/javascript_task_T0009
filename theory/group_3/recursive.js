// const func = (num, output = []) => {
//     if (output.length === num) {
//         return output;
//     }
//     else if (output.length === 0) {
//         output.push(0)
//     }
//     else if (output.length === 1) {
//         output.push(1)
//     }
//     else {
//         output.push(output[output.length - 2] + output[output.length - 1])
//     }
//     return func(num, output);
// }
// let result = func(10)
// console.log(result);


function sum(n){

    if(n==0){
        return 0;
    }else{
    return  n + sum(n-1);
        //console.log(y);
    }

}
sum(5);
console.log(sum(5));


// a=0;b=1;c=0;array=[]
// function rec(n){
//   if(n==0){
//     return 0;
//   }else{
//     (array.push(a));
//     c=a+b;
//     a=b;
//     b=c;
//     rec(n-1);
//     return array;
//   }
// }

// console.log(rec(10));


// function rec(n) {
//     let a = 0;
//     let b = 1;
//     let c = 0;
//     let array = [];
  
//     function innerRec(n) {
//       if (n == 0) {
//         return 0;
//       } else {
//         array.push(a);
//         c = a + b;
//         a = b;
//         b = c;
//         innerRec(n - 1);
//         return array;
//       }
//     }
  
//     return innerRec(n);
//   }
  
//   console.log(rec(10));.



function rec(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    let array = [];
  
    if (n == 0) {
      return array;
    } else {

      array.push(a);
      c = a + b;
      a = b;
      b = c;
      rec(n - 1);
      return array;
    }
  }
  
  console.log(rec(10));


  function cs(n){
    if(n<=0){
        return [];
    }
    if(n<=1){
        return[1];
    }
    if(n==2){
        return[0,1];
    }
    else{
        b=cs(n-1);
        b.push(b[b.length-1]+b[b.length-2]);
        return b;
    }
  }
  console.log(cs(10));