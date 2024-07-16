async function cs1() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  cs1();


// arrow function use 

const cs = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  
  cs();


  function asy_time() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("how are you");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asy_time();
    console.log(data);
}

display();
 