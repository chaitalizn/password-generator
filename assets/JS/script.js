// Assignment code here
//all possible password values variable
var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSet = "ABCDEFGHIJKLMNIPQRATUVWXYZ";
var numberSet = "0123456789";
var symbolSet = "!@#$%^&*(){}[]=<>/,.";

function generatePassword() {

//prompt for password character length
var passwordLength = Number(prompt("How many character would you like your password to be? Choose between 8 to 128"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("How many character would you like your password to be? Choose between 8 to 128"));
  }  

//confirm character type password to generate     
var uppercase = confirm("Would you like to include uppercase?");
var lowercase = confirm("Would you like to include lowercase?");
var number = confirm("Would you like to include numbers?");
var specialCharacters = confirm("Would you like to include special characters?");
  while (!uppercase && !lowercase && !number && !specialCharacters) {
    alert ("Please select one character type.");
    var uppercase = confirm("Would you like to include uppercase?");
    var lowercase = confirm("Would you like to include lowercase?");
    var number = confirm("Would you like to include numbers?");
    var specialCharacters = confirm("Would you like to include special characters?");
  };

// concat all character type user confirm and store in passwordString
var passwordString = "";

if (uppercase) {
  passwordString = passwordString.concat(uppercaseSet);
}
if (lowercase) {
  passwordString = passwordString.concat(lowercaseSet);
}
if (number) {
  passwordString = passwordString.concat(numberSet);
}
if (specialCharacters) {
  passwordString = passwordString.concat(symbolSet);
}

//genereate random password from the passwordString
var passwordRandom = "";
for (var i = 0; i < passwordLength; i++) {
      passwordRandom += passwordString.charAt(Math.floor(Math.random()* passwordString.length));
  }
  return passwordRandom;
};

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