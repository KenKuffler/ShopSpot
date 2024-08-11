// Retrieve cart items from session storage and populate the checkout page
function populateCheckoutPage() {
    const cartItemsString = sessionStorage.getItem('cartItems');
    if (cartItemsString) {
        const cartItems = JSON.parse(cartItemsString);
        const mainElement = document.querySelector('main');

        if (Array.isArray(cartItems)) {
            cartItems.forEach(cartItem => {
                // Create a section element for each cart item
                const sectionElement = document.createElement('section');
                sectionElement.classList.add('container');

                // Populate the section element with cart item details
                const imageElement = document.createElement('img');
                imageElement.src = cartItem.image;
                sectionElement.appendChild(imageElement);

                const divElement1 = document.createElement('div');
                divElement1.classList.add('text');
                sectionElement.appendChild(divElement1);

                const nameElement = document.createElement('h2');
                nameElement.textContent = cartItem.name;
                divElement1.appendChild(nameElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = cartItem.description;
                divElement1.appendChild(descriptionElement);

                const divElement2 = document.createElement('div');
                divElement2.classList.add('price');
                sectionElement.appendChild(divElement2);

                const priceElement = document.createElement('p');
                priceElement.id = 'price';
                priceElement.textContent = cartItem.price;
                divElement2.appendChild(priceElement);

                // Create a delete button for each cart item
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Remove Item';
                divElement2.appendChild(deleteButton);
                deleteButton.addEventListener('click', function() {
                    // Remove the item from the cartItems array
                    const index = cartItems.indexOf(cartItem);
                    if (index > -1) {
                        cartItems.splice(index, 1);
                    }

                    // Update session storage with the updated cartItems
                    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

                    // Remove the item from the checkout page
                    sectionElement.remove();

                    // Update the total price
                    updateTotalPrice();
                });

                // Append the section element to the main element
                mainElement.appendChild(sectionElement);
            });
        }
    }
}

// Call the function to populate the checkout page
populateCheckoutPage();