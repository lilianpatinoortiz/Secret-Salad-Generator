/* VARIABLES AND MESSAGES TO USE */
var charactersDecisionsTaken = 0;
let minSaladSize = 8;
let maxSaladSize = 128;
let welcomeMessage =
  "Hello there! Are you ready to order your salad?\nClick OK to start!";
let sizeMessage =
  "Please enter the size (length) of the salad. \nAt least 8 characters and no more than 128 characters.";
let lowercaseMessaage =
  "Do you want to inlcude lowercase characters?\nPlease click OK to confirm, else Cancel.";
let uppercaseMessage =
  "Do you want to inlcude uppercase characters?\nPlease click OK to confirm, else Cancel.";
let numericMessage =
  "Do you want to inlcude numeric characters?\nPlease click OK to confirm, else Cancel.";
let specialMessage =
  "Do you want to inlcude special characters?\nPlease click OK to confirm, else Cancel.";
let sizeNotAllowedMessage = "That's not an allowed size :( Please try again!";

/* DECLARATION AND USE OF FUNCTIONS */
function generateSalad() {
  var salad = "";

  // Welcome confirmation
  if (confirm(welcomeMessage)) {
    // Request size
    let mySaladSize = prompt(sizeMessage);
    // Verification: length is at least minSaladSize characters and no more than maxSaladSize characters
    if (mySaladSize >= minSaladSize && mySaladSize <= maxSaladSize) {
      // Characters decisions
      if (confirm(lowercaseMessaage)) {
      }
      if (confirm(uppercaseMessage)) {
      }
      if (confirm(numericMessage)) {
      }
      if (confirm(specialMessage)) {
      }
    } else {
      alert(sizeNotAllowedMessage);
    }
  }
  return salad;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var mySalad = generateSalad();
  // Only if there is a password generated, we will display it.
  if (mySalad) {
    var passwordText = document.querySelector("#password");
    passwordText.value = mySalad;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
