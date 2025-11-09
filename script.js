window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);

function renderPage() {
  const route = location.hash.slice(1) || '/';
  const app = document.getElementById('app');

  if (route === '/' || route === '/home') {
    app.innerHTML = `
      <h2>Добро пожаловать в Moving Planner</h2>
      <p>Планируйте свой переезд и управляйте задачами!</p>
    `;
  } else if (route === '/tasks') {
    app.innerHTML = `
      <h2>Список задач переезда</h2>
      <div class="row">
        <input type="text" id="taskInput" placeholder="Введите новую задачу..." />
        <button onclick="addTask()">Добавить</button>
      </div>
      <ul id="taskList"></ul>
    `;
  } else {
    app.innerHTML = `<h2>Страница не найдена</h2>`;
  }
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (!input) return;

  const text = input.value.trim();
  if (!text) {
    alert('Введите текст задачи!');
    return;
  }

  const list = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button onclick="this.parentElement.remove()">Удалить</button>
  `;
  list.appendChild(li);

  input.value = "";
  input.focus();
}
