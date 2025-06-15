// To-Do List Logic
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const listEl = document.getElementById("todo-list");

function renderTasks() {
  listEl.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };
    li.appendChild(delBtn);
    listEl.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("todo-input");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    input.value = "";
  }
}
renderTasks();

// Product List Logic
const products = [
  { name: "Smartphone", category: "Electronics", price: 699, rating: 4.5 },
  { name: "Laptop", category: "Electronics", price: 1200, rating: 4.7 },
  { name: "Wireless Earbuds", category: "Electronics", price: 59, rating: 4.1 },
  { name: "The Alchemist", category: "Books", price: 15, rating: 4.9 },
  { name: "Notebook", category: "Books", price: 7, rating: 4.2 },
  { name: "LED Monitor", category: "Electronics", price: 199, rating: 4.3 },
  { name: "Bluetooth Speaker", category: "Electronics", price: 89, rating: 4.4 },
  { name: "JavaScript Guide", category: "Books", price: 25, rating: 4.6 },
  { name: "Phone Stand", category: "Electronics", price: 10, rating: 4.0 },
  { name: "Kindle Paperwhite", category: "Electronics", price: 129, rating: 4.8 },
  { name: "Self Help Book", category: "Books", price: 12, rating: 4.5 },
  { name: "Graphic Tablet", category: "Electronics", price: 89, rating: 4.2 },
  { name: "Fiction Novel", category: "Books", price: 9, rating: 4.3 },
  { name: "USB-C Charger", category: "Electronics", price: 20, rating: 4.4 },
  { name: "Book Light", category: "Books", price: 8, rating: 4.1 }
];

let filteredProducts = [...products];

function displayProducts(list) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating} ⭐</p>
    `;
    container.appendChild(div);
  });
}
displayProducts(filteredProducts);

function filterProducts() {
  const category = document.getElementById("category-filter").value;
  filteredProducts = category === "all" ? [...products] : products.filter(p => p.category === category);
  sortProducts(); // apply sort after filtering
}

function sortProducts() {
  const option = document.getElementById("sort-option").value;
  if (option === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (option === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  displayProducts(filteredProducts);
}
