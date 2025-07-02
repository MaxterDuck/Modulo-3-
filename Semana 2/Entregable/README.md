# 🛒 Proyecto de Gestión de Productos con JavaScript y JSON Server

Aquí aprenderás a simular una API con un servidor local y a realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) usando JavaScript moderno con Fetch API.

Está pensado para personas que están comenzando, por eso se explican todos los pasos desde cero.

---

## 📦 ¿Qué hace este proyecto?

- Simula un servidor local que contiene productos.
- Permite leer, crear, actualizar y eliminar productos.
- Todo se ejecuta con JavaScript puro y usando la terminal.

---

## 📁 Archivos del proyecto

Modulo_3/

└── Semana_2/

├── db.json # Archivo que simula una base de datos (productos)

├── gestion_api.js # Script que realiza operaciones CRUD con Fetch API

└── reiniciar_db.js # Script que reinicia los datos de la base a los valores originales

---

## 🔧 Requisitos previos

Necesitas tener instalados los siguientes programas:

### 1. Node.js y npm

Puedes verificar si los tienes con este comando:

```bash
node -v
npm -v
Si no los tienes, descárgalos desde: https://nodejs.org/

2. JSON Server
Instala JSON Server de forma global con el siguiente comando:

npm install -g json-server
🚀 Cómo ejecutar el proyecto paso a paso
Paso 1: Entra a la carpeta del proyecto
Desde la terminal (Ubuntu, WSL o CMD si estás en Windows):

cd ~/Modulo_3/Semana_2
Asegúrate de estar en la carpeta donde están db.json y los scripts.

Paso 2: Iniciar el servidor
Ejecuta este comando para iniciar el servidor que usará db.json como si fuera una base de datos real:


json-server --watch db.json
🔁 Este comando debe dejarse corriendo en la terminal para que el servidor funcione.

Paso 3: Abrir una nueva terminal para correr los scripts
Mientras el servidor está corriendo, abre una nueva terminal y navega a la misma carpeta del proyecto.

Desde esa terminal, puedes ejecutar los siguientes scripts:

Ver productos, crear, editar o eliminar (gestión_api.js)

node gestion_api.js
Reiniciar los datos (reiniciar_db.js)
Si quieres volver a los productos originales (como estaban al principio):

bash
Copy
Edit
node reiniciar_db.js
📄 Contenido del archivo reiniciar_db.js
Este archivo sobrescribe el contenido de db.json con los productos base:

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
Esto es útil si quieres hacer pruebas y empezar de nuevo.

💡 Notas importantes
No cierres la terminal donde está corriendo json-server.

Puedes abrir http://localhost:3000/productos en tu navegador para ver los productos en formato JSON.

Cada vez que edites db.json, guarda y recarga en el navegador para ver los cambios.
