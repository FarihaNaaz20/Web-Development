const products = [
  {
    name: "Bluetooth Headphones",
    price: "$29.99",
    img: "https://images.unsplash.com/photo-1585386959984-a415522e3f0b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Smart Watch",
    price: "$45.00",
    img: "https://images.unsplash.com/photo-1519741491158-61e4f2f8e9e2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "USB-C Power Bank",
    price: "$18.99",
    img: "https://images.unsplash.com/photo-1615906026511-b1531c13d264?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Wireless Mouse",
    price: "$12.49",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b84f95b?auto=format&fit=crop&w=400&q=80"
  }
];

let cartCount = 0;
let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");
  const cartCountDisplay = document.getElementById("cart-count");
  const cartIcon = document.querySelector(".cart");
  const cartModal = document.getElementById("cart-modal");
  const cartList = document.getElementById("cart-items");
  const closeBtn = document.querySelector(".close-btn");

  products.forEach(prod => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}" loading="lazy">
      <h3>${prod.name}</h3>
      <p>${prod.price}</p>
      <button>Add to Cart</button>
    `;
    const button = div.querySelector("button");
    button.addEventListener("click", () => {
      cartCount++;
      cartItems.push(prod);
      cartCountDisplay.textContent = cartCount;
      alert(`${prod.name} added to cart!`);
    });
    container.appendChild(div);
  });

  cartIcon.addEventListener("click", () => {
    cartList.innerHTML = "";
    if (cartItems.length === 0) {
      cartList.innerHTML = "<li>Your cart is empty.</li>";
    } else {
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartList.appendChild(li);
      });
    }
    cartModal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === cartModal) {
      cartModal.style.display = "none";
    }
  });

  // Contact form submission
  const form = document.querySelector(".contact form");
  const msgBox = document.getElementById("form-message");

  form.addEventListener("submit", e => {
    e.preventDefault();
    msgBox.textContent = "Thank you for contacting us! We'll get back to you soon.";
    msgBox.style.display = "block";
    setTimeout(() => {
      msgBox.style.display = "none";
      form.reset();
    }, 4000);
  });
});
