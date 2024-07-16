const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-btn');
const formSummary = document.getElementById('form-summary');
const printf = document.getElementById('print');


nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);


function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 3) {
        showError(nameInput, 'Must be at least 3 characters long.');
    } else if (!/^[a-zA-Z\s]*$/.test(nameValue)) {
        showError(nameInput, 'Must not contain numbers or special characters.');
    } else {
        showSuccess(nameInput);
    }
    checkAllValidations();
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Email is not valid');
    } else {
        showSuccess(emailInput);
    }
    checkAllValidations();
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
        showError(passwordInput, 'Must be at least 8 characters long');
    } else if (!/[a-z]/.test(passwordValue) || !/[A-Z]/.test(passwordValue) || !/[0-9]/.test(passwordValue) || !/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
        showError(passwordInput, 'Must include at least one uppercase letter, one lowercase letter, one number, and one special character');
    } else {
        showSuccess(passwordInput);
    }
    validateConfirmPassword(); 
}

function validateConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (confirmPasswordValue === '') {
        showError(confirmPasswordInput, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        showError(confirmPasswordInput, 'Must match the password field.');
    } else {
        showSuccess(confirmPasswordInput);
    }
    checkAllValidations();
}


function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    errorElement.textContent = message;
    formGroup.classList.add('error');
}


function showSuccess(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    errorElement.textContent = '';
    formGroup.classList.remove('error');
}


function checkAllValidations() {
    const nameValid = validateField(nameInput);
    const emailValid = validateField(emailInput);
    const passwordValid = validateField(passwordInput);
    const confirmPasswordValid = validateField(confirmPasswordInput);

    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
        submitButton.disabled = false;
        console.log("false");

    } else {
        submitButton.disabled = true;
        console.log("true");
    }
}


function validateField(input) {
    const formGroup = input.parentElement;
    return !formGroup.classList.contains('error');
}


function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const isValid = checkAllValidations();
    //console.log(isValid);
    if (isValid) {
        printf.textContent = 'Please fill out the form correctly.';
        formSummary.classList.add('error-message');
    } else {
        
        printf.textContent = 'Form submitted successfully!';
        formSummary.classList.add('success-message');
        printf.style.padding="20px";
        printf.style.borderRadius="10px";

    }
});