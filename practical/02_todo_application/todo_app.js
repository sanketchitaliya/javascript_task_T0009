var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

let form = document.getElementById("popupForm");
let textInput = document.getElementById("name");
let dateInput = document.getElementById("date");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("submit");
let completedTasksBtn = document.getElementById("completed-tasks");
let incompleteTasksBtn = document.getElementById("incomplete-tasks");
let currentFilter = "all";

//localStorage.clear();

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

completedTasksBtn.addEventListener("click", () => filterTasks("completed"));
incompleteTasksBtn.addEventListener("click", () => filterTasks("incomplete"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  modal.style.display = "none";
  inputValidation();
});

let inputValidation = () => {
  if (textInput.value.trim() === "") {
    msg.innerHTML = "Task is required";
    return false;
  } else {
    msg.innerHTML = "";
    addData();
    return true;
  }
};

let data = [];

let addData = () => {
  data.push({
    id: Date.now(),
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
    status: "pending",
  });

  localStorage.setItem("data", JSON.stringify(data));
  createTasks();
};

function ManageStatus(id) {
  const status_task = data.find((item) => item.id === id);
  if (status_task) {
    if (status_task.status === "pending") {
      status_task.status = "completed";
    } else {
      status_task.status = "pending";
    }
    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
  }
}
function filterTasks(filter) {
  currentFilter = filter;
  createTasks();
}

let createTasks = () => {
  let filteredTasks = data;
  if (currentFilter === "completed") {
    filteredTasks = data.filter((task) => task.status === "completed");
  } else if (currentFilter === "incomplete") {
    filteredTasks = data.filter((task) => task.status === "pending");
  }
  tasks.classList.add("taskLists");

  tasks.innerHTML = "";
  filteredTasks.map((data) => {
    return (tasks.innerHTML += `
        <div id=${data.id}>
       <span class="line">
          <input width="20px" type="checkbox" ${
            data.status === "completed" ? "checked" : ""
          } onchange="ManageStatus(${data.id})">
        <span class="linethrough" style="text-decoration: ${
          data.status === "completed" ? "line-through" : "none"
        }">
           ${data.text}
         </span>
         </span>

           
           <span class="date">${data.date}</span>
           <p>${data.description}</p>
  
          <span class="options">
          <i onClick= "editTask(${data.id})" class="fa fa-edit"></i>
          <i onClick ="deleteTask(${
            data.id
          });createTasks()" class="fa fa-trash-o"></i>
           </span>
      </div>
    `);
  });

  resetForm();
};

let deleteTask = (id) => {
  data = data.filter((item) => item.id !== id);
  localStorage.setItem("data", JSON.stringify(data));
  createTasks();
};

let editTask = (id) => {
  modal.style.display = "block";
  const update_data = data.find((item) => item.id === id);

  console.log(data);
  document.getElementById("name").value = update_data.text;
  document.getElementById("date").value = update_data.date;
  document.getElementById("textarea").value = update_data.description;

  document.querySelector("#submit").onclick = function () {
    update_data.text = document.getElementById("name").value;
    update_data.date = document.getElementById("date").value;
    update_data.description = document.getElementById("textarea").value;
    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
  };
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
  modal.style.display = "none";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createTasks();
})();
