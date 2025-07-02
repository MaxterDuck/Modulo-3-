// product_manager.js

const readline = require("readline");
// Use dynamic import to bring in node-fetch (for use in CommonJS)
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

// URL of the JSON server endpoint
const URL = "http://localhost:3000/products";

// 📄 Display all products in a formatted table
async function viewProducts() {
  try {
    const res = await fetch(URL);
    const products = await res.json();

    console.log("\n📋 PRODUCT LIST:");
    console.log("=".repeat(50));
    console.table(products, ["id", "name", "price"]);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
  }
}

// ➕ Add a new product (avoids duplicates)
async function addProduct() {
  rl.question("📦 Product name: ", name => {
    rl.question("💲 Price: ", async priceInput => {
      const price = parseFloat(priceInput);

      if (!name || isNaN(price)) {
        console.log("❌ Invalid input.");
        showMenu();
        return;
      }

      try {
        const res = await fetch(URL);
        const products = await res.json();

        // Check if product already exists
        const exists = products.some(p =>
          p.name.toLowerCase() === name.toLowerCase() && p.price === price
        );

        if (exists) {
          console.log("⚠️ Product already exists. It was not added.");
        } else {
          const newProduct = { name, price };
          const create = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
          });
          const result = await create.json();
          console.log("✅ Product added:", result);
        }
      } catch (err) {
        console.error("❌ Error adding product:", err);
      }
      showMenu();
    });
  });
}

// 🔄 Update a product by ID
async function updateProduct() {
  rl.question("🆔 ID of the product to update: ", id => {
    rl.question("📦 New name: ", name => {
      rl.question("💲 New price: ", async priceInput => {
        const price = parseFloat(priceInput);

        if (!id || !name || isNaN(price)) {
          console.log("❌ Invalid input.");
          showMenu();
          return;
        }

        try {
          const res = await fetch(`${URL}/${id}`);
          if (!res.ok) {
            console.log("❌ Product not found.");
            showMenu();
            return;
          }

          const update = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, price })
          });

          const result = await update.json();
          console.log("✅ Product updated:", result);
        } catch (err) {
          console.error("❌ Error updating product:", err);
        }
        showMenu();
      });
    });
  });
}

// ❌ Delete a product by ID
async function deleteProduct() {
  rl.question("🆔 ID of the product to delete: ", async id => {
    try {
      const remove = await fetch(`${URL}/${id}`, { method: "DELETE" });

      if (remove.ok) {
        console.log("🗑 Product deleted successfully.");
      } else {
        console.log("❌ Product not found.");
      }
    } catch (err) {
      console.error("❌ Error deleting product:", err);
    }
    showMenu();
  });
}

// 📜 Display main menu and handle user choices
function showMenu() {
  console.log("\n📚 MAIN MENU");
  console.log("1. View products");
  console.log("2. Add product");
  console.log("3. Update product");
  console.log("4. Delete product");
  console.log("0. Exit");

  rl.question("Select an option: ", async choice => {
    switch (choice) {
      case "1":
        await viewProducts();
        showMenu();
        break;
      case "2":
        addProduct();
        break;
      case "3":
        updateProduct();
        break;
      case "4":
        deleteProduct();
        break;
      case "0":
        console.log("👋 Goodbye!");
        rl.close();
        process.exit(0);
        break;
      default:
        console.log("❌ Invalid option.");
        showMenu();
        break;
    }
  });
}

// 🧠 Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ▶️ Start the program
showMenu();
