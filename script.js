function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert('Введите текст задачи!');
    return;
  }

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.className = 'task-item card';

  li.innerHTML = `
    <span class="task-title">${taskText}</span>
    <div class="actions">
      <button class="btn btn-done" onclick="toggleDone(this)">✔</button>
      <button class="btn btn-delete" onclick="this.closest('li').remove()">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
}

function toggleDone(button) {
  const li = button.closest('li');
  li.classList.toggle('completed');
}
