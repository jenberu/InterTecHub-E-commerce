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
      description: "A chic and elegant handbag designed for modern women. Perfect for both casual and formal occasions, it adds a touch of sophistication to your outfit.",
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
      description: "A stylish and durable backpack for kids. Featuring vibrant colors and ample space, it is perfect for school or day trips.",
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
      description: "An exquisite evening gown crafted from premium fabric. This gown is tailored to accentuate your elegance for special occasions.",
    },
  ];
  


const collections = [
    { img: "images/images-10.png", alt: "Shoes", title: "Shoes" },
    { img: "images/images-20.png", alt: "Bags", title: "Bags" },
    { img: "images/ghost-mannequin-beige-womens-puffer-600-nw-2482912771-20.png", alt: "Jackets", title: "Jackets" },
    { img: "images/images-30.png", alt: "Lingerie", title: "Lingerie" },
    { img: "images/download-10.png", alt: "Belts", title: "Belts" },
    { img: "images/images-40.png", alt: "Street Wear", title: "Street Wear" },
    { img: "images/personalized-big-size-human-head-sun-glasses-instagram-oversize-fashion-pink-type-pc-sunglasses-women-men-10.png", alt: "Sunglasses", title: "Sunglasses" },
    { img: "images/f-939-e-1-d-9-85-aa-4-bd-8-bf-43-0-dd-73-ef-4001-b-9-ad-3-eb-73-ad-803-c-9733563382957-d-42-c-3-10.png", alt: "Sun Wear", title: "Sun Wear" },
    { img: "images/pngtree-women-hat-png-image-521498-10.png", alt: "Hats", title: "Hats" },
    { img: "images/ftw-1239-womens-striped-slippers-1-450-x-450-10.png", alt: "Slippers", title: "Slippers" },
    { img: "images/wigs-10.png", alt: "Wigs", title: "Wigs" },
    { img: "images/_61-n-mt-oe-2-kl-sl-1500-83801-10.png", alt: "Cosmetics", title: "Cosmetics" },
  ];
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
    const collectionsGrid = document.querySelector(".collections-grid");

  
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
              data-description="${product.description}"
            >
              Add to Cart
            </button>
          </div>
        `;
        productGrid.appendChild(productCard);
      });
    }

function renderCollections(collections) {
  collectionsGrid.innerHTML = ""; // Clear existing content

  collections.forEach((collection) => {
    const collectionItem = `
      <div class="collection-item">
        <img src="${collection.img}" alt="${collection.alt}" />
        <div class="collection-info">
          <h3>${collection.title}</h3>
          <p>See all collections</p>
        </div>
      </div>
    `;
    collectionsGrid.insertAdjacentHTML("beforeend", collectionItem);   });
    }
 renderProducts(products);


    renderCollections(collections);
    


    
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
      imgurl: button.getAttribute("data-product-image"),
      description: button.getAttribute("data-description"),
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
  });
  