README - Proyecto de Gestión de Productos
 Proyecto de Gestión de Productos con JavaScript y JSON Server
Este proyecto es una práctica del Módulo 3, Semana 3. Aquí aprenderás a simular una API con un servidor local y a
realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) usando JavaScript moderno con Fetch API.
Está pensado para personas que están comenzando, por eso se explican todos los pasos desde cero.
 ¿Qué hace este proyecto?
- Simula un servidor local que contiene productos.
- Permite leer, crear, actualizar y eliminar productos.
- Todo se ejecuta con JavaScript puro y usando la terminal.
 Archivos del proyecto
Modulo_3/Semana_2/
 db.json # Archivo que simula una base de datos (productos)
 gestion_api.js # Script que realiza operaciones CRUD con Fetch API
 reiniciar_db.js # Script que reinicia los datos de la base a los valores originales
 Requisitos previos
1. Node.js y npm
Verifica si los tienes con:
node -v
npm -v
Si no los tienes, descárgalos desde: https://nodejs.org/
2. JSON Server
Instálalo con:
npm install -g json-server
 Cómo ejecutar el proyecto paso a paso
1. Entra a la carpeta del proyecto:
cd ~/Modulo_3/Semana_2
2. Inicia el servidor:
json-server --watch db.json
(Deja esta terminal abierta mientras trabajas)
3. Abre una nueva terminal para correr los scripts:
- Ejecuta las operaciones CRUD:
node gestion_api.js
- Reinicia los datos a los originales:
node reiniciar_db.js
 Contenido del archivo reiniciar_db.js
README - Proyecto de Gestión de Productos
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
 console.error(" Error al reiniciar la base de datos:", err);
 } else {
 console.log(" Base de datos reiniciada exitosamente.");
 }
});
 Notas importantes
- No cierres la terminal donde está corriendo json-server.
- Puedes abrir http://localhost:3000/productos en tu navegador para ver los productos.
- Puedes editar db.json o reiniciarlo cuando lo necesites.
¡Listo! Ya tienes un entorno completo de práctica para consumir APIs locales y manipular datos usando JavaScript.
