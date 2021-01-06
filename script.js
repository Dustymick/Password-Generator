// Assignment code here
function generatePassword() {
  var choosePassLength = prompt("How long would you like your password?")
  choosePassLength = parseInt(choosePassLength)
  var chooseLowerCase = confirm("Would you like lower case")
  var chooseUpperCase = confirm("Would you like upper case")
  var chooseNumber = confirm("would you like numbers")
  var chooseSpecialCharacter = confirm("Would you like special characters")

  var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("")

  var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUYWXYZ".split("")

  var numberArray = "0123456789".split("")

  var specialCharacterArray = "!&*$#{}=+@()?".split("")

  var userChosenArray = []

  if (chooseLowerCase) {
    for (let index = 0; index < lowerCaseArray.length; index++) {
      const element = lowerCaseArray[index];
      userChosenArray.push(element)

    }
  }

  if (chooseUpperCase) {
    for (let index = 0; index < upperCaseArray.length; index++) {
      const element = upperCaseArray[index];
      userChosenArray.push(element)

    }
  }

  if (chooseNumber) {
    for (let index = 0; index < numberArray.length; index++) {
      const element = numberArray[index];
      userChosenArray.push(element)

    }
  }

  if (chooseSpecialCharacter) {
    for (let index = 0; index < specialCharacterArray.length; index++) {
      const element = specialCharacterArray[index];
      userChosenArray.push(element)

    }
    console.log(userChosenArray)
  }
  var finishPassword = ""
  for (let index = 0; index < choosePassLength; index++) {
    var randomIndex = Math.floor(Math.random() * userChosenArray.length)
    finishPassword += userChosenArray[randomIndex]
  }

  return finishPassword

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
