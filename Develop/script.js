// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// An array for each of the pwContins options
var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var spChar = ['"', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"']

function generatePassword() {
  // Contains the integer entered by user for password length
  var pwLength = parseInt(prompt('How many characters long should your password be? Must be a number between 8-128.'));

  // Only run logic if user makes a valid choice
  if (pwLength >= 8 && pwLength <= 128) {
    var wantsLowers = confirm('Should your password contain lowercase letters?');
    var wantsUppers = confirm('Should your password contain uppercase letters?');
    var wantsNums = confirm('Should your password contain numbers?');
    var wantsSpChar = confirm('Should your password contain special characters?');

    // Empty array that will contain each of the user's chosen password criteria
    var pwContains = [];

    if (wantsLowers) {
      pwContains.push(lowers);
    }
    if (wantsUppers) {
      pwContains.push(uppers);
    }
    if (wantsNums) {
      pwContains.push(nums);
    }
    if (wantsSpChar) {
      pwContains.push(spChar);
    }

    console.log(pwContains);

    // Holds what will become the user's generated password
    var result = "";
    
    // Loop that picks random characters from options user chose
    for (var i = 0; i < pwLength; i++) {
      // randomly pick an array from pwContains
      var randomArray = pwContains[Math.floor(Math.random() * pwContains.length)]
      // randomly pick a character from the array we picked above
      var randomChar = randomArray[Math.floor(Math.random() * randomArray.length)]
      // add character to the password
      result += randomChar;
    }
    
    // Returns the generated password to be displayed in browser window
    return result;


  } else {
    alert('Sorry, please try again with a valid password length.');
  }
}















