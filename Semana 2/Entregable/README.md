# 🛒 Product Management Project with JavaScript and JSON Server
In this project, you’ll learn how to simulate an API using a local server and perform CRUD operations (Create, Read, Update, Delete) using modern JavaScript with the Fetch API.
It’s designed for beginners, so all steps are explained from scratch.

---

## 📦 What does this project do?
- Simulates a local server that stores product data.

- Allows you to read, create, update, and delete products.

- Everything runs with plain JavaScript and the terminal.

---

## 📁 Project Files
Modulo_3/

└── Semana_2/

 ├── db.json – File that simulates a database (products)
 
 ├── gestion_api.js – Script that performs CRUD operations using Fetch API
 
 └── reset_db.js – Script that resets the database to original values

---

## 🔧 Prerequisites
You need to have the following installed:

## 1. Node.js and npm
You can check if you have them with the following command:
```js
node -v

npm -v
```
If not, download them from: https://nodejs.org/

## 2. JSON Server
Install JSON Server globally with the following command:
```js
npm install -g json-server
```

🚀 How to run the project step-by-step
## Step 1: Go to the project folder
From the terminal (Ubuntu, WSL, or CMD on Windows):

cd ~/Modulo_3/Semana_2

Make sure you're in the folder where db.json and the scripts are located.

## Step 2: Start the server
Run this command to start the server, using db.json as a mock database:
```js
json-server --watch db.json
```

🔁 Leave this command running in the terminal so the server stays active.

## Step 3: Open a new terminal to run scripts
While the server is running, open a new terminal and go to the same project folder.

From that terminal, you can run the following scripts:

## Manage products (view, add, edit, delete):(Command)
```js
node gestion_api.js
```
## Reset the database to original products: (Command)
```js
node reset_db.js
```
## 📄 Content of reset_db.js
This file overwrites the contents of db.json with the base products:


```js
const fs = require('fs');

const initialData = {
  products: [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 45 }
  ]
};

fs.writeFile('db.json', JSON.stringify(initialData, null, 2), (err) => {
  if (err) {
    console.error("❌ Error resetting database:", err);
  } else {
    console.log("✅ Database successfully reset.");
  }
});
```


💡 Important Notes
Do not close the terminal where json-server is running.

You can visit http://localhost:3000/products in your browser to view the products in JSON format.

Every time you manually edit db.json, save the file and refresh the browser to see the changes.



