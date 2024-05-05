// Select DOM
const todoList = document.querySelector(".task-list");
const filterOption = document.querySelector("#filter");
const form = document.querySelector(".form");
const taskInput = document.querySelector("#new-item");


// Mark done and Remove task
function markDone(todoLi) {
    todoLi.classList.toggle("done")
}

function removeTask (todoLi) {
    todoLi.classList.add("fall");
    // todoLi.addEventListener("transitionEnd",() => todoLi.remove());
    todoLi.remove();
}

todoList.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList[1] === 'btn-action-done') {
        markDone(element.parentNode.parentNode);
    } else if (element.classList[1] === 'btn-action-delete') {
        removeTask (element.parentNode.parentNode) 
    }
}

)

// filter task
function filterTasks (hidecompletedTasks) {
    todoList.querySelectorAll("li").forEach((todoLi) => {
        if (todoLi.classList.contains("done")) {
            todoLi.style.display = hidecompletedTasks ? "none": "flex";
        }
    })
}

filterOption.addEventListener("click", (e) => {
    filterTasks(e.target.checked)
})

// Add new task
function addTask(taskLabel) {
    const todoLi = document.createElement("li");
    const span = document.createElement("span");
    span.className = "label";
    span.textContent = taskLabel;
    todoLi.appendChild(span);

    const divAction = document.createElement("div");
    divAction.className = "action";
    divAction.innerHTML = `<input type="checkbox" class="btn-action btn-action-done">
    <button class="btn-action btn-action-delete">&#10008;</button>`;
    todoLi.appendChild(divAction);

    todoList.appendChild(todoLi);
    return true;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
   const taskLabel = taskInput.value.trim();
   if (taskLabel) {
    addTask(taskLabel);
    taskInput.value = "";
   } 
})