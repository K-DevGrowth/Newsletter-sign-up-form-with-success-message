const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const error = document.querySelector('.error');
const emailValidation = /[a-zA-Z0-9]+@[a-z]+\.(com|vn|hub)/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value !== emailValidation) {
        error.classList.add('active');
        console.log('OK');
    }
})