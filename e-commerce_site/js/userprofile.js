let username=document.getElementById("username");
let email=document.getElementById("email");
let address=document.getElementById("lname");
let logout=document.getElementById("logout");
let pureVedaLoginUser = JSON.parse(localStorage.getItem("login"));

username.innerText=`Name : ${pureVedaLoginUser.name}`;
email.textContent=`Email : ${pureVedaLoginUser.lname}`;
address.textContent=`Address : ${pureVedaLoginUser.email}`;

function logoutUser(){
    loginDetail=null;
    localStorage.setItem("pureVedaLoginUser", JSON.stringify(loginDetail));
    pureVedaCart =[];
    localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
}
logout.addEventListener("click",logoutUser);