const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOne = "";
let passwordTow = "";
let passwordLength = 10;
let isDarkMode = true;

let containerEl = document.getElementById("container-el");
let titleEl = document.getElementById("title-el");
let themeIconEl = document.getElementById("theme-icon");
let passwordOneEL = document.getElementById("password-one-el");
let passwordTowEL = document.getElementById("password-tow-el");
let generatePasswordEl = document.getElementById("generatePassword-el");
let errorEl = document.getElementById("error-el");

function generatePasswords() {
  checkGeneratedPassWord();
  displayPasswords();
}
function checkGeneratedPassWord() {
  if (passwordOne.length > 10) {
    generatePasswordEl.setAttribute("disabled", false);
    errorEl.classList.add("display");
    return;
  }
  createRandomPasswords();
}

function createRandomPasswords() {
  passwordOne = ""
  passwordTow = ""
  for (let i = 0; i < passwordLength; i++) {
    passwordOne += characters[Math.floor(Math.random() * characters.length)];
    passwordTow += characters[Math.floor(Math.random() * characters.length)];
  }
}

function displayPasswords() {
  passwordOneEL.textContent = passwordOne;
  passwordTowEL.textContent = passwordTow;
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
  containerEl.classList.toggle("white-mode");
  titleEl.classList.toggle("white-mode");
}

function copyToClipboard(number) {
    alert("copied")
  if (number == 1) {
    return navigator.clipboard.writeText(passwordOneEL.innerHTML);
  } else {
    return navigator.clipboard.writeText(passwordTowEL.innerHTML);
  }
}
