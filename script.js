const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function toast(msg, timeout = 2000) {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.cssText = `
    position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);
    background: rgba(15,23,42,.9); color: #fff; padding: 10px 14px;
    border-radius: 10px; z-index: 9999; box-shadow: 0 8px 24px rgba(0,0,0,.2);
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), timeout);
}

function validateRequired(input) {
  if (!input) return false;
  const ok = !!input.value.trim();
  input.style.borderColor = ok ? '' : '#e11d48';
  if (!ok) toast('Заполните обязательное поле');
  return ok;
}

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
  const addBtn = $('#addBtn');

  function addTask() {
    if (!validateRequired(input)) return;

    const text = input.value.trim();
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
    input.focus();
    toast('Задача добавлена');
  }

  addBtn.addEventListener('click', addTask);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
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