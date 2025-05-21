var addTaskButton = document.getElementById('addTaskBtn');
var taskInput = document.getElementById('taskInput');
var clearAll = document.getElementById('clearAll');
addTaskButton.addEventListener('click', function () {
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var taskList_1 = document.getElementById('taskList');
        var taskItem_1 = document.createElement('li');
        taskItem_1.textContent = taskText;
        taskList_1.appendChild(taskItem_1);
        taskItem_1.innerHTML = "\n            <span>".concat(taskText, "</span>\n            <button class=\"completeBtn\">Concluir</button>\n        ");
        var totalTasks = document.getElementById('totalTasks');
        totalTasks.textContent = "\n            Total de Tarefas: ".concat(taskList_1.childElementCount, "\n        ");
        var completeBtn_1 = taskItem_1.querySelector('.completeBtn');
        completeBtn_1.addEventListener('click', function () {
            taskItem_1.classList.toggle('completed');
            var finishedTasks = document.getElementById('completedTasks');
            completeBtn_1.textContent = taskItem_1.classList.contains('completed') ? 'Concluido' : 'Concluir';
            var completedCount = taskList_1.querySelectorAll('.completed').length;
            finishedTasks.textContent = "Conclu\u00EDdas: ".concat(completedCount);
        });
    }
    taskInput.value = '';
});
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});
clearAll.addEventListener('click', function () {
    var taskList = document.getElementById('taskList');
    var totalTasks = document.getElementById('totalTasks');
    var finishedTasks = document.getElementById('completedTasks');
    taskList.innerHTML = '';
    totalTasks.textContent = 'Total: 0';
    finishedTasks.textContent = 'Concluídas: 0';
});
//# sourceMappingURL=index.js.map