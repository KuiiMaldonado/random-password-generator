// Assignment Code
var generateBtn = document.querySelector("#generate");

function password(length, isLowerCase, isUpperCase, isNumeric, isSpecialChars){
  this.length = length;
  this.isLowerCase = isLowerCase;
  this.isUpperCase = isUpperCase;
  this.isNumeric = isNumeric;
  this.isSpecialChars = isSpecialChars;
  this.isValid = false;
  this.value = "";

  this.validateCriteria = function (){
    let isCriteriaOk = true;
    let passwordLength = parseInt(this.length, 10);

    if(Number.isNaN(passwordLength) || (this.length < 8 || this.length > 128)){
      isCriteriaOk = false;
    }
    else if(!this.isLowerCase && !this.isUpperCase && !this.isNumeric && !this.isSpecialChars)
      isCriteriaOk = false

    this.isValid = isCriteriaOk;
  };

  this.isCharacterValid = function (character){
    let validChar = true;
    let decimalChar;

    decimalChar = character.charCodeAt(0);
    if(decimalChar >= 48 && decimalChar <= 57){
      if (this.isNumeric){
        validChar = true;
      }
      else{
        validChar = false;
      }
    }
    else if (decimalChar >= 65 && decimalChar <= 90){
      if (this.isUpperCase){
        validChar = true;
      }
      else{
        validChar = false;
      }
    }
    else if (decimalChar >= 97 && decimalChar <= 122){
      if (this.isLowerCase){
        validChar = true;
      }
      else{
        validChar = false;
      }
    }
    else {
      if (this.isSpecialChars){
        validChar = true;
      }
      else{
        validChar = false;
      }
    }

    return validChar;
  }

  this.generatePassword = function(){
    let result = "";
    let i = 0;

    while (i < this.length) {
      let character = String.fromCharCode(0x0020 + Math.random() * (0x007E - 0x0020 + 1))
      if(this.isCharacterValid(character)){
        result += character;
        i++;
      }
    }

    this.value = result;
  };
}

// Write password to the #password input
function writePassword() {
  let pswdLength, isLowerCase, isUpperCase, isNumeric, isSpecialChars;

  pswdLength = getPasswordLength();
  isLowerCase = includeLowerCase();
  isUpperCase = includeUpperCase();
  isNumeric = includeNumeric();
  isSpecialChars = includeSpecialChars();

  var pswd = new password(pswdLength, isLowerCase, isUpperCase, isNumeric, isSpecialChars);
  pswd.validateCriteria();
  if(pswd.isValid){
    pswd.generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = pswd.value;
  }
  else {
    window.alert("Please check password length is between 8 - 128 and at least one criteria was selected.")
  }

}

// Asks user for the desired password's length.
function getPasswordLength() {
  let passwordLength;

    passwordLength = window.prompt("Please choose the password length between 8 and 128 characters:");
    return passwordLength;
}

// Asks user if password will contain lower case letters.
function includeLowerCase(){
  return window.confirm("Include lower case letters in password?");
}

// Asks user if password will contain upper case letters.
function includeUpperCase(){
  return window.confirm("Include upper case letters in password?");
}

// Asks user if password will contain numbers.
function includeNumeric(){
  return window.confirm("Include numbers in password?");
}

// Asks user if password will contain special characters.
function includeSpecialChars(){
  return window.confirm("Include special characters in password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
