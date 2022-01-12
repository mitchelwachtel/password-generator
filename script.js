// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created an array for each character type
var specialCharacters = ['`', '~', '!', '@', "#", '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var useSpecialCharacters = false;
var useNumbers = false;
var useLowerCase = false;
var useUpperCase = false;
var password = '';

// Pass an array into this function and it gives you a random element from it
function randomCharacter(array) {
  var index = Math.floor(Math.random()*array.length);
  return array[index];
}

// This function needs to start the process of asking for the number of characters & type of characters and ends with returning password
function generatePassword() {
  var numOfChar = prompt('How many characters would you like in your password?\nChoose an integer between 8 and 128.', '');
  // If user clicks cancel, this will end the function
  if (numOfChar === null) {
    return;
  }
  // Needed to check if the input was a NUMBER between 8 and 128
  numOfChar = parseFloat(numOfChar);
  if (numOfChar < 8 || numOfChar > 128) {
    alert('Number of characters must be an integer between 8 and 128.')
    generatePassword();
  }
  if (isNaN(numOfChar)) {
    alert('Number of characters must be an integer between 8 and 128.')
    generatePassword();
  }

  var useSpecialCharacters = confirm('To use special characters in your password, please select OK \nFor no special characters, please select Cancel');
  var useNumbers = confirm('To use numbers in your password, please select OK \nFor no numbers, please select Cancel');
  var useLowerCase = confirm('To use lowercase letters in your password, please select OK \nFor no lowercase letters, please select Cancel');
  var useUpperCase = confirm('To use uppercase letters in your password, please select OK \nFor no uppercase letters, please select Cancel');

  



  

  return password;
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
