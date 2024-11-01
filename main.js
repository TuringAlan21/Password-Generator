

// Array of characters to use in password generation
const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
  ];
  
  // Select input elements for generated passwords
  let input1 = document.getElementById("passwordOne");
  let input2 = document.getElementById("passwordTwo");
  
  // Password generation function
  function generateRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  
  // Event listener for the "Generate Passwords" button
  let generateBtn = document.getElementById("passwords");
  generateBtn.addEventListener("click", function () {
    const passwordLength = 12; // You can adjust the password length here
    input1.value = generateRandomPassword(passwordLength);
    input2.value = generateRandomPassword(passwordLength);
  });


