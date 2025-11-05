const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function initNav(current) {
  $$('.nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === current);
  });
}

function renderHome(root) {
  root.innerHTML = `
    <div class="page">
      <h2>Главная</h2>
      <p class="empty">Добро пожаловать в Moving Planner. Перейдите во вкладку «Задачи», чтобы управлять процессом переезда.</p>
    </div>
  `;
}

function renderTasks(root) {
  root.innerHTML = `
    <div class="page">
      <h2>Задачи переезда</h2>
      <div class="row" style="margin-bottom:12px;">
        <input id="taskInput" class="input" placeholder="Новая задача..." />
        <button id="addBtn" class="btn btn-primary">Добавить</button>
      </div>
      <ul id="taskList" class="list"></ul>
    </div>
  `;

  const input = $('#taskInput');
  const list = $('#taskList');
  $('#addBtn').addEventListener('click', () => {
    const text = (input.value || '').trim();
    if (!text) { alert('Введите текст задачи'); input.focus(); return; }
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `
      <span class="item-title">${text}</span>
      <div class="item-actions">
        <button class="btn">Готово</button>
        <button class="btn btn-danger">Удалить</button>
      </div>
    `;
    const [doneBtn, delBtn] = $$('.btn', li);
    doneBtn.addEventListener('click', () => li.classList.toggle('completed'));
    delBtn.addEventListener('click', () => li.remove());
    list.appendChild(li);
    input.value = '';
  });
}

const routes = {
  '#/': renderHome,
  '#/tasks': renderTasks,
};

function getPath() {
  const hash = location.hash || '#/';
  return routes[hash] ? hash : '#/';
}

function render() {
  const path = getPath();
  initNav(path);
  const root = document.getElementById('app');
  routes[path](root);
}

window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);
