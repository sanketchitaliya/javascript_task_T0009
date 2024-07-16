let input = document.querySelector("#input");
let todoDiv = document.querySelector("#container");

let todos = JSON.parse(localStorage.getItem("Todos")) || [];

function addToDo() {
    let newToDo = input.value.trim();
    if (newToDo !== "") {
        const task = {
            id: Date.now(),
            title: newToDo,
            status: "pending",
        };
        todos.push(task);
        input.value = "";
        saveTodos();
        displayToDo();
    }
}

function displayToDo() {
    todoDiv.innerHTML = todos
        .map(
            (todo) =>
                `<div class="todo-item" draggable="true" data-id="${todo.id}">
                    <div style="display: flex; align-items: center;">
                        <input type="checkbox" ${
                            todo.status === "completed" ? "checked" : ""
                        } onchange="toggleStatus(${todo.id})">
                        <p style="text-decoration: ${
                            todo.status === "completed" ? "line-through" : "none"
                        }">
                            ${todo.title}
                        </p>
                    </div>
                    <div>
                        <button onclick="updateToDo(${todo.id})" class="update">Update</button>
                        <button onclick="deleteToDo(${todo.id})" class="delete">Delete</button>
                    </div>
                </div>`
        )
        .join("");
    addDragListeners();
}

function deleteToDo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    displayToDo();
}

function updateToDo(id) {
    const task = todos.find((item) => item.id === id);
    if (task) {
        const updatedTask = prompt("Update task:", task.title);
        if (updatedTask !== null) {
            task.title = updatedTask;
            saveTodos();
            displayToDo();
        }
    }
}

function toggleStatus(id) {
    const task = todos.find((item) => item.id === id);
    if (task) {
        task.status = task.status === "pending" ? "completed" : "pending";
        saveTodos();
        displayToDo();
    }
}

function saveTodos() {
    localStorage.setItem("Todos", JSON.stringify(todos));
}

function addDragListeners() {
    const items = document.querySelectorAll(".todo-item");
    items.forEach((item) => {
        item.addEventListener("dragstart", dragStart);
        item.addEventListener("dragover", dragOver);
        item.addEventListener("drop", drop);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    });
}

function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
    e.target.classList.add("dragging");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    e.target.closest(".todo-item").classList.add("drag-over");
}

function dragLeave(e) {
    e.target.closest(".todo-item").classList.remove("drag-over");
}

function drop(e) {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");
    const draggedItem = document.querySelector(`[data-id="${draggedItemId}"]`);
    const dropTarget = e.target.closest(".todo-item");

    if (draggedItem !== dropTarget) {
        const allItems = [...todoDiv.querySelectorAll(".todo-item")];
        const draggedIndex = allItems.indexOf(draggedItem);
        const dropIndex = allItems.indexOf(dropTarget);

        if (draggedIndex < dropIndex) {
            todoDiv.insertBefore(draggedItem, dropTarget.nextSibling);
        } else {
            todoDiv.insertBefore(draggedItem, dropTarget);
        }

        updateTodosOrder();
    }

    document.querySelectorAll(".todo-item").forEach((item) => {
        item.classList.remove("dragging", "drag-over");
    });
}

function updateTodosOrder() {
    const newOrder = Array.from(todoDiv.querySelectorAll(".todo-item")).map(
        (item) => todos.find((todo) => todo.id === parseInt(item.dataset.id))
    );
    todos = newOrder;
    saveTodos();
}

displayToDo();
