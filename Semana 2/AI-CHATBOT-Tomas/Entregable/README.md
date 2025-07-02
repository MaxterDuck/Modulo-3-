# 🛒 Gestión de Productos con JavaScript y JSON Server

Proyecto del **Módulo 3 - Semana 3** donde se implementa una simulación de servidor local con **JSON Server** y se realizan operaciones **CRUD** usando **JavaScript + Fetch API**.

Este README está pensado para quienes están empezando. Aquí encontrarás los pasos detallados para correr el proyecto desde cero.

---

## 📂 Estructura del Proyecto

Modulo_3/
└── Semana_2/
├── db.json # Simula la base de datos de productos
├── gestion_api.js # Script con operaciones CRUD
└── reiniciar_db.js # Reinicia la base de datos a los valores originales

yaml
Copy
Edit

---

## ✅ ¿Qué hace este proyecto?

- Crea un servidor local simulado con productos.
- Permite leer, agregar, editar y eliminar productos con JavaScript.
- Usa Fetch API para comunicarse con el servidor (JSON Server).

---

## 🔧 Requisitos

Asegúrate de tener instalados:

### Node.js y npm

Puedes verificarlo con:

```bash
node -v
npm -v
JSON Server
Instala JSON Server globalmente con:

bash
Copy
Edit
npm install -g json-server
🚀 Cómo usar el proyecto
1️⃣ Abre la terminal y navega al proyecto
bash
Copy
Edit
cd ~/Modulo_3/Semana_2
2️⃣ Inicia el servidor JSON Server
bash
Copy
Edit
json-server --watch db.json
Esto crea un servidor local que puedes visitar en el navegador:

http://localhost:3000/productos

3️⃣ Abre otra terminal para ejecutar los scripts
Ejecutar operaciones CRUD
bash
Copy
Edit
node gestion_api.js
Reiniciar los datos a los valores originales
bash
Copy
Edit
node reiniciar_db.js
🔄 Contenido del archivo reiniciar_db.js
Este script sobreescribe db.json con los datos originales:

js
Copy
Edit
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
💡 Consejos importantes
No cierres la terminal donde corre el servidor (json-server).

Puedes abrir http://localhost:3000/productos en tu navegador para ver los datos en JSON.

Si haces pruebas que dañan la base, puedes correr reiniciar_db.js para restaurarla.

🧪 ¿Qué se practica con este proyecto?
Uso de fetch() para hacer solicitudes HTTP (GET, POST, PUT, DELETE)

Manejo de errores y validación de datos en JavaScript

Interacción con servidores simulados

Buenas prácticas para organizar un proyecto de JS + API

