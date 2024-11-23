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
          <p>Rating: ${item.rating} stars</p>
  
          <div class="cart-item-size">
            <label for="size-${item.id}">Size:</label>
            <select id="size-${item.id}" data-id="${item.id}" class="size-select">
              <option value="S" ${item.size === "S" ? "selected" : ""}>S</option>
              <option value="M" ${item.size === "M" ? "selected" : ""}>M</option>
              <option value="L" ${item.size === "L" ? "selected" : ""}>L</option>
            </select>
          </div>
  
          <div class="cart-item-color">
            <label for="color-${item.id}">Color:</label>
            <select id="color-${item.id}" data-id="${item.id}" class="color-select">
              <option value="default" ${item.color === "default" ? "selected" : ""}>Default</option>
              <option value="red" ${item.color === "red" ? "selected" : ""}>Red</option>
              <option value="blue" ${item.color === "blue" ? "selected" : ""}>Blue</option>
            </select>
          </div>
  
          <div class="cart-item-quantity">
            <button class="quantity-button minus" data-id="${item.id}">-</button>
            <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" class="quantity-input" />
            <button class="quantity-button plus" data-id="${item.id}">+</button>
          </div>
        </div>
      `;
  
      cartContainer.appendChild(cartItem);
      total += item.price * item.quantity;
  
      // Handle size change
      const sizeSelect = cartItem.querySelector(`#size-${item.id}`);
      sizeSelect.addEventListener("change", (e) => {
        item.size = e.target.value;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateTotal();
      });
  
      // Handle color change
      const colorSelect = cartItem.querySelector(`#color-${item.id}`);
      colorSelect.addEventListener("change", (e) => {
        item.color = e.target.value;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateTotal();
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
      total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      cartTotal.textContent = `$${total.toFixed(2)}`;
    }
  
    // Initialize total
    updateTotal();
  });
  