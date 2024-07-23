async function displayData(category = null) {
  let res = await fetch("./js/data.json");
  let data = await res.json();

  let filteredData = category
    ? data.filter((item) => item.category === category)
    : data;

  localStorage.setItem("foodData", JSON.stringify(filteredData));

  const foodDisplayList = document.querySelector(".food-display-list");
  foodDisplayList.innerHTML = "";

  filteredData.forEach((item) => {
    const itemTemplate = `
            <div class="food-item">
                <div class="food-item-img-container" id="${item._id}">
                    <img class="food-item-img" src="${item.image}" alt="food-item1" />
                    <div class="food-item-counter">
                        <img src="./img/remove_icon_red.png" alt="" class="remove-item" data-id="${item._id}"/>
                        <p class="item-count">0</p>
                        <img src="./img/add_icon_green.png" alt="" class="add-item" data-id="${item._id}"/>
                    </div>
                </div>
                <div class="food-item-info">
                    <div class="food-item-name-rating">
                        <p class="item-name">${item.name}</p>
                        <img src="./img/rating_starts.png" alt="" />
                    </div>
                    <p class="food-item-desc">${item.description}</p>
                    <p class="food-item-price">$${item.price}</p>
                </div>
            </div>
        `;
    foodDisplayList.innerHTML += itemTemplate;
  });

  document.querySelectorAll(".add-item").forEach((addButton) => {
    addButton.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id");
      addToCart(itemId);
    });
  });

  document.querySelectorAll(".remove-item").forEach((removeButton) => {
    removeButton.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id");
      removeFromCart(itemId);
    });
  });

  updateCartDisplay();
}

function addToCart(itemId) {
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  cartItems[itemId] = cartItems[itemId] ? cartItems[itemId] + 1 : 1;
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateItemCount(itemId, cartItems[itemId]);
}

function removeFromCart(itemId) {
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  if (cartItems[itemId] > 0) {
    cartItems[itemId] -= 1;
  }
  if (cartItems[itemId] === 0) {
    delete cartItems[itemId];
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateItemCount(itemId, cartItems[itemId] || 0);
}

//count item display

function updateItemCount(itemId, count) {
  const basket = document.querySelector(".absolute");
  const itemCountElement = document.querySelector(
    `.food-item-img-container[id="${itemId}"] .item-count`
  );
  if (itemCountElement) {
    if (count > 0) {
      basket.textContent = count;
      itemCountElement.textContent = count;
      itemCountElement.style.display = "inline-block";
    } else {
      itemCountElement.style.display = "none";
    }
  }
}

function updateCartDisplay() {
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  Object.keys(cartItems).forEach((itemId) => {
    updateItemCount(itemId, cartItems[itemId]);
  });
}

document.querySelectorAll(".explore-menu-list-item").forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    displayData(category);
  });
});

displayData();

updateCartDisplay();

// validation 

function addtocart() {
  let loginData = JSON.parse(localStorage.getItem("login"));

  if (!loginData) {
    alert("User Not Valid, First Sign in");
    return;
  } else {
    location.href = "./cart.html";
  }
}

function addtoprofile() {
  let loginData = JSON.parse(localStorage.getItem("login"));

  if (!loginData) {
    alert("User Not Valid, First Sign in");
    return;
  } else {
    location.href = "./profile.html";
  }
}

function logoutUser() {
  localStorage.removeItem("login");
  localStorage.removeItem("cart");
  window.location.href = "./registration.html";
}
