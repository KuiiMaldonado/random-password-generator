// Assignment Code
var generateBtn = document.querySelector("#generate");

function password(length, isLowerCase, isUpperCase, isNumeric, isSpecialChars){
  this.length = length;
  this.isLowerCase = isLowerCase;
  this.isUpperCase = isUpperCase;
  this.isNumeric = isNumeric;
  this.isSpecialChars = isSpecialChars;
  this.isValid = false;
  this.minRange = 0;
  this.maxRange = 0;

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

  this.getCharactersRange = function (){
    if(this.isNumeric){
      this.minRange = 0x0030;
      this.maxRange = 0x0039;
    }
  };

  this.generatePassword = function(){
    let result = "";

    this.getCharactersRange();

    for (let i = 0; i < this.length; i++) {
      // console.log(String.fromCharCode(this.minRange + Math.random() * (this.maxRange - this.minRange + 1)));
      let character = String.fromCharCode(this.minRange + Math.random() * (this.maxRange - this.minRange + 1))
      result += character;
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
    var passwordText = document.querySelector("#password");
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

function includeLowerCase(){
  return window.confirm("Include lower case letters in password?");
}

function includeUpperCase(){
  return window.confirm("Include upper case letters in password?");
}

function includeNumeric(){
  return window.confirm("Include numbers in password?");
}

function includeSpecialChars(){
  return window.confirm("Include special characters in password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
