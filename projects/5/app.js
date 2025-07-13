document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(storedTasks){
        storedTasks.forEach((task) => tasks.push(task));
        updateTasksList();
        updateStats();
    }
});

let tasks = [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))   
};


const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim("")

    if(text){
        tasks.push({ text: text, completed: false });

        updateTasksList();
        updateStats();
        saveTasks();
    }
}

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    saveTasks();
}

const removeTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();
}
const editTask = (index) => {
    const taskInput = document.getElementById("taskInput")
    taskInput.value = tasks[index].text
    
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();
}

const updateStats = () => {
    const completeTasks = tasks.filter(task => task.completed).length
    const totalTasks = tasks.length
    const progress = (completeTasks/totalTasks)*100
    const progressBar = document.getElementById("progress")
    progressBar.style.width = `${progress}%`

    document.getElementById("numbers").innerText = `${completeTasks} / ${totalTasks}`

    if(tasks.length && completeTasks === totalTasks){
        blastConfetti();
    }
}

const updateTasksList = () => {
    const taskList = document.getElementById("task-list")
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li")

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed':''}">
                <input type="checkbox" class="checkbox ${task.completed ? 'completed':''}"/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <svg onclick="editTask(${index})" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                <svg onclick="removeTask(${index})" xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#d01111" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </div>  
        </div>  
        `

        listItem.addEventListener("change", () => toggleTaskComplete(index))
        taskList.appendChild(listItem);
    })
}

document.getElementById("newTask").addEventListener("click", (e) => {
    e.preventDefault();

    addTask();
})

const blastConfetti = () => {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}