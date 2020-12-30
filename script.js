// Assignment code here
function generatePassword() {
var choosePassLength = prompt("How long would you like your password?")  
var chooseLowerCase = confirm("Would you like lower case")
var chooseUpperCase = confirm("Would you like upper case")
var chooseNumber = confirm("would you like numbers")
var chooseSpecialCharacter = confirm("Would you like special characters")

var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz" .split ("")
 
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUYWXYZ" .split ("")

var numberArray = "0123456789" . split ("")

var specialCharacterArray = "!&*$#{}=+@()?" .split ("")

var userChosenArray = []
   if (chooseLowerCase) { 
   console.log(chooseLowerCase)
   }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
