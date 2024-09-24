// Function to generate a random password
function generatePassword() {
    let length = document.querySelector('input[type="range"]').value; // Get the length from the range input
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digits = "0123456789";
    let specialChars = "!@#$%&";

    let characters = "";

    // Check which checkboxes are checked and include the relevant characters
    if (document.getElementById("lowercasecb").checked) {
        characters += lowercase;
    }
    if (document.getElementById("uppercasecb").checked) {
        characters += uppercase;
    }
    if (document.getElementById("digitcb").checked) {
        characters += digits;
    }
    if (document.getElementById("Speacialcb").checked) {
        characters += specialChars;
    }

    // Generate the password
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Display the password in the input field
    document.querySelector('.password input').value = password;
}

// Copy password to clipboard function
function copyToClipboard() {
    let passwordInput = document.querySelector('.password input');
    passwordInput.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
}

// Event listener for the generate button
document.querySelector('.genrate').addEventListener('click', generatePassword);

// Event listener for the copy button
document.querySelector('.password button').addEventListener('click', copyToClipboard);

// Update the span value when range slider is changed
document.querySelector('input[type="range"]').addEventListener('input', function() {
    document.querySelector('.range span').textContent = this.value;
});
