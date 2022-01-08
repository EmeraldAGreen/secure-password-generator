// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var pass="";
  var validCharacters="";
  // need generator to consider user reply to confirm messages for number, upper, lower, and special
  if (replyNumbers) {
    validCharacters+= characters.numbers;
// means the same as validCharacters=validCharacters+characters.numbers
  }
    if (replyUpper) {
    validCharacters+= characters.upperalpha;
  }
    if (replyLower) {
    validCharacters+= characters.loweralpha;
  }
    if (replySpecial) {
    validCharacters+= characters.special;
  }
  // need generator to consider user reply for password length prompt
  //need generator to pick random characters from user selected properties (of characters object)
  for (var i = 0; i < replyLength; i++) {
    var characterSelect = Math.floor(Math.random() * validCharacters.length);
    // returns a decimal number between 0 and the length of valid Characters 
    var characterOutput = validCharacters[characterSelect];
    pass+=characterOutput;
  }
  return pass; 
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// first parameter of an event listener is the type of event, the second parameter is the callback FUNCTION


var characters = {
  numbers:"1234567890",
  upperalpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  loweralpha: "abcdefghijklmnopqrstuvwxyz",
  special: "!'()*+,-./:;<=>?@[]^_`{|}~", 
}

var replyLength=prompt("How long would you like your password to be? (8-128 characters)")
if (replyLength>8 && replyLength<128) {
  generatePassword();
}

var replyNumbers=confirm("Do you want to include numbers in your password?") 
var replyUpper=confirm("Do you want to include uppercase letters in your password?")
var replyLower=confirm("Do you want to include lowercase letters in your password?")
var replySpecial=confirm("Do you want to include special characters (e.g. @,#,$,etc) in your password?")


