// Name - Harsh Bargotra
// Date - 24-02-2024
// Description - This is the js file for Lab 1 as a requirement for INFT 2202 course.

function injectAboutUsContent() {
    // Injecting content for 'About Us' section
    document.getElementById('About-us-text').innerText = 'Hi everyone, My name is Harsh Bargotra. I am from India but currently reside in Canada. Back in India I used to live with my parents and my little brother. For interests, I have always been interested in games indoor, outdoor and video games all of them. Another hobbies that I have are reading and listening to music. I have done some volunteer work back home such as cleaning a nearby and planting trees.';
}

function timeRedirect(e) {
    // Getting details from the contact form.
    let name = document.getElementById('nameInput').value;
    let number = document.getElementById('phoneInput').value;
    let email = document.getElementById('emailInput').value;
    let message = document.getElementById('messageInput').value;

    // Logging the details grabbed from the contact us page.
    console.log("Name: " + name + ", Number: " + number + ", Email: " + email + ", ShortMessage: " + message);

    // Preventing the default form submission behavior.
    e.preventDefault();

    // Setting a timer for 3 seconds and redirecting to the home page after that.
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000);
}

// Getting the submit button
let submitBtn = document.getElementById('submitButton');

// Wiring up the function to the submit button.
if (submitBtn) {
    submitBtn.addEventListener('click', timeRedirect, false);
}

// Wait for the document to be ready
$(document).ready(function () {

    // Functionality for Login Page
    $('#loginForm .btn-login').click(function () {
        var username = $('#username').val();
        var password = $('#password').val();
        var formattedUsername = '<li class="nav-item navbar-text">Welcome, ' + username + '</li>';

        // Insert username between the Contact Us and Login/Logout links
        $('#contactLink').after(formattedUsername);
    });

    // Functionality for Register Page
    // Create ErrorMessage div and initially hide it
    $('#registerForm').prepend('<div id="ErrorMessage" class="alert alert-danger mt-3" style="display: none;"></div>');

    $('#registerForm .btn-register').click(function () {
        // Get values from input fields
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        // Check minimum length for First Name and Last Name
        if (firstName.length < 2 || lastName.length < 2) {
            displayError('First and last name must be at least 2 characters long.');
            return;
        }

        // Check email length and format
        if (email.length < 8 || !email.includes('@')) {
            displayError('Invalid email address.');
            return;
        }

        // Check password matching and length
        if (password.length < 6 || password !== confirmPassword) {
            displayError('Passwords must match and be at least 6 characters long.');
            return;
        }

        // Create User instance (assuming you have a User class)
        var user = new User(firstName, lastName, email, password);

        // Display user information in the console
        console.log(user);

        // Clear the form
        $('#registerForm')[0].reset();
    });

    // Function to display error message
    function displayError(message) {
        $('#ErrorMessage').text(message).show();
    }

    // Function to hide error message
    function hideError() {
        $('#ErrorMessage').hide();
    }
});
