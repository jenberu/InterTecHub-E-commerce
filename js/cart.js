document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    let total = 0;
  
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
  
      cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.imgurl}" alt="${item.name}" />
        </div>
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>Brand: ${item.brand}</p>
          <p>Price: $${item.price}</p>
          <p>Total: <span id="total-${item.id}">$${(item.quantity * item.price).toFixed(2)}</span></p>

           <p>
           <img src="./images/star-12.svg" alt="Rating Star" /> ${item.rating}</p>           
       <p class="cart-item-quantity">
            <label for="quantity-${item.id}">Quantity:</label>
            <button class="quantity-button minus" data-id="${item.id}">-</button>
            <input type="text" id="quantity-${item.id}" value="${item.quantity}" min="1" class="quantity-input" />
            <button class="quantity-button plus" data-id="${item.id}">+</button>
          </p>
        <div class="cart-item-size">
          <p class="size-options" data-id="${item.id}">
            <label>Size:</label>

            <button class="size-button ${item.size === "20" ? "active" : ""}" data-size="20">20</button>
            <button class="size-button ${item.size === "25" ? "active" : ""}" data-size="25">25</button>
            <button class="size-button ${item.size === "30" ? "active" : ""}" data-size="30">30</button>
          </p>
        </div>
  
        <div class="cart-item-color">
            <p class="color-options" data-id="${item.id}">
              <label>Color:</label>
              <button class="color-box blue ${item.color === 'blue' ? 'active' : ''}" data-color="blue"></button>
              <button class="color-box red ${item.color === 'red' ? 'active' : ''}" data-color="red"></button>
              <button class="color-box black ${item.color === 'black' ? 'active' : ''}" data-color="black"></button>
              <button class="color-box brown ${item.color === 'brown' ? 'active' : ''}" data-color="brown"></button>
            </p>
         </div>
          <div class="cart-actions">
          <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
          <button class="buy-now" data-id="${item.id}">Buy Now</button>
        </div>
        </div>
      `;
  
      cartContainer.appendChild(cartItem);
      total += item.price * item.quantity;
  
      // Handle size change
    // Add event listener for size selection buttons
const sizeOptions = cartItem.querySelector(".size-options"); // Select the size options container
sizeOptions.addEventListener("click", (e) => {
  if (e.target.classList.contains("size-button")) {
    const selectedSize = e.target.dataset.size; // Get the size value from the button
    item.size = selectedSize; // Update the item size in the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart to localStorage

    // Remove 'active' class from all size buttons in this item
    sizeOptions.querySelectorAll(".size-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    e.target.classList.add("active");
  }
  updateTotal();
});

  
    // Handle color change with color boxes
const colorOptions = cartItem.querySelector(".color-options");
colorOptions.addEventListener("click", (e) => {
  if (e.target.classList.contains("color-box")) {
    const selectedColor = e.target.dataset.color; // Get the selected color from the clicked button
    item.color = selectedColor; // Update the item's color in the cart array
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
    updateTotal(); // Update the cart total

    // Update the active state of color buttons
    colorOptions.querySelectorAll(".color-box").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

  
      // Handle quantity change via buttons
      const quantityInput = cartItem.querySelector(`#quantity-${item.id}`);
      const minusButton = cartItem.querySelector(`.quantity-button.minus`);
      const plusButton = cartItem.querySelector(`.quantity-button.plus`);
  
      minusButton.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity -= 1;
          quantityInput.value = item.quantity;
          localStorage.setItem("cart", JSON.stringify(cart));
          updateTotal();
        }
      });
  
      plusButton.addEventListener("click", () => {
        item.quantity += 1;
        quantityInput.value = item.quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateTotal();
      });
  
      // Handle quantity input directly
      quantityInput.addEventListener("change", (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
          item.quantity = newQuantity;
          localStorage.setItem("cart", JSON.stringify(cart));
          updateTotal();
        } else {
          e.target.value = item.quantity;
        }
      });
    });
  
    // Update total
    function updateTotal() {
      // Calculate the total for the entire cart
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
      // Update the total amount in the cart summary
      const cartTotal = document.getElementById("cart-total");
      if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
      }
    
      // Update the total for each individual cart item
      cart.forEach((item) => {
        const itemTotalElement = document.querySelector(`#total-${item.id}`);
        if (itemTotalElement) {
          itemTotalElement.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
        }
      });
    
      // Save the cart in localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    
  
    // Initialize total
    updateTotal();
  });
  