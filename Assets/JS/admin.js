function populateAdminPage() {
    const formDataString = sessionStorage.getItem('formDataArray');
    if (formDataString) {
        const formItems = JSON.parse(formDataString);
        const mainElement = document.querySelector('main');
        
        if (Array.isArray(formItems)) {
            // Clear existing content in the main element
            mainElement.innerHTML = '';

            formItems.forEach(formItem => {
                // Create a section element for each form item
                const sectionElement = document.createElement('section');
                sectionElement.classList.add('container');

                // Populate the section element with form item details
                const divElement1 = document.createElement('div');
                divElement1.classList.add('contact'); // Added class for styling
                sectionElement.appendChild(divElement1);

                const nameElement = document.createElement('h2');
                nameElement.textContent = formItem.name; // Corrected property
                divElement1.appendChild(nameElement);

                const phoneElement = document.createElement('p');
                phoneElement.textContent = formItem.phone;
                divElement1.appendChild(phoneElement);

                const emailElement = document.createElement('p');
                emailElement.textContent = formItem.email;
                divElement1.appendChild(emailElement);

                const divElement2 = document.createElement('div');
                divElement2.classList.add('description'); // Added class for styling
                sectionElement.appendChild(divElement2);

                const reasonElement = document.createElement('h2');
                reasonElement.textContent = formItem.reason;
                divElement2.appendChild(reasonElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = formItem.description;
                divElement2.appendChild(descriptionElement);

                const divElement3 = document.createElement('div');
                divElement3.classList.add('delete'); // Added class for styling
                sectionElement.appendChild(divElement3);

                // Create a delete button for each form item
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Remove Submission';
                divElement3.appendChild(deleteButton);

                deleteButton.addEventListener('click', function() {
                    // Remove the item from the formItems array
                    const index = formItems.indexOf(formItem);
                    if (index > -1) {
                        formItems.splice(index, 1);
                    }

                    // Update session storage with the updated form data
                    sessionStorage.setItem('formDataArray', JSON.stringify(formItems));

                    // Remove the item from the admin page
                    sectionElement.remove();
                });

                // Append the section element to the main element
                mainElement.appendChild(sectionElement);
            });
        }
    }
}

// Call the function to populate the admin page
populateAdminPage();

