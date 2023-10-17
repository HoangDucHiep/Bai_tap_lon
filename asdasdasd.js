let password = document.getElementById('password-sign');
let togglePassword = document.getElementById('pass-toggle');


function showHide() {
    if(password.type == 'password') {
        password.setAttribute('type', 'text');
        togglePassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('hide');
    }
}


const emailInputField = document.querySelector('.email-sign-input-field');
const passwordInputField = document.querySelector('.password-sign-input-field');
const emailInput = document.getElementById('email-sign');
const passwordInput = document.getElementById('password-sign');

emailInput.addEventListener('focus', () => {
    emailInputField.style.border = '1px solid white';
    emailInputField.style.transform = 'scale(1.01)';
});

emailInput.addEventListener('blur', () => {
    emailInputField.style.border = '1.5px solid #8b8b8b6d'; // Reset the other input field's border
    emailInputField.style.transform = 'scale(1)';
});


passwordInput.addEventListener('focus', () => {
    passwordInputField.style.border = '1px solid white';
    passwordInputField.style.transform = 'scale(1.01)';
});


passwordInput.addEventListener('blur', () => {
    passwordInputField.style.border = '1.5px solid #8b8b8b6d'; // Reset the other input field's border
    passwordInputField.style.transform = 'scale(1)';
});
