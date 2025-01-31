const menu= document.getElementById("btn")
const listemenu= document.getElementById("menu")
const btn =document.getElementById("tache")
const table=document.getElementById("table")
const acc=document.getElementById("acc")
const acceuil=document.getElementById("acceuil")
const add= document.getElementById("add")
const Create= document.getElementById("Create")
const done = document.getElementById("done")


menu.addEventListener("click",()=>{
    listemenu.style.display = listemenu.style.display == "block" ? "none" : "block"
})

btn.addEventListener("click",()=>{
    table.style.display="block"
    listemenu.style.display="none"

})

acc.addEventListener("click",()=>{
    table.style.display="none"
    listemenu.style.display="none"
})

add.addEventListener("click",()=>{
    Create.style.display="block"
})

done.addEventListener("click",(e)=>{
    e.preventDefault()
    Create.style.display="none"
})
// Pomodoro Tiimer
let timerInterval;
let timerSeconds = 1500;

const timerDisplay = document.getElementById('timerDisplay');
const startTimer = document.getElementById('startTimer');
const pauseTimer = document.getElementById('pauseTimer');
const resetTimer = document.getElementById('resetTimer');
const shortBreak = document.getElementById('shortBreak');
const longBreak = document.getElementById('longBreak');

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const seconds = (timerSeconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;

}

startTimer.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('Pomodoro session complete!');
            }
        }, 1000);
    }
});

pauseTimer.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetTimer.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 1500;
    updateTimerDisplay();
});

shortBreak.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 300;
    updateTimerDisplay();
});

longBreak.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 900;
    updateTimerDisplay();
});

updateTimerDisplay();

document.addEventListener("DOMContentLoaded", () => {
    const taskList = [];
    const taskContainer = document.querySelector("#table .grid");
    const addButton = document.getElementById("add");
    const createTaskSection = document.getElementById("Create");
    const doneButton = document.getElementById("done");
    const titleInput = document.querySelector("input[placeholder='Title']");
    const priorityInput = document.getElementById("category");
    const descriptionInput = document.getElementById("description");

    addButton.addEventListener("click", () => {
        createTaskSection.style.display = "block";
    });

    doneButton.addEventListener("click", (event) => {
        event.preventDefault();
        const title = titleInput.value.trim();
        const priority = priorityInput.value;
        const description = descriptionInput.value.trim();
        
        if (title) {
            const task = { id: Date.now(), title, priority, description };
            taskList.push(task);
            renderTasks();
            createTaskSection.style.display = "none";
            titleInput.value = "";
            priorityInput.value = "Select";
            descriptionInput.value = "";
        }
    });

    function renderTasks() {
        taskContainer.innerHTML = "";
        taskList.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("col-span-2", "mt-4", "mb-4");
            taskElement.innerHTML = `
                <div class="flex">
                    <div class="bg-[#D9D9D9] border border-gray-300 rounded-lg w-full h-12 mt-2 flex items-center pl-4">
                        ${task.title} (${task.priority})
                    </div>
                    <div class="flex justify-end mt-2">
                        <button onclick="editTask(${task.id})" class="bg-[#4DA1A9] rounded-lg mx-2 w-12 h-12 text-white hover:bg-[#489299]">EDIT</button>
                        <button onclick="deleteTask(${task.id})" class="bg-[#FB1920] rounded-lg mx-2 text-white hover:bg-[#D42228]">DELETE</button>
                    </div>
                </div>
            `;
            taskContainer.appendChild(taskElement);
        });
    }

    window.editTask = (taskId) => {
        const task = taskList.find(t => t.id === taskId);
        if (task) {
            titleInput.value = task.title;
            priorityInput.value = task.priority;
            descriptionInput.value = task.description;
            createTaskSection.style.display = "block";
            deleteTask(taskId);
        }
    };

    window.deleteTask = (taskId) => {
        const taskIndex = taskList.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            taskList.splice(taskIndex, 1);
            renderTasks();
        }
    };
});
