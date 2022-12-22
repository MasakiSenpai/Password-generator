// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
   console.log("Stop pressing me");
    var characterTypes = {
     uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
     lowercase: "abcdefghijklmnopqrstuvwxyz",
     numeric: "0123456789",
     special: ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~ '
    };
    var userPassword ="";
    var chosenCharacters = "";

    var length = Number(prompt("How many characters would you like the passwork to contain?"));
    length = parseInt(length);
    if (length < 8) {
      alert("Sorry, must contain 8 or more characters!");
    }
    if (length > 128) {
      alert("Sorry, password must have 128 or less characters!");
    }

    var lowerCase = confirm("Wanna add Lowercase characters?");
    if (lowerCase) {
      chosenCharacters += characterTypes.lowercase;
    }

    var upperCase = confirm("Need some Uppercases in your life?");
    if (upperCase) {
      chosenCharacters += characterTypes.uppercase;
    }

    var wantnumbers = confirm("Numbers prove to increase password security, shall we?");
    if (wantnumbers) {
      chosenCharacters += characterTypes.numeric;
    }

    var specialCharacters = confirm("A special person needs special characters right?");
    if (specialCharacters) {
      chosenCharacters += characterTypes.special;
    }
    console.log(password)
    for (var i = 0; i < length; i++) {
      userPassword += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]
    }
    // return "Generated Password will appear here";
    return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
