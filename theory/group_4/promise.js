function prom(complte){
    return new Promise((resolve,reject)=>{
       console.log("please wait fetching data from database and server");
       setTimeout(()=>{
        if(complte){
            resolve("i am successful");
        }else{
            reject("i am failed");
        }
       },5000);
    });
}

let outfulfilment = (result) => {
    console.log (result);
}


let onrejection = (error) => {
    console.log (error);
}

prom(true).then(outfulfilment).catch(onrejection);

// you do not two function create then() and catch() in arrow function declare