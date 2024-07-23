const nav = () => {
    let nav = document.querySelector('.import');

    nav.innerHTML = `
         <nav>
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <a href="index.html"><img src="./img/logo.png"></img></a>
                </div>
                <div class="right-part">
                    <div class="right">

                        <div class="navlinks">
                            <ul>
                                <li><a class="link" href="#">Home</a></li>
                                <li><a class="link" href="#explore-menu">Explore menu</a></li>
                                <li><a class="link" href="#food-display">Products</a></li>
                                <li>
                                    <a class="link" href="registration.html" id="loginuser">
                                        Log In
                                    </a>
                                </li>
                                <li>
                                    <a class="link" id="profile" onclick="addtoprofile()">
                                        <img class="basket-icon" alt="add to cart" src="./img/profile_icon.png"
                                            id="basket-icon"></img>
                                    </a>
                                </li>
                                <li>
                                    <div class="account">
                                        <a onclick="addtocart()" class="link">
                                            <img class="basket-icon" alt="add to cart" src="./img/bag_icon.png"
                                                id="basket-icon"></img>
                                            <p class="absolute">0</p>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a class="link" onclick="logoutUser()" id="logout">
                                        <img class="basket-icon" alt="add to cart" src="./img/logout_icon.png"></img>
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div class="rightbtn">
                    <i class="icon fa fa-bars"></i>
                </div>
            </div>
        </div>
    </nav>

    `;
}

nav();


function addtocart(){

    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        alert("User Not Valid, First Sign in")
        return;
    } else {
        location.href="./cart.html";
   }
}

function addtoprofile(){

    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        alert("User Not Valid, First Sign in")
        return;
    } else {
        location.href="./profile.html";
   }
}

function logoutUser(){
localStorage.removeItem("login");
localStorage.removeItem("cart");
window.location.href = "./registration.html";
}

function checkUserStatus() {
    let loginData = JSON.parse(localStorage.getItem("login"));

   if (!loginData) {
       document.querySelector("#logout").style.display = "none";
   } 
  else{
   document.querySelector("#loginuser").style.display = "none";
  }
}
checkUserStatus();