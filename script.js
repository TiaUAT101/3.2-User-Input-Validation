// Function to validate inputs and show the secret message

function validateStrings()
{
    // Get values from input fields
    var firstName = document.getElementById("firstName").value; // Get first name
    var lastName = document.getElementById("lastName").value; // Get last name
    var zipCode = document.getElementById("zipCode").value; // Get zip code

    // Combine first and last names into one variable
    var fullName = firstName + " " + lastName; // Combine names with a space

    // Check if the combined name exceeds 20 characters
    if (fullName.length > 20) {
        document.getElementById("message").innerHTML = "Error: Full name exceeds 20 characters!"; // Show error message
        return; // Stop execution
    }

    // Check if the zip code is valid (5 digits)
    var zipCodeRegex = /^\d{5}$/; // Regex for 5-digit zip code
    if (!zipCodeRegex.test(zipCode)) {
        document.getElementById("message").innerHTML = "Error: Zip code must be exactly 5 digits!"; // Show error message
        return; // Stop execution
    }

    // If inputs are valid, show the secret message
    document.getElementById("message").innerHTML = "Welcome, " + fullName + "! Here's your secret message: Cupcakes are going to be somewhere in the final project stay tuned!"; // Show secret message
    
};
