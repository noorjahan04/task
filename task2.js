let tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];
tasks.shift();
tasks.unshift('highPriorityTask1', 'highPriorityTask2');
tasks[tasks.length - 1] = 'newTask';
console.log(tasks);
