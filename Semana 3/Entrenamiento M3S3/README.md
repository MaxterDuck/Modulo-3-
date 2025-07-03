# 🛠️ Product Management Project – Módulo 3, Semana 3

Este repositorio contiene un pequeño proyecto de **gestión de productos**, creado como parte del **Módulo 3 – Semana 3** del entrenamiento. El propósito es practicar **operaciones CRUD** en la terminal y con una interfaz web usando **JavaScript moderno** y **JSON Server**.

---

## 📂 Estructura del proyecto

Entrenamiento M3S3/
│


├
── db.json

│ └── Simula la base de datos con productos (utilizado por JSON Server).
│

├── management_api.js

│ └── Script de consola para ver, agregar, actualizar y eliminar productos.
│
├
── reset_db.js

│ └── Reinicia db.json a su estado original.
│
└
── 
index.html

└── Interfaz web para gestionar productos desde el navegador.


---

## 🧩 Requisitos

- **Node.js** (incluye npm)
- Instalación global de **JSON Server**
  ```bash
  npm install -g json-server
🚀 Cómo ejecutar el proyecto
Clona el repositorio y accede al directorio:

bash
Copiar
Editar
git clone https://github.com/MaxterDuck/Modulo-3-/tree/main/Semana%203/Entrenamiento%20M3S3.git
cd "Entrenamiento M3S3"
Instala dependencias locales (incluyendo node-fetch):

bash
Copiar
Editar
npm install
Inicia JSON Server para crear la API REST:

bash
Copiar
Editar
json-server --watch db.json --port 3000
Mantén esta terminal abierta.

Abre otra terminal y ejecuta el script de consola:

bash
Copiar
Editar
node management_api.js
Podrás seleccionar opciones para ver, agregar, actualizar y eliminar productos.

O usa la interfaz web:

Abre index.html en tu navegador.

Podrás ver, agregar y eliminar productos visualmente.

Para reiniciar la base de datos:

bash
Copiar
Editar
node reset_db.js
Esto restablece db.json a los productos originales.

📄 Detalles de cada archivo
Archivo	Función
db.json	Base de datos simulada (JSON) con la colección products.
management_api.js	CLI para gestionar productos mediante CRUD.
reset_db.js	Restaura db.json a un estado inicial predefinido.
index.html	Frontend en HTML/JS para gestionar productos desde el navegador.

✔️ Uso paso a paso
Levanta la API con JSON Server.

Usa la terminal para interacciones CLI.

O abre index.html para hacerlo visualmente.

Dentro de management_api.js, sigue el menú:

markdown
Copiar
Editar
1. View products
2. Add product
3. Update product
4. Delete product
0. Exit
💡 Buenas prácticas
Asegúrate de tener node_modules/ en tu .gitignore.

No cierres la terminal donde corre JSON Server.

Cada vez que hagas cambios en db.json, reinicia con reset_db.js o recarga.

📌 Personalización
Si deseas traducir todo al inglés (como se muestra en el HTML y el CLI), simplemente cambia:

products, name, price en db.json y scripts.

Etiquetas y mensajes en los archivos .js y index.html.
