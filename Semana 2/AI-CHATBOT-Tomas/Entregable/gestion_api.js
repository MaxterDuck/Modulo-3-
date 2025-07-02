const URL = "http://localhost:3000/productos";

// GET: leer productos
function obtenerProductos() {
  fetch(URL)
    .then(res => res.json())
    .then(data => console.log("🔍 Productos actuales:", data))
    .catch(err => console.error("❌ Error al obtener productos:", err));
}

// Requiere node-fetch para usar fetch en Node.js
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


// Función POST
function crearProducto(producto) {
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  })
    .then(res => res.json())
    .then(data => console.log("✅ Producto creado:", data))
    .catch(err => console.error("❌ Error al crear producto:", err));
}

// Función que evita duplicados
function crearProductoUnico(producto) {
  fetch(URL)
    .then(res => res.json())
    .then(productos => {
      const existe = productos.some(p =>
        p.nombre.toLowerCase() === producto.nombre.toLowerCase() &&
        p.precio === producto.precio
      );

      if (!existe) {
        crearProducto(producto);
      } else {
        console.log("⚠️ Producto ya existe. No se agregó.");
      }
    })
    .catch(err => console.error("❌ Error al verificar duplicado:", err));
}

// Llamada de prueba
crearProductoUnico({ nombre: "Monitor", precio: 200 });

// Cierra el script automáticamente después de 3 segundos
setTimeout(() => process.exit(0), 3000);



// PUT: actualizar producto
function actualizarProducto(id, nuevosDatos) {
  fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevosDatos)
  })
    .then(res => res.json())
    .then(data => console.log("🛠 Producto actualizado:", data))
    .catch(err => console.error("❌ Error al actualizar producto:", err));
}

// DELETE: eliminar producto
function eliminarProducto(id) {
  fetch(`${URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => console.log(`🗑 Producto con ID ${id} eliminado.`))
    .catch(err => console.error("❌ Error al eliminar producto:", err));
}

//Obtener productos ordenados
function obtenerProductosOrdenados() {
  fetch(URL + "?_sort=nombre&_order=asc")
    .then(res => res.json())
    .then(data => console.log("🔍 Productos ordenados:", data));
}


// 🧪 PRUEBAS
obtenerProductos();
crearProductoUnico({ nombre: "Tarjeta Grafica RTX 3070", precio: 300 });
actualizarProducto(2, { nombre: "Mouse Logitech", precio: 30 });
eliminarProducto("db62");
