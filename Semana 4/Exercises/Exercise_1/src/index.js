import { createTodoPage } from './pages/todopage.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const page = createTodoPage(); // esto es tu controlador

  app.innerHTML = '';
  app.appendChild(page.root); // montas el root en la página
});
