// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let pswdLength;
  let isLowerCase, isUpperCase, isNumeric, isSpecialChars;
  pswdLength = getPasswordLength();
  isLowerCase = includeLowerCase();
  isUpperCase = includeUpperCase();
  isNumeric = includeNumeric();
  isSpecialChars = includeSpecialChars();

  console.log(pswdLength);
  console.log(isLowerCase);
  console.log(isUpperCase);
  console.log(isNumeric);
  console.log(isSpecialChars);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  //
  // passwordText.value = password;

}

// function getPasswordLength() {
//   let passwordLength;
//
//   while (true) {
//     passwordLength = window.prompt("Please choose the password length between 8 and 128 characters:");
//     if (passwordLength !== null && passwordLength !== "") {
//       if (passwordLength >= 8 && passwordLength <= 128) {
//         return passwordLength;
//       } else
//         window.alert("You must enter a valid length");
//     } else {
//       window.alert("Please enter valid value");
//     }
//   }
//
// }

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
