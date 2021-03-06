// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array of Objects to hold respective password character values and user selection 
let passCriteria = [
    upperCase = {"characters": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",},
    lowerCase = {"characters": "abcdefghijklmnopqurstuvwxyz",},
    numbers = {"characters": "1234567890",},
    // (Biased Decision) Separate special characters into two objects based on use preference.
    specialOne = {"characters": "~!@?#$%=+",},
    specialTwo = {"characters": "`[]{}|<>/-(^)*:;'",},
]

// Creates variable of textarea element
let passwordEl = document.querySelector("#password");

// function for prompts
let promptUser = function() { 

    // prompt user for character selection by type and capture/push response to relevant object.use in passCritera array.
    upperCase.use = confirm("Use uppercase letters?");
    lowerCase.use = confirm("Use lowercase letters?");
    numbers.use = confirm("Use numbers?");
    specialOne.use = confirm("Use special characters:( ~!@?#$%&=+ )?");
    specialTwo.use = confirm("Use special characters:( `[]{}|<>/-(^)*:;' )?");
}

// Event Listener for generateBtn
generateBtn.addEventListener("click", function() {

    // Declare and reset password for each password generation
    let password = "";
    let passCharacters = "";
    
    // Prompt User for Password Criteria by calling promptUser function
    promptUser();
    
    // Verify at least one character type is chosen by
    // looping promptUser call until at least one is true 
    while (!upperCase.use && !lowerCase.use && !numbers.use && !specialOne.use && !specialTwo.use) {
        // if not valid, tell user they need to pick at least one and ...
        alert("You must select at least one option for your password! Please try again.");
        // call promptUser function again
        promptUser();
    }
        
    // Prompt user for password length
    let chosenPassLength = parseInt(prompt("How many characters do you want your password to be?"));
    
    // Verify user input for chosenPassLength 
    while (chosenPassLength < 8 || chosenPassLength > 128 || isNaN(chosenPassLength) || !chosenPassLength) {
        // if value is unacceptable, prompt them until it is...
        chosenPassLength = parseInt(prompt("The password length must be a number between 8 and 128. Please try again."));
    }

    // loop through array passCriteria
    for (let i = 0; i < passCriteria.length; i++) {
        
        // if passCriteria object.use = true
        if (passCriteria[i].use) {
            // add value of object.characters to passCharacters
            passCharacters += passCriteria[i].characters;
        }
    }

    //password generation
    for (let i = 0; i < chosenPassLength; i++) {
        // Declare variable by selecting a random single character from passCharacters string 
        let randomChar = passCharacters[Math.floor(Math.random() * passCharacters.length)];
        // and add randomChar value to password string.
        password += randomChar;
    }

    // print generated password to screen
    passwordEl.textContent = password;

}
)