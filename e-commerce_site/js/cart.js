function displayCartItems() {

    const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    const foodDisplayList = document.getElementById("food-display-list");
    const foodData = JSON.parse(localStorage.getItem('foodData')) || []; 

    foodDisplayList.innerHTML = '';

    Object.keys(cartItems).forEach(itemId => {
        const item = foodData.find(dataItem => dataItem._id === itemId);

        if (item) {
            const itemElement = document.createElement('div');
            itemElement.classList.add('food-item');
            itemElement.innerHTML = `
                <div class="food-item-img-container" id="${item._id}">
                    <img class="food-item-img" src="${item.image}" alt="food-item1" />
                    <div class="food-item-counter">
                        <img src="./img/remove_icon_red.png" alt="" class="remove-item-btn" data-id="${item._id}"/>
                        <p class="item-count">${cartItems[item._id]}</p>
                        <img src="./img/add_icon_green.png" alt="" class="add-item-btn" data-id="${item._id}"/>
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
            `;
            foodDisplayList.appendChild(itemElement);

            
            itemElement.querySelector('.remove-item-btn').addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                removeFromCart(itemId);
                displayCartItems(); 
            });

           
            itemElement.querySelector('.add-item-btn').addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                addToCart(itemId);
                displayCartItems(); 
            });
        }
    });
}

// addto cart

function addToCart(itemId) {
    let cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};

    cartItems[itemId] = cartItems[itemId] ? cartItems[itemId] + 1 : 1;

    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// remove cart

function removeFromCart(itemId) {
    let cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};

    if (cartItems[itemId] > 1) {
        cartItems[itemId] -= 1;
    } else {
        delete cartItems[itemId];
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
}


displayCartItems();
