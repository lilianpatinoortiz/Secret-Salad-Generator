/* VARIABLES AND MESSAGES TO USE */
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
let emptyBowlMessage =
  "You have to confirm at least one of the characters group :(\nPlease try again!";
let numericCharacters = "0123456789".split("");
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

/* DECLARATION AND USE OF FUNCTIONS */
function generateSalad() {
  // Welcome confirmation
  if (confirm(welcomeMessage)) {
    let mySaladSize = prompt(sizeMessage); // Request size
    var salad = ""; // new password
    let bowl = []; // place to mix the characters selected

    // Verification: length is at least minSaladSize characters and no more than maxSaladSize characters
    if (mySaladSize >= minSaladSize && mySaladSize <= maxSaladSize) {
      if (confirm(lowercaseMessaage)) {
        bowl = bowl.concat(lowerCaseCharacters); // if lowercases included, concat the arrays
      }
      if (confirm(uppercaseMessage)) {
        bowl = bowl.concat(upperCaseCharacters); // if uppercases included, concat the arrays
      }
      if (confirm(numericMessage)) {
        bowl = bowl.concat(numericCharacters); // if numerics included, concat the arrays
      }
      if (confirm(specialMessage)) {
        bowl = bowl.concat(specialCharacters); // if specials included, concat the arrays
      }
      // Only if at least one selection was made, we proceed
      if (bowl.length > 0) {
        // Generate salad from the bowl! (from all the selections of characters, we get random picks)
        for (var i = 0, n = bowl.length; i < mySaladSize; ++i) {
          salad += bowl[Math.floor(Math.random() * n)];
        }
        // return the new password
        return salad;
      } else {
        alert(emptyBowlMessage);
      }
    } else {
      alert(sizeNotAllowedMessage);
    }
  }
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
