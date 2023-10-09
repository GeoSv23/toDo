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

function holderTasks() {
  if (tasks.length === 0) {
    taskList.innerHTML = `<p class="zaglushka">Нет задач</p>`;
  }
}
holderTasks();
let deleteAllButtonAdded = false;

function deleteAll() {
  if (tasks.length > 2 && !deleteAllButtonAdded) {
    const deleteAllButton = document.createElement("button");
    deleteAllButton.classList.add("deleteAllButton");
    deleteAllButton.innerHTML = "Очистить список";
    tasksWrapper.append(deleteAllButton);
    deleteAllButtonAdded = true;

    deleteAllButton.addEventListener("click", function () {
      tasks.splice(0, tasks.length);
      deleteAllButton.outerHTML = "";
      deleteAllButtonAdded = false;
      updateTaskList();
      holderTasks();
    });
  }
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  deleteAll();
  for (let i = 0; i < tasks.length; i++) {
    const newTask = document.createElement("div");
    const counter = document.createElement("p");
    counter.classList.add("counter");
    const taskHolder = document.createElement("input");
    taskHolder.type = "text";
    taskHolder.value = tasks[i].text;
    taskHolder.className = "task-input";

    taskHolder.addEventListener("input", function () {
      tasks[i].text = taskHolder.value;
    });

    taskHolder.classList.add("task");

    newTask.append(counter);
    newTask.append(taskHolder);
    counter.textContent = `${i + 1}.`;
    taskHolder.value = `${tasks[i].text}`;
    newTask.className = "task-item";

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
    changeButton.addEventListener("click", () => {
      if (!tasks[i].completed) {
        changeButton.classList.add("img_change");
        taskHolder.focus();
        taskHolder.value = taskHolder.value.trim();
        tasks[i].text = taskHolder.value.trim();
      } else alert("Задача выполнена");
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
        holderTasks();
      }, 600);
    });

    if (tasks[i].completed && tasks[i].nonVisibility) {
      counter.innerHTML = "#";
      counter.classList.add("completed");
      counter.classList.add("nonvis");
      taskHolder.classList.add("completed");
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
const input = document.getElementById("taskInput");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

const wrapper = document.querySelector(".wrapper");
const form = document.querySelector(".form");
const tasksWrapper = document.querySelector(".tasks__wrapper");

const themeChanger = document.querySelector(".theme");
const body = document.body;
themeChanger.addEventListener("click", function () {
  body.classList.toggle("black");
  form.classList.toggle("black");
  tasksWrapper.classList.toggle("black");
});
