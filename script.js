function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert('Введите текст задачи!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.classList.add('task-item');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="btn btn-danger" onclick="this.parentElement.remove()">Удалить</button>
  `;

  taskList.appendChild(li);

  requestAnimationFrame(() => li.classList.add('visible'));

  taskInput.value = "";
  taskInput.focus();
}

document.getElementById('taskInput').addEventListener('focus', (e) => {
  e.target.style.outline = '2px solid var(--color-primary, #0d6efd)';
});