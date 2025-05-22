const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const error = document.querySelector('.error');
const newsletter = document.querySelector('.newsletter');
const emailPattern = /[a-zA-Z0-9]+@[a-z]+\.(com|vn|hub)/;

const SuccessMsg = `
    <div class='successMsg'>
        <img class='big-icon' src='./images/icon-list.svg'>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
        <button class='btn dismiss'>Dismiss message</button>
    </div>
`;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailPattern.test(emailInput.value)) {
        error.style.display = 'block';
        return;
    }
    error.style.display = 'none';
    document.body.insertAdjacentHTML('beforeend', SuccessMsg);
    newsletter.style.display = 'none';
});

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('dismiss')) {
        emailInput.value = '';
        e.target.parentElement.style.display = 'none';
        newsletter.style.display = 'grid';
    }
})