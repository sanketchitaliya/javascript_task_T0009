email = document.getElementById("emaillogin");
oldpass = document.getElementById("passwordold");
newPassword =  document.getElementById("passwordlogin");
confirmPassword =   document.getElementById("passwordconfirm");


function resetPasswordUser() {

    let userData = JSON.parse(localStorage.getItem("register"));
    email = email.value;
    oldpass  = oldpass.value;
    newPassword = newPassword.value;
    confirmPassword = confirmPassword.value;
    
    let indexUser = userData.find(user => user.email === email);
    if (!indexUser) {
        alert("User not found. Please enter a valid email.");
        return;
    }

    

    let updatedData = userData.map(user => {
        if (user.email === email) {
            return { ...user, password: newPassword };
        }
        return user;
    });

    localStorage.setItem("register", JSON.stringify(updatedData));
    location.href="./registration.html";
    alert("Password updated successfully");
    

}