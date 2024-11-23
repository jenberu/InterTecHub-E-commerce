const products = [
    {
      id: 1,
      name: "French Kiss Bag",
      brand: "ALDO",
      price: 500,
      category: "Women",
      rating: "2k+ rating",
      imgurl: "images/_03-d-69120-edd-5-c-8-b-1-e-2-c-140-e-4-dc-7-f-254-e-20.png",
      wishlistIcon: "images/gridicons-heart-outline0.svg",
      stockStatus: "In Stock",
      ratingIcon: "images/star-10.svg",
    },
    {
      id: 2,
      name: "Burberry Shine",
      brand: "FENDI",
      price: 150,
      category: "Kids",
      rating: "1k+ rating",
      imgurl: "images/_61-oej-shh-py-l-sy-625-20.png",
      wishlistIcon: "images/gridicons-heart-outline1.svg",
      stockStatus: "In Stock",
      ratingIcon: "images/star-11.svg",
    },
    {
      id: 3,
      name: "Alvero Gown",
      brand: "DIVINE",
      price: 300,
      category: "Women",
      rating: "5K+ rating",
      imgurl: "images/_150577-brown-9-20.png",
      wishlistIcon: "images/gridicons-heart-outline2.svg",
      stockStatus: "In Stock",
      ratingIcon: "images/star-12.svg",
    },
];
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
  
    function renderProducts(products) {
      productGrid.innerHTML = ""; // Clear existing content
  
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
          <div class="product-header">
            <button class="wishlist-button">
              <img src="${product.wishlistIcon}" alt="Add to Wishlist" />
            </button>
            <span class="stock-status">${product.stockStatus}</span>
          </div>
          <div class="product-image">
            <img src="${product.imgurl}" alt="${product.name}" />
          </div>
          <div class="product-details">
            <span class="product-category">${product.category}</span>
            <div class="product-rating">
              <img src="${product.ratingIcon}" alt="Rating Star" />
              <span>${product.rating}</span>
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <span class="product-brand">${product.brand}</span>
          </div>
          <div class="price-button">
            <span class="product-price">$${product.price}</span>
            <button
              class="add-to-cart-button"
              data-id="${product.id}"
              data-name="${product.name}"
              data-brand="${product.brand}"
              data-price="${product.price}"
              data-product-image="${product.imgurl}"
              data-rating="${product.rating}"
            >
              Add to Cart
            </button>
          </div>
        `;
        productGrid.appendChild(productCard);
      });
    }
  
    // Render the products
    renderProducts(products);
  });
  