const $$ = (sel, root = document) => root.querySelector(sel);
const $$$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function toast(msg, timeout = 2000) {
  let el = document.createElement('div');
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

function setupDemoAddHandler() {
  const input = $$('#taskInput');
  const list = $$('#taskList');
  const addBtn = $$$('.btn-primary')[0] || $$('button');

  if (!input || !list || !addBtn) return;

  addBtn.addEventListener('click', () => {
    if (!validateRequired(input)) return;
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `
      <span class="item-title">${input.value.trim()}</span>
      <div class="item-actions">
        <button class="btn">Готово</button>
        <button class="btn btn-danger">Удалить</button>
      </div>
    `;
    const [doneBtn, delBtn] = $$$( '.btn', li );
    doneBtn.addEventListener('click', () => li.classList.toggle('completed'));
    delBtn.addEventListener('click', () => li.remove());

    list.appendChild(li);
    input.value = '';
    toast('Задача добавлена');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupDemoAddHandler();
});
