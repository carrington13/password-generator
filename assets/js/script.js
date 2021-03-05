// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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
let password = "";

let passwordEl = document.querySelector("#password");
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
        // return chosenPassLength;
    }

passLengthCheck();

// Event Listener for generateBtn
generateBtn.addEventListener("click", function() {
    // if useUpperCase is true
    if (useUpperCase) {
        // add upperCaseLetters to characters
        characters += upperCaseLetters;  
    }  
    // if useLowerCase is true
    if (useLowerCase) {
        // add lowerCaseLetters to characters
        characters += lowerCaseLetters;
    }

    // if useNumbers is true
    if (useNumber) {
        // add numbers to characters
        characters += numbers; 
    }
    // if useSpecial is true
    if (useSpecial) {
        // add special to characters
        characters += special;
    }

    console.log(characters);

    //pass word generation
    for (var i = 0; i < chosenPassLength; i++) {
        let randomChar = characters[Math.floor(Math.random() * characters.length)];
        password += randomChar
        console.log(randomChar);
    }

    console.log(password);
    passwordEl.textContent = password;

})