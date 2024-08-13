function populateCheckoutPage() {
    const cartItemsString = sessionStorage.getItem('cartItems');
    if (cartItemsString) {
        const cartItems = JSON.parse(cartItemsString);
        const mainElement = document.querySelector('main');
        
        if (Array.isArray(cartItems)) {
            // Clear existing content in the main element
            mainElement.innerHTML = '';

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
                priceElement.classList.add('item-price');  // Changed id to class for multiple items
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

                    // Update the total price after removing an item
                    displayTotalPrice();
                });

                // Append the section element to the main element
                mainElement.appendChild(sectionElement);
            });

            // Display the total price
            displayTotalPrice();
        } else {
            console.error('cartItems is not an array:', cartItems);
        }
    } else {
        console.error('No cartItems found in sessionStorage');
    }
}

// Function to calculate and display the total price of all items in the cart
function displayTotalPrice() {
    const cartItemsString = sessionStorage.getItem('cartItems');
    if (cartItemsString) {
        const cartItems = JSON.parse(cartItemsString);
        let totalPrice = 0;

        if (Array.isArray(cartItems)) {
            cartItems.forEach(cartItem => {
                // Debug log to check the structure and price
                console.log('Cart Item:', cartItem);

                // Clean up the price string by removing non-numeric characters except the decimal point
                let cleanedPrice = cartItem.price.replace(/[^0-9.]/g, '');

                // Convert to a floating point number
                const itemPrice = parseFloat(cleanedPrice);
                console.log('Cleaned Price:', cleanedPrice);  // Debug log to check cleaned price
                console.log('Parsed Price:', itemPrice);       // Debug log to check parsed price

                if (!isNaN(itemPrice)) {
                    totalPrice += itemPrice;
                } else {
                    console.error('Invalid price:', cartItem.price);  // Log error if price is invalid
                }
            });
        } else {
            console.error('cartItems is not an array:', cartItems);
        }

        // Check for an existing total price element and update or create a new one
        let totalPriceElement = document.querySelector('.total-price');
        if (!totalPriceElement) {
            totalPriceElement = document.createElement('p');
            totalPriceElement.classList.add('total-price');
            const mainElement = document.querySelector('main');
            mainElement.appendChild(totalPriceElement);
        }
        
        totalPriceElement.textContent = 'Total Price: $' + totalPrice.toFixed(2);

        // Debug log to check the total price
        console.log('Total Price:', totalPrice);
    } else {
        console.error('No cartItems found in sessionStorage');
    }
}


// Call the function to populate the checkout page
populateCheckoutPage();

// Create a button element for proceeding to payment
const proceedButton = document.createElement('button');
proceedButton.classList.add('payment-button');
proceedButton.textContent = 'Proceed to Payment';
const mainElement = document.querySelector('main');
mainElement.appendChild(proceedButton);
proceedButton.addEventListener('click', function() {
    // Redirect to payment.html
    window.location.href = 'payment.html';
});

