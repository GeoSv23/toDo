import deleteImg from "@images/delete.png";
import pencilImg from "@images/pencil.png";
import doneImg from "@images/done.png";

const tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    tasks.unshift({ text: taskText, completed: false, nonVisibility: false });
    input.value = "";
    updateTaskList();
  }
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const newTask = document.createElement("li");
    const taskHolder = document.createElement("p");

    newTask.append(taskHolder);
    taskHolder.textContent = `${i + 1} .${tasks[i].text}`;
    newTask.className = "task-item"; // Добавляем класс для анимации

    const pointButton = document.createElement("img");
    pointButton.src = doneImg;
    pointButton.alt = "Выполнено";

    pointButton.addEventListener("click", function () {
      if (!tasks[i].completed && !tasks[i].nonVisibility) {
        tasks[i].completed = true;
        tasks[i].nonVisibility = true;
        let position = tasks.splice(i, 1);
        tasks.push(position[0]);
      }
      updateTaskList();
    });

    const changeButton = document.createElement("img");
    changeButton.src = pencilImg;
    changeButton.alt = "Измеить";
    changeButton.addEventListener("click", function () {
      changeButton.classList.add("img_change");
      const newValue = prompt("Введите новое значение задачи");
      if (newValue !== null) {
        tasks[i].text = newValue;
        updateTaskList();
      }
    });

    const deleteButton = document.createElement("img");
    deleteButton.src = deleteImg;
    deleteButton.alt = "Удалить";
    deleteButton.addEventListener("click", function () {
      newTask.className = "removing";
      deleteButton.classList.add("img_del");
      setTimeout(function () {
        tasks.splice(i, 1);
        updateTaskList();
      }, 600);
    });

    if (tasks[i].completed && tasks[i].nonVisibility) {
      taskHolder.classList.add("completed"); // Добавляем класс для перечеркивания текста
      taskHolder.classList.add("nonvis");
      pointButton.classList.add("img_done");
      const parentElement = taskHolder.parentNode;
      parentElement.classList.add("green");
    }

    newTask.appendChild(pointButton);
    newTask.appendChild(changeButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  }
}

const addButton = document.getElementById("addTask");
addButton.addEventListener("click", addTask);

// Вызывайте updateTaskList() при загрузке страницы, если у вас есть сохраненные задачи
// updateTaskList();
const wrapper = document.querySelector(".wrapper");
const form = document.querySelector(".form");
const tasksWrapper = document.querySelector(".tasks__wrapper");

const themeChanger = document.querySelector(".theme");
const bodyd = document.body;
themeChanger.addEventListener("click", function () {
  bodyd.classList.toggle("black");
  form.classList.toggle("black");
  tasksWrapper.classList.toggle("black");
});
