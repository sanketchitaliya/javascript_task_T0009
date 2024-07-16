let products = document.getElementById("products");
let carts = document.getElementById("carts");
let qutoe = document.getElementById("qutoe");

function fetchDataFromAPI(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function fetchMultipleAPIs(apiUrls) {
  const promises = apiUrls.map((url) => fetchDataFromAPI(url));
  return Promise.all(promises);
}

const apiUrls = [
  "https://dummyjson.com/products",
  "https://dummyjson.com/carts",
  "https://dummyjson.com/quotes",
];

fetchMultipleAPIs(apiUrls)
  .then((results) => {
    setProduct(results);
    setCart(results);
    setQuote(results);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

let getdata = JSON.parse(localStorage.getItem("results"));

function setProduct(getdata) {
  let products_item = getdata[0].products;

  products_item.forEach((product) => {
    if (product.id < 5) {
      const div = document.createElement("div");
      div.setAttribute("class", "products_inner");
      div.innerHTML = `<img src="${product.images}" alt="product" class="productImage">
                            <p>${product.title}</p>
                            <h3 >Price:${product.price}$</h3>
                            `;
      products.appendChild(div);
    }
  });
}

function setCart(getdata) {
  let carts_item = getdata[1].carts;
  carts_item.forEach((product) => {
    if (product.id < 5) {
      const div = document.createElement("div");
      div.setAttribute("class", "cartproduct");
      div.innerHTML = `<p>Discount:${product.discountedTotal}</p>
                            <h3>Price:${product.total}</h3>
                            `;
      carts.appendChild(div);
    }
  });
}

function setQuote(getdata) {
  let quote_item = getdata[2].quotes;
  quote_item.forEach((product) => {
    if (product.id < 5) {
      const div = document.createElement("div");
      div.setAttribute("class", "quote_inner");
      div.innerHTML = `<p>${product.author}</p>
                            <label>${product.quote}</label>
                            `;
      qutoe.appendChild(div);
    }
  });
}
