const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailInputWrapper = document.querySelector('#input-wrapper');
const emailError = document.querySelector('#emailInvalidError');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  emailError.textContent = '';
  emailError.classList.add('sr-only');
  emailInput.classList.remove('input-error');
  emailInputWrapper.classList.remove('input-error-border');

  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please provide a valid email'; // add error text
    emailError.classList.remove('sr-only'); // make error visible
    emailInput.classList.add('input-error'); // add error image
    emailInputWrapper.classList.add('input-error-border'); // add red border
  } else {
    console.log("submitted")
  }

  event.preventDefault();
});