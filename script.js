const inputLogin = document.querySelector('#inputLogin');
const inputPassword = document.querySelector('#inputPassword');
const submitButton = document.querySelector('#submitButton');
const selectHouse = document.querySelector('#house');
const checkBox = document.querySelector('#agreement');
const formSubmitButton = document.querySelector('#submit-btn');
const textareaPath = document.querySelector('#textarea');
const counterPath = document.querySelector('#counter');

submitButton.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

function houseOptions() {
  const houses = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
  const housesId = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];
  for (let index = 0; index < houses.length; index += 1) {
    const houseOption = document.createElement('option');
    selectHouse.appendChild(houseOption).innerText = houses[index];
    houseOption.value = houses[index];
    houseOption.id = housesId[index];
  }
} houseOptions();

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    formSubmitButton.disabled = false;
  } else {
    formSubmitButton.disabled = true;
  }
});

textareaPath.addEventListener('keyup', () => {
  const textareaString = textareaPath.value;
  const counterUpdated = 500 - parseInt(textareaString.length, 10);
  counterPath.innerText = counterUpdated;
});
