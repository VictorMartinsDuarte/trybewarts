const inputLogin = document.querySelector('#inputLogin');
const inputPassword = document.querySelector('#inputPassword');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
