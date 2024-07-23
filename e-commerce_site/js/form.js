const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");

const loginFormElement = document.getElementById("loginFormElement");
const registerFormElement = document.getElementById("registerFormElement");
const forgotPasswordFormElement = document.getElementById(
  "forgotPasswordFormElement"
);

function popupForm() {
  const showLogin = document.getElementById("showLogin");
  const showRegister = document.getElementById("showRegister");
  const showForgotPassword = document.getElementById("showForgotPassword");
  const showRegisterFromForgot = document.getElementById(
    "showRegisterFromForgot"
  );
  const showLoginFromForgot = document.getElementById("showLoginFromForgot");

  function showForm(formToShow) {
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    forgotPasswordForm.style.display = "none";

    formToShow.style.display = "block";
  }

  showLogin.addEventListener("click", function (event) {
    event.preventDefault();
    showForm(loginForm);
  });

  showRegister.addEventListener("click", function (event) {
    event.preventDefault();
    showForm(registerForm);
  });

  showForgotPassword.addEventListener("click", function (event) {
    event.preventDefault();
    showForm(forgotPasswordForm);
  });

  showRegisterFromForgot.addEventListener("click", function (event) {
    event.preventDefault();
    showForm(registerForm);
  });

  showLoginFromForgot.addEventListener("click", function (event) {
    event.preventDefault();
    showForm(loginForm);
  });
  showForm(loginForm);
}
popupForm();

// regustration form

let isemail = false;
let ispassword = false;

let data = [];

registerFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  emailChecker();
  passwordChecker();
  let name = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#emailregister").value;
  let password = document.querySelector("#passwordregister").value;

  if (isemail == true && ispassword == true) {
    let obj = {
      name,
      lname,
      email,
      password,
    };
    if (
      localStorage.getItem("register") == null ||
      localStorage.getItem("register") == undefined
    ) {
      data.push(obj);
      localStorage.setItem("register", JSON.stringify(data));
    } else {
      let allusers = JSON.parse(localStorage.getItem("register"));
      allusers.push(obj);
      localStorage.setItem("register", JSON.stringify(allusers));
    }
    location.href = "./registration.html";
  } else {
    alert("All Field Require");
  }

  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#emailregister").value = "";
  document.querySelector("#passwordregister").value = "";
});

function emailChecker() {
  let email = document.querySelector("#emailregister").value;
  let error = document.querySelector("#emailError");
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    error.innerText = "Enter Valid Email Address";
    isemail = false;
  } else {
    error.innerText = "";
    isemail = true;
  }
}

function passwordChecker() {
  let password = document.querySelector("#passwordregister").value;
  let passwordError = document.querySelector("#passwordError");
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
  if (!regex.test(password)) {
    passwordError.innerText =
      "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-15 characters long.";
    ispassword = false;
  } else {
    passwordError.innerText = "";
    ispassword = true;
  }
}

// login form

loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let userData = JSON.parse(localStorage.getItem("register"));
  let email = document.getElementById("emaillogin").value;
  let password = document.getElementById("passwordlogin").value;
  let loginError = document.querySelector("#loginError");

  if (
    localStorage.getItem("register") == null ||
    localStorage.getItem("register") == undefined
  ) {
    loginError.innerHTML = "User Not Register!";
  } else {
    loginError.innerHTML = "";
  }
  console.log(userData);
  let validUser = userData.find((item) => {
    return item.email === email && item.password === password;
  });

  if (validUser) {
    localStorage.setItem("login", JSON.stringify(validUser));
    loginError.innerText = "";
    location.href = "index.html";
  } else {
    loginError.innerText = "Email or password may wrong";
  }

  document.querySelector("#emaillogin").value = "";
  document.querySelector("#passwordlogin").value = "";
});

// forgotpassword form

let userData = JSON.parse(localStorage.getItem("register"));
document.querySelector(".OtpValidator").style.display = "none";
document.querySelector(".NewPassword").style.display = "none";
var otp = Math.floor(Math.random() * 10000);

forgotPasswordFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.querySelector("#emailforgotpassword").value;
  let validUser = userData.some((item) => {
    return item.email === email;
  });

  if (validUser) {
    document.querySelector("#forgotPasswordFormElement").style.display = "none";
    document.querySelector(".OtpValidator").style.display = "block";
    document.querySelector(".NewPassword").style.display = "none";
    alert(`Your otp is : ${otp}`);
  } else {
    alert("Enter Correct Email");
  }
});

function forgotemailChecker() {
  let email = document.querySelector("#emailforgotpassword").value;
  let error = document.querySelector("#emailError");
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    error.innerText = "Enter Valid Email Address";
  } else {
    error.innerText = "";
  }
}

// otpcheck

function otpsubmit(event) {
  event.preventDefault();
  let userOtp = document.querySelector("#otp").value;

  if (otp == userOtp) {
    document.querySelector("#forgotPasswordFormElement").style.display = "none";
    document.querySelector(".OtpValidator").style.display = "none";
    document.querySelector(".NewPassword").style.display = "block";
  } else {
    alert("Enter Correct Otp");
  }
}

// updatepassword

function PasswordUpdate(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let newpassword = document.querySelector("#password").value;

  if (!newpassword || !email) {
    alert("Enter all details");
    return;
  }

  let userData = JSON.parse(localStorage.getItem("register"));
  let userToUpdate = userData.find((user) => user.email === email);

  if (!userToUpdate) {
    alert("User not found. Please enter a valid email.");
    return;
  }

  let updatedData = userData.map((user) => {
    if (user.email === email) {
      return { ...user, password: newpassword };
    }
    return user;
  });

  localStorage.setItem("register", JSON.stringify(updatedData));
  alert("Password updated successfully");
  window.location.href = "./registration.html";
}
