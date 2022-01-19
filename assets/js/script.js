// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created an array for each character type
var specialCharacters = [
  "`",
  "~",
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
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = [
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
];
var upperCase = [
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
];
var useSpecialCharacters = false;
var useNumbers = false;
var useLowerCase = false;
var useUpperCase = false;

// Pass an array into this function and it gives you a random element from it
function randomElement(array) {
  var y = array.length;
  var index = Math.floor(Math.random() * y);
  return array[index];
}

// This function needs to start the process of asking for the number of characters & type of characters and ends with returning password
function generatePassword() {
  var typeArray = [];
  var passwordArray = [];
  var scrambledPasswordArray = [];
  var password = "";

  var numOfChar = prompt(
    "How many characters would you like in your password?\nChoose an integer between 8 and 128.",
    ""
  );
  if (numOfChar === null) {
    // If user clicks cancel, this will end the function and not change the text in the box
    return password = null; 
  }

  numOfChar = Math.floor(parseFloat(numOfChar));

  if (numOfChar > 7 && numOfChar < 129) {
    createPassword();
    return password;
  } else {
    alert("Number of characters must be an integer between 8 and 128.");
    generatePassword();
    return password = null; // Through a lot of trial and error, I have figured out that returning null for the password will not change the text in the box!!!
  }

  function createPassword() {
    var useSpecialCharacters = confirm(
      "To use special characters in your password, please select OK \nFor no special characters, please select Cancel"
    );
    if (useSpecialCharacters) {
      typeArray.push(specialCharacters);
      passwordArray.push(randomElement(specialCharacters));
      numOfChar--;
    }
    var useNumbers = confirm(
      "To use numbers in your password, please select OK \nFor no numbers, please select Cancel"
    );
    if (useNumbers) {
      typeArray.push(numbers);
      passwordArray.push(randomElement(numbers));
      numOfChar--;
    }
    var useLowerCase = confirm(
      "To use lowercase letters in your password, please select OK \nFor no lowercase letters, please select Cancel"
    );
    if (useLowerCase) {
      typeArray.push(lowerCase);
      passwordArray.push(randomElement(lowerCase));
      numOfChar--;
    }
    var useUpperCase = confirm(
      "To use uppercase letters in your password, please select OK \nFor no uppercase letters, please select Cancel"
    );
    if (useUpperCase) {
      typeArray.push(upperCase);
      passwordArray.push(randomElement(upperCase));
      numOfChar--;
    }

    // if user selects none of the potential types of characters, then the function alerts and restarts.
    if (
      useSpecialCharacters === false &&
      useNumbers === false &&
      useLowerCase === false &&
      useUpperCase === false
    ) {
      alert("You must allow at least 1 character type!");
      generatePassword();
      return;
    }

    for (i = 0; i < numOfChar; i++) {
      var charType = randomElement(typeArray);
      passwordArray.push(randomElement(charType));
    }

    // Attempt at the Fisher and Yates' Method
    while (passwordArray.length > 0) {
      var z = Math.floor(Math.random() * passwordArray.length);
      scrambledPasswordArray.push(passwordArray[z]);
      passwordArray.splice(z, 1);
    }

    password = scrambledPasswordArray.join("");
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
