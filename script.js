function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert('Введите текст задачи!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="this.parentElement.remove()">Удалить</button>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}
