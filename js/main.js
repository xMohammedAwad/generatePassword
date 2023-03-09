import {
  characters
} from './characters.js';

let passwordLength = 10;
let isDarkMode = true;

let bodyEl = null;
let titleEl = null;
let themeIconEl = null;
let containerEl = null;

function init() {
  bodyEl = document.getElementById("body-el");
  titleEl = document.getElementById("title-el");
  themeIconEl = document.getElementById("theme-icon");
  containerEl = document.getElementById("container-el");

  themeIconEl.addEventListener("click", toggleTheme);
  containerEl.addEventListener("click", handlePasswordBtnClick);
}

function handlePasswordBtnClick(e) {
  const target = e.target;
  if (target.dataset.generate) {
    const passwordWrapper = target.parentNode.nextElementSibling;
    const passwordOneEl = passwordWrapper.querySelector('#password-one-el');
    const passwordTowEl = passwordWrapper.querySelector('#password-tow-el');
    renderPasswords(passwordOneEl, passwordTowEl);
  } else if (target.dataset.password) {
    copyToClipboard(target.textContent);
  }
}

function renderPasswords(passwordOneEl, passwordTowEl) {
  const [passwordOne, passwordTow] = generateRandomPasswords();
  passwordOneEl.textContent = passwordOne;
  passwordTowEl.textContent = passwordTow;
}

function generateRandomPasswords() {
  const passwordsArr = [];
  for (let i = 0; i < 2; i++) {
    let password = "";
    for (let j = 0; j < passwordLength; j++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordsArr.push(password);
  }
  return passwordsArr;
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  themeIconEl.src = isDarkMode ? "https://img.icons8.com/sf-regular-filled/48/000000/moon-symbol.png" : "https://img.icons8.com/office/40/000000/sun--v1.png";
  bodyEl.classList.toggle("white-mode");
  titleEl.classList.toggle("white-mode");
}

function copyToClipboard(passwordText) {
  navigator.clipboard.writeText(passwordText);
  swal('Perfect!', 'Password copied to clipboard', 'success');
}

document.addEventListener("DOMContentLoaded", init);