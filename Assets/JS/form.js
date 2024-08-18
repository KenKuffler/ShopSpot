// Get the form element
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form inputs
    const nameElement = document.querySelector('#name');
    const emailElement = document.querySelector('#email');
    const phoneElement = document.querySelector('#phone');
    const descriptionElement = document.querySelector('#description');
    const reasonElement = document.querySelector('#reason');

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const description = descriptionElement.value;
    const reason = reasonElement.value;

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

    // Retrieve existing form data from session storage
    const existingFormDataString = sessionStorage.getItem('formDataArray');
    let existingFormData = [];
    
    // Check if there is existing form data and it is an array
    if (existingFormDataString) {
        existingFormData = JSON.parse(existingFormDataString);
        if (!Array.isArray(existingFormData)) {
            existingFormData = [];
        }
    }
    
    // Add the current form data to the existing form data array
    existingFormData.push(formData);

    // Convert the updated form data array to a string
    const updatedFormDataString = JSON.stringify(existingFormData);

    // Store the updated form data in session storage
    sessionStorage.setItem('formDataArray', updatedFormDataString);
    console.log(`Updated formData: ${updatedFormDataString}`);

    // Reset the form
    form.reset();
});
