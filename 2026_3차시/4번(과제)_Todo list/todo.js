let tasks = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return; // 빈 값 방지

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  render();
});

const render = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // 초기화

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text + " ";

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }

    delBtn.onclick = () => {
      tasks = tasks.filter(item => item != task);
      render();
    }

    li.onclick = () => {
      task.completed = !task.completed;
      render();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
};