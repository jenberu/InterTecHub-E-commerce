document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
          updateCartCount();
      })
      .catch(err => console.error("Error loading header:", err));
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
      let cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.innerHTML = cart.length;
        console.log(`Cart count updated: ${cartCount.innerHTML}`);
      } else {
        console.error(".cart-count element not found.");
      }
  }
  


  function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(cart));
  
    updateCartCount();
    window.location.href = "homePage.html";

  }


  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      const productId = event.target.getAttribute("data-id");
      removeFromCart(productId);
    }
  });


  

  });
  