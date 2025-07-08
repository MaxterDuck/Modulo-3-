import { createTodoView } from '../views/todoView.js';

export function createTodoPage() {
  // Cargar tareas desde localStorage al iniciar
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  let state = {
    tasks: savedTasks
  };

  const saveState = () => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  };

  const onAdd = (text) => {
    state = {
      ...state,
      tasks: [...state.tasks, { text, done: false }]
    };
    saveState(); // guardar en localStorage
    view.update(state);
  };

  const onToggle = (index) => {
    const updatedTasks = state.tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    state = { ...state, tasks: updatedTasks };
    saveState();
    view.update(state);
  };

  const onDelete = (index) => {
    const updatedTasks = state.tasks.filter((_, i) => i !== index);
    state = { ...state, tasks: updatedTasks };
    saveState();
    view.update(state);
  };

  const view = createTodoView({ onAdd, onToggle, onDelete });
  view.update(state);

  return {
    root: view.root
  };
}
