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




const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        isValid = false;
        // Display error message for name
    }

    // Validate email
    if (!isValidEmail(emailInput.value)) {
        isValid = false;
        // Display error message for email
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        isValid = false;
        // Display error message for message
    }

    if (isValid) {
        // Submit the form 
    }
});

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
