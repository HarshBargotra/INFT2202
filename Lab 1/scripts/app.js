// Name - Harsh Bargotra
// Date - 11-02-2024
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
