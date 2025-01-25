const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const remainingTasks = document.getElementById('remaining-tasks');
const completedPercent = document.getElementById('completed-percent');
const themeToggle = document.getElementById('theme-toggle');
const categorySelect = document.getElementById('category-select');

let todos = [];
let darkTheme = false;

function updateStats() {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  remainingTasks.textContent = total - completed;
  completedPercent.textContent = total > 0 ? `${Math.round((completed / total) * 100)}%` : '0%';

}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (todo.completed) li.classList.add('completed');

    li.innerHTML = `
      <span>${todo.text} (${todo.category})</span>
      <div>
        <button onclick="toggleComplete(${index})">Complete</button>
        <button onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
  updateStats();
}

function addTodo() {
  const text = todoInput.value.trim();
  const category = categorySelect.value;
  if (text) {
    todos.push({ text, category, completed: false });
    todoInput.value = '';
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function toggleTheme() {
  darkTheme = !darkTheme;
  document.body.style.backgroundColor = darkTheme ? '#333' : '';
  document.body.style.color = darkTheme ? '#fff' : '#333';
}

addBtn.addEventListener('click', addTodo);
themeToggle.addEventListener('click', toggleTheme);

// Reminder functionality
setInterval(() => {
  if (todos.length > 0) {
    alert('Reminder: You have tasks to complete!');
  }
}, 600000); // Every 1 minute