//"To-Do List" application, where we can
//add, mark and remove Tasks

const todoForm = document.getElementById("todoForm"); //get button event
const taskInput = document.getElementById("taskInput"); //get text from input placeholder
const taskList = document.getElementById("taskList"); //working with tasks

//event, where we check tasks
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
    } else {
        errorDisplay = document.createElement("p");
        errorDisplay.textContent = "Please enter a task";
        errorDisplay.classList.add("error");
    }
    taskInput.value = "";
});

//function for adding tasks
function addTask(taskText) {
    const taskItem = document.createElement("li");
    //creating new task with checkbox and delete button
    taskItem.innerHTML = `
        <div class='checkbox-container'>
            <input type='checkbox' class='checkbox'>
        </div>
        <span>${taskText}</span>
        <button class='delete-btn'>Delete</button>
    `;

    //adding the new task
    taskList.appendChild(taskItem);

    //event for deleting task
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    //for the noting the task as finished
    const checkbox = taskItem.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
        const taskSpan = taskItem.querySelector("span");
        taskSpan.style.textDecoration = checkbox.checked
            ? "line-through"
            : "none";
    });
}
