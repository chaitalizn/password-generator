// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNIPQRATUVWXYZ";
var number = "0123456789";
var symbol = " !@#$%^&*(){}[]=<>/,.";


function generatePassword(passwordLength, characterTypes){
  var pwd = "";
  for(var i = 0; i < passwordLength; i++){
    pwd += characterTypes.charAt(Math.floor(Math.random()* characterTypes.length));
  }
};


var passwordLength = Number(prompt("How many character would you like your password to be?"));

if (passwordLength < 8 || passwordLength > 128) {
  alert ("Please enter password length between 8 and 128 characters.")
}
else {
var uppercase = confirm("Would you like to include uppercase?");
var lowercase = confirm("would you like to include lowercase?");
var number = confirm("Would you like to include numbers?");
var specialCharacters = confirm("Would you like to include special characters?");

if (!uppercase && !lowercase && !number && !specialCharacters) {
  alert ("Please at least choose 1 character type.");
};
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


