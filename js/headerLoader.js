document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
          updateCartCount();
      })
      .catch(err => console.error("Error loading header:", err));
  
    function updateCartCount() {
      let cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.innerHTML = cart.length;
        console.log(`Cart count updated: ${cartCount.innerHTML}`);
      } else {
        console.error(".cart-count element not found.");
      }
    }
  });
  