import {
  characters
} from './characters.js';

let passwordOne = null;
let passwordTow = null;
let passwordLength = 10;
let isDarkMode = true;

/**  dom default value **/
let bodyEl = null;
let titleEl = null;
let themeIconEl = null;
let containerEl = null;
let passwordOneEl = null;
let passwordTowEl = null;

function init() {
  bodyEl = document.getElementById("body-el");
  titleEl = document.getElementById("title-el");
  themeIconEl = document.getElementById("theme-icon");
  containerEl = document.getElementById("container-el");

  themeIconEl.addEventListener("click", toggleTheme)

  containerEl.addEventListener("click", (e) => {
    const targetId = e.target.id
    const passwordEl = e.target.parentNode.nextElementSibling
    let passwordText = e.target.textContent
    if (targetId == "generatePassword-btn") {
      passwordOneEl = passwordEl.querySelector('#password-one-el');
      passwordTowEl = passwordEl.querySelector('#password-tow-el');
      renderPasswords(passwordOneEl, passwordTowEl)
    }
    if (targetId == 'password-one-el' || targetId == 'password-tow-el') {
      copyToClipboard(passwordText)
    }
  })

}

function createRandomPasswords() {
  passwordOne = ""
  passwordTow = ""
  for (let i = 0; i < passwordLength; i++) {
    passwordOne += characters[Math.floor(Math.random() * characters.length)];
    passwordTow += characters[Math.floor(Math.random() * characters.length)];
  }
}

function renderPasswords(passwordOneEl, passwordTowEl) {
  createRandomPasswords();
  passwordOneEl.textContent = passwordOne
  passwordTowEl.textContent = passwordTow
}

function toggleTheme() {
  if (isDarkMode) {
    themeIconEl.src = "https://img.icons8.com/office/40/000000/sun--v1.png";
    isDarkMode = false;
  } else {
    themeIconEl.src =
      "https://img.icons8.com/sf-regular-filled/48/000000/moon-symbol.png";
    isDarkMode = true;
  }
  bodyEl.classList.toggle("white-mode");
  titleEl.classList.toggle("white-mode");
}

function copyToClipboard(passwordText) {

  navigator.clipboard.writeText(passwordText);
  swal('Perfect!', 'Password copied to clipboard', 'success');

}

document.addEventListener("DOMContentLoaded", init());