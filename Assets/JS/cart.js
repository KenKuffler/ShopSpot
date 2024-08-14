// Get the button elements
const addButton = document.getElementById('addCart1');
const addButton2 = document.getElementById('addCart2');
const addButton3 = document.getElementById('addCart3');

// Add click event listeners to the buttons
addButton.addEventListener('click', addToCart);
addButton2.addEventListener('click', addToCart);
addButton3.addEventListener('click', addToCart);

// Function to handle adding to cart
function addToCart(event) {
    // Get the button element that triggered the event
    const button = event.target;

    // Get the corresponding elements based on the button's id
    const index = button.id.slice(-1);
    const nameElement = document.querySelector(`#pName${index}`);
    const imageElement = document.querySelector(`#pImage${index}`);
    const descriptionElement = document.querySelector(`#pDescription${index}`);
    const priceElement = document.querySelector(`#pPrice${index}`);

    // Check if the elements exist before accessing their values
    if (nameElement && imageElement && descriptionElement && priceElement) {
        const name = nameElement.textContent;
        const image = imageElement.getAttribute('src');
        const description = descriptionElement.textContent;
        const price = priceElement.textContent;

        // Create an object to store the values
        const item = {
            name,
            image,
            description,
            price
        };

        // Retrieve the existing cart items from session storage
        let cartItems = sessionStorage.getItem('cartItems');
        cartItems = cartItems ? JSON.parse(cartItems) : [];

        // Add the new item to the cart items array
        cartItems.push(item);

        // Convert the updated cart items array back to a string
        const updatedCartItemsString = JSON.stringify(cartItems);

        // Store the updated cart items string in session storage
        sessionStorage.setItem('cartItems', updatedCartItemsString);

        // display a success message
        alert('Item added to cart!');

        // log the updated cart items
        console.log(`Updated cartItems: ${updatedCartItemsString}`);
    } else {
        console.error('One or more elements not found.');
    }
}



