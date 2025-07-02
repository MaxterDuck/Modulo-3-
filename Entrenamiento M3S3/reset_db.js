// reset_db.js

const fs = require("fs");

// Initial dataset to reset the database
const initialData = {
  products: [
    { id: 1, name: "Mouse", price: 30 },
    { id: 2, name: "Keyboard", price: 50 },
    { id: 3, name: "Monitor", price: 200 }
  ]
};

// Write the initial data into db.json (used by json-server)
fs.writeFileSync("db.json", JSON.stringify(initialData, null, 2));

// Log confirmation message
console.log("✅ Database reset with initial data.");

//If you want to restart the simple database Run this code in ("reset_db.js node")