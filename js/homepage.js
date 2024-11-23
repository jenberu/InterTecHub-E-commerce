function toggleMenu(isOpen) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcons = document.querySelector('.menu-icons');
  
    if (isOpen) {
      navLinks.classList.add('show'); // Show menu
      menuIcons.classList.add('open'); // Switch to close icon
    } else {
      navLinks.classList.remove('show'); // Hide menu
      menuIcons.classList.remove('open'); // Switch to open icon
    }
  }



const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      id: button.getAttribute("data-id"),
      name: button.getAttribute("data-name"),
      brand: button.getAttribute("data-brand"),
      price: parseFloat(button.getAttribute("data-price")),
      quantity: 1, 
      size: "M", 
      color: "default", 
      rating: button.getAttribute("data-rating"),
      imgurl:button.getAttribute("data-product-image"),
    };

    // Save to Local Storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
      cart = [];
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to cart page
    window.location.href = "cart.html";
  });
});




  // Function to load content