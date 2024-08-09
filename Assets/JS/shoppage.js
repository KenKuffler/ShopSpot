
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const addToCartButton = document.getElementById("button1")
const cartItemsList = document.getElementById('cart-items');
let cart = []
function addToCart() {
  const item = {
    name: "Nike Dunks",
    price: 150
  };

  cart.push(item);
  updateCartDisplay();
  
  
}
function updateCartDisplay() {
  cartItemsList.innerHTML = '';

  cart.forEach((item,index)=>){
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
  });
}
addToCartButton.addEventListener("click",addToCart);