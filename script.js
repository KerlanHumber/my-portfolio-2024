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



