// Assignment code here

// Prompt user for password criteria and save it as a variable
// var useUpperCase = confirm("Use uppercase letters?");
// var useLowerCase = confirm("Use lowercase letters?");
// var useSpecial = confirm("Use special characters?");
// var useNumber = confirm("Use numbers?");
// var chosenPassLength = prompt("How many characters do you want your password to be?");
// let characters = "";
//consider saving variables to an object
 
//   upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z' ],
//   lowerCase: "",
//   special: "!",
//   number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//   passLength: 0,
// }
  




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

*/

// Add event listener to generate button
/*generatePasswordBtnEl.addEventListener("click", function() {
  let useUpperCase = window.confirm("Do you want to use uppercase letters?");
  let useLowerCase = window.confirm("Do you want to use lowercase letters?");
  let useNumbers =  window.confirm("Do you want to use numbers?");
  let useSpecial =  window.confirm("Do you want to use special characters?");
  let chosenPassLength = window.prompt("How long do you want the password to be? Please enter a number.");
  
  if (useUpperCase) {
      let characters = characters + upperCase;
  }
  if (useLowerCase) {
      characters = characters + lowerCase;
  }
  if (useNumbers) {
      characters += numbers;
  }
  if (useSpecial) {
      characters += specialChar;
  }
  if (chosenPassLength < 8 || chosenPassLength) {
      window.alert("The password must be at least 8 characters long.");
  } else if (chosenPassLength > 128) {
      window.alert("The password cannot exceed 128 characters.");
      } else {
          for (i = 0; i < chosenPassLength; i++) {
          randomChar = character[Math.floor(Math.random() * characters.length)];
          password = password + randomChar;
          }
        }

      }
)*/


/* consider doing this to add to characters the string, each
character is assigned a indexed value starting at zero and will loop until
selectedLength is achieved.  

var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter); */


    //TODO Add selected criteria lists to an array (characters in example below).
    //TODO let random = characters[Math.floor(Math.Random() * characters.length)] will get a random index from array.
    //TODO loop above Math and save values to a string. Save string to .textContent of password box.

// prompt user for desired password criteria and save it to a variable
var useUpperCase = confirm("Use uppercase letters?");
var useLowerCase = confirm("Use lowercase letters?");
var useSpecial = confirm("Use special characters?");
var useNumber = confirm("Use numbers?");
var chosenPassLengthString = prompt("How many characters do you want your password to be?");
let characters = "";
let chosenPassLength = parseInt(chosenPassLengthString);
console.log(chosenPassLengthString);
// Arrays for all potential characters by type
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqurstuvwxyz";
var numbers = "1234567890";
var special = "~!@#$%^&*()_+{}|`=-[];/<>,.?"

 
// Function to check chosenPassLength's validity
var passLengthCheck = function() {

    if (chosenPassLength < 8 || !chosenPassLength) {
            chosenPassLength = prompt("Your password must be at least 8 characters. Please try again.");

            passLengthCheck();
        } else if (chosenPassLength > 128) {
            chosenPassLength = prompt("Your password must be fewer than 128 characters. Please try again");
            
            passLengthCheck();

        } else if (isNaN(chosenPassLength)) {
            chosenPassLength = prompt("The input must be a number. Please try again.")
            passLengthCheck();
        }

    }

passLengthCheck();
// let i = 0

// for (i = 0; i < characters.length; i++) {
//     console.log(characters[i]);
// }
// Event Listener for generateBtn
generateBtn.addEventListener("click", function() {
    // if useUpperCase is true
    if (useUpperCase) {
        // add upperCaseLetters to characters
        characters += upperCaseLetters;  
    }  
    console.log(characters);
    // if useLowerCase is true
    if (useLowerCase) {
        // add lowerCaseLetters to characters
        characters += lowerCaseLetters;
    }
    console.log(characters);
    // if useNumbers is true
    if (useNumber) {
        // add numbers to characters
        characters += numbers; 
    }
    console.log(characters);
    // if useSpecial is true
    if (useSpecial) {
        // add special to characters
        characters += special;
    }

    
})