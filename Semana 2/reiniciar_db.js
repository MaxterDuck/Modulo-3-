const fs = require("fs");

const datosIniciales = {
  productos: [
    { id: "1", nombre: "Mouse inalámbrico", precio: 30 },
    { id: "2", nombre: "Teclado mecánico", precio: 50 },
    { id: "3", nombre: "Monitor 24 pulgadas", precio: 200 }
  ]
};

fs.writeFileSync("db.json", JSON.stringify(datosIniciales, null, 2));
console.log("✅ Base de datos reiniciada con datos iniciales.");

//Si quieres reiniciar la base de datos simplemente Ejecuta este codigo en ("node reiniciar_db.js")
