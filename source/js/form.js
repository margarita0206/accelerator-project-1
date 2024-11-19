let inputField = document.querySelector(".form__input");
let nameField = document.getElementById("name");
let phoneField = document.getElementById("phone");

if (inputField.value === "") {
  alert("Поле ввода не должно быть пустым");

  return;
}

let namePattern = /[a-zа-яё]/;
if (!namePattern.test(nameField.value)) {
  alert("Имя должно содержать только буквы");

  return;
}

let phonePattern = /+7{1,9}/;
if (!phonePattern.test(phoneField.value)) {
  alert("Номер телефона должен содержать только цифры и начинается через +7");

  return;
}
