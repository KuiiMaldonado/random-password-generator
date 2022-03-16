// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pswdLength = getPasswordLength();
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  //
  // passwordText.value = password;

}

// Asks user for the desired password's length.
function getPasswordLength() {
  let passwordLength;

  while (true) {
    passwordLength = window.prompt("Please choose the password length between 8 and 128 characters:");
    if (passwordLength !== null && passwordLength !== "") {
      if (passwordLength >= 8 && passwordLength <= 128) {
        return passwordLength;
      } else
        window.alert("You must enter a valid length");
    } else {
      window.alert("Please enter valid value");
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
