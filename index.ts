const addTaskButton = document.getElementById('addTaskBtn') as HTMLButtonElement;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const clearAll = document.getElementById('clearAll') as HTMLButtonElement;

addTaskButton!.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        
        taskList!.appendChild(taskItem);
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="completeBtn">Concluir</button>
        `;

        const totalTasks = document.getElementById('totalTasks');
        totalTasks.textContent = `Total de Tarefas: ${taskList!.childElementCount}`;

        const completeBtn = taskItem.querySelector('.completeBtn') as HTMLButtonElement;
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            const finishedTasks = document.getElementById('completedTasks') as HTMLElement;

            completeBtn.textContent = taskItem.classList.contains('completed') ? 'Concluido' : 'Concluir';

            const completedCount = taskList.querySelectorAll('.completed').length;
            finishedTasks.textContent = `Concluídas: ${completedCount}`;

    })
        }

        taskInput.value = '';
    });

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});

clearAll!.addEventListener('click', () => {
    const taskList = document.getElementById('taskList');
    const totalTasks = document.getElementById('totalTasks');
    const finishedTasks = document.getElementById('completedTasks');
    
    taskList!.innerHTML = '';
    totalTasks.textContent = 'Total: 0';
    finishedTasks.textContent = 'Concluídas: 0';
});
