// TODO: The hope is to rewrite the other function to guarantee a character of each selected must exist in the generated password. BUT, if it doesn't work, USE THIS.
// This function needs to start the process of asking for the number of characters & type of characters and ends with returning password
function generatePassword() {
    var typeArray = [];
    var password = '';
    
    var numOfChar = prompt('How many characters would you like in your password?\nChoose an integer between 8 and 128.', '');
    if (numOfChar === null){      // If user clicks cancel, this will end the function
      return;
    }
    numOfChar = Math.floor(parseFloat(numOfChar));
    
    if (numOfChar > 7 && numOfChar < 129) {
      createPassword();
    } else {
      alert('Number of characters must be an integer between 8 and 128.')
      generatePassword();
      return;
    } 
  
    function createPassword() {  
      var useSpecialCharacters = confirm('To use special characters in your password, please select OK \nFor no special characters, please select Cancel');
      if (useSpecialCharacters) {
        typeArray.push(specialCharacters);
      }
    var useNumbers = confirm('To use numbers in your password, please select OK \nFor no numbers, please select Cancel');
      if (useNumbers) {
        typeArray.push(numbers);
    }
    var useLowerCase = confirm('To use lowercase letters in your password, please select OK \nFor no lowercase letters, please select Cancel');
      if (useLowerCase) {
        typeArray.push(lowerCase);
    }
    var useUpperCase = confirm('To use uppercase letters in your password, please select OK \nFor no uppercase letters, please select Cancel');
      if (useUpperCase) {
        typeArray.push(upperCase);
    }
  
    // if user selects none of the potential types of characters, then the function alerts and restarts.
    if (useSpecialCharacters === false && useNumbers === false && useLowerCase === false && useUpperCase === false) {
      alert('You must allow at least 1 character type!');
      generatePassword();
      return;
    }
  
    for (i=0; i<numOfChar; i++) {
      var charType = randomElement(typeArray);
      var x = randomElement(charType);
      password = password + x;
    }}
  
  
  
  
    return password;
  }