const registerForm = document.querySelector('.form__free-lesson');
const submit = registerForm.querySelector('.form__button');
const formField = registerForm.querySelectorAll('.form__input');

const validForm = () => {
  submit.addEventListener('click', () => {

    for (let i = 0; i < formField.length; i++) {
      if (!formField[i].validity.valid) {
        formField[i].classList.add('form__input--error');
        return;
      } else if (formField[i].validity.valid) {
        formField[i].setCustomValidity('');
        formField[i].classList.remove('form__input--error');
      }
    }
  });
};

export { validForm };
