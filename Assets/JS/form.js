// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form inputs
    const nameElement = document.querySelector('#name');
    const emailElement = document.querySelector('#email');
    const phoneElement = document.querySelector('#phone');
    const descriptionElement = document.querySelector('#description');
    const reasonElement = document.querySelector('#reason');

    // Check if the elements exist before accessing their values
    const name = nameElement ? nameElement.value : '';
    const email = emailElement ? emailElement.value : '';
    const phone = phoneElement ? phoneElement.value : '';
    const description = descriptionElement ? descriptionElement.value : '';
    const reason = reasonElement ? reasonElement.value : '';

    // Create an object to store the form info
    const formData = {
        name,
        email,
        phone,
        description,
        reason,
    };

    // Convert the form data to a string
    const formDataString = JSON.stringify(formData);

    // Store the form data in local storage
    localStorage.setItem('formData', formDataString);
    console.log(`formData: ${formDataString}`);
    
    // Reset the form
    form.reset();
});

