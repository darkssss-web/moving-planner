function addTask() {
  const input = document.getElementById('taskInput');
  const text = (input.value || '').trim();
  if (!text) { alert('Введите текст задачи!'); input.focus(); return; }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'title';
  span.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Готово';
  doneBtn.onclick = () => li.classList.toggle('completed');

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Удалить';
  removeBtn.onclick = () => li.remove();

  actions.appendChild(doneBtn);
  actions.appendChild(removeBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
  input.focus();
}
