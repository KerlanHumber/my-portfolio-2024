// Get all "Show Details" buttons
const showDetailsButtons = document.querySelectorAll('.show-details');

// Iterate over each button and add an event listener
showDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the associated details section
        const details = button.nextElementSibling;

        // Toggle the visibility of the details section
        if (details.style.display === 'none') {
            details.style.display = 'block';
            button.textContent = 'Hide Details';
        } else {
            details.style.display = 'none';
            button.textContent = 'Show Details';
        }
    });
});




// Variable for the submit form button
const submitFormBtn = document.getElementById("submitFormButton")

// Variables for the inputs of the form as well as the form itself
const contactFormID = document.getElementById("contactFormID");
const nameInput = document.getElementById('nameInput');
const companyInput = document.getElementById('companyInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const messageInput = document.getElementById('messageInput');

// Variables getting error elements for the registration form
const nameError = document.getElementById('nameError');
const companyError = document.getElementById('companyError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageeError');

// Success message for theform
const successMessage = document.getElementById('successMessage');



    contactFormID.addEventListener('submit', function(event) {
        nameError.textContent = '';
        companyError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';

        let isValid = true;

        // if statement for the name input
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            event.preventDefault();
            isValid = false
        }

        // if statement for the company input
        if (companyInput.value.trim() === '') {
            companyError.textContent = 'Please enter your name';
            event.preventDefault();
            isValid = false
        }

        // if/else statement for the email input
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email';
            event.preventDefault();
            isValid = false
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            event.preventDefault();
            isValid = false
        }

        // if statement for the phone number input
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Please enter your name';
            event.preventDefault();
            isValid = false
        }

        // if statement for the message input
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your name';
            event.preventDefault();
            isValid = false
        }

        if (isValid) {
            nameInput.value = '';
            companyInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';
            successMessage.textContent = 'Form submitted successfully!';

        }
    
        event.preventDefault(); // Prevents form submission
    });

    let validateEmail = (emailInput) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(String(emailInput));
    }