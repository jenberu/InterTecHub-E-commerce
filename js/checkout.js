
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItemsContainer = document.getElementById("order-items-container");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");
  
    let subtotal = 0;
    const shippingCost = 10; 
    const taxRate = 0.05; 
  
   
    orderItemsContainer.innerHTML = "";
  
    cart.forEach((item) => {
      const orderItem = document.createElement("div");
      orderItem.className = "order-item";
      orderItem.innerHTML = `
        <img
          class="product-image"
          src="${item.imgurl}"
          alt="${item.name} product image"
        />
        <div class="product-details">
          <p class="product-name">${item.name}</p>
          <p class="product-brand">${item.brand}</p>
          <p class="product-price">$${(item.price * item.quantity).toFixed(2)}</p>
          <p class="product-quantity">Quantity: ${item.quantity}</p>
        </div>
      `;
      orderItemsContainer.appendChild(orderItem);
  
      // Update subtotal
      subtotal += item.price * item.quantity;
    });
  
    // Calculate tax and total
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;
  
    // Update pricing
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
  

 


  document.querySelector('.place-order-button').addEventListener('click', handlePlaceOrder);
  function handlePlaceOrder() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Clear the cart
    localStorage.setItem("cart", JSON.stringify([]));
    alert(" Order placed successfully ,Thank you for your order!");
    window.location.href = "index.html";

}

  });
  