// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form inputs
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const description = document.querySelector('#description').value;
    const reason = document.querySelector('#reason').value;


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