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
