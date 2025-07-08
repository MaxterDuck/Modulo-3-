export function createTodoView({ onAdd, onToggle, onDelete }) {
  const root = document.createElement('div');

  root.innerHTML = `
    <form id="taskForm">
      <input type="text" id="taskInput" placeholder="Nueva tarea" required />
      <button type="submit">Agregar</button>
    </form>
    <ul id="taskList"></ul>
  `;

  const form = root.querySelector('#taskForm');
  const input = root.querySelector('#taskInput');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value) {
      onAdd(value);
      input.value = '';
    }
  });

  function update(state) {
    const list = root.querySelector('#taskList');
    list.innerHTML = '';

    state.tasks.forEach((task, index) => {
      const li = document.createElement('li');

      const text = document.createElement('span');
      text.textContent = task.text;
      if (task.done) {
        text.style.textDecoration = 'line-through';
        text.style.color = '#999';
      }

      // Botón de marcar como hecha/pending
      const toggleBtn = document.createElement('button');
      toggleBtn.textContent = task.done ? '🔄 Pendiente' : '✅ Hecha';
      toggleBtn.style.marginLeft = '8px';
      toggleBtn.addEventListener('click', () => onToggle(index));

      // Botón de eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.style.marginLeft = '8px';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // por si acaso
        onDelete(index);
      });

      li.appendChild(text);
      li.appendChild(toggleBtn);
      li.appendChild(deleteBtn);

      list.appendChild(li);
    });
  }

  return {
    root,
    update
  };
}
