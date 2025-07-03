# 🛠️ Product Management Project – Módulo 3, Semana 3

This repository contains a basic **product management system**,
created as part of **Module 3 – Week 3** training.
The goal is to practice **CRUD operations** (Create, Read, Update, Delete) both in the terminal and through a browser interface using **modern JavaScript** and **JSON Server**.

---

## 📁 Project Structure

Entrenamiento M3S3/

│
├
── db.json

│ └── Simulated database containing product data.
│

├
── management_api.js

│ └── CLI script for managing products via the terminal.

│
├
── reset_db.js

│ └── Resets db.json to its original product list.

│
└
── index.html

└── Web interface to view, add, and delete products.


---

## 🔧 Requirements

- **Node.js** and **npm**
- Install **JSON Server** globally:
  ```bash
  npm install -g json-server
🚀 How to Run the Project

**1. Clone the repository and enter the folder:**

git clone https://github.com/MaxterDuck/Modulo-3-

cd "Modulo-3-/Semana 3/Entrenamiento M3S3"

**2. Install local dependencies (like node-fetch):**

``` npm install ```

**3. Start JSON Server:**
```js json-server --watch db.json --port 3000
```
Keep this terminal open while working.

**4. Open another terminal and run the CLI:**
```jsnode management_api.js```

Use the menu to view, add, update, or delete products.

**5. Open the web interface:**
Open index.html in your browser.

You can view the current products and manage them visually.

**6. To reset the product list:**
```jsnode reset_db.js```

This restores db.json to its original values.

📄 File Descriptions

File	Description

db.json	Simulated database using a products array.

management_api.js	JavaScript CLI with a menu to perform CRUD operations via terminal.

reset_db.js	Resets db.json to original products.

index.html	Visual interface to manage products (add/delete).

🧠 CLI Menu Example

📚 MAIN MENU
1. View products
 
2. Add product
 
3. Update product

4. Delete product

0. Exit

💡 Tips

Do not upload node_modules/ to GitHub. Add this line to your .gitignore:



node_modules/

You can view product data directly in your browser at:

http://localhost:3000/products

Whenever you manually edit db.json, save and refresh to apply changes.

