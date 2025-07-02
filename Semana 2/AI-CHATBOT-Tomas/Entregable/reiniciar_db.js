const fs = require('fs');

const datosIniciales = {
  productos: [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 45 }
  ]
};

fs.writeFile('db.json', JSON.stringify(datosIniciales, null, 2), (err) => {
  if (err) {
    console.error("❌ Error al reiniciar la base de datos:", err);
  } else {
    console.log("✅ Base de datos reiniciada exitosamente.");
  }
});

//Si quieres reiniciar la base de datos simplemente Ejecuta este codigo en ("node reiniciar_db.js")
