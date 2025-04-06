function TaskManager(){
    let tasks=[];
    let id=1;
    return{
    addTask(title){
      let newTask={
        id:id++,
        title:title,
        completed:false,
      };
      tasks.push(newTask);
    },
    getAllTasks(){
    return JSON.stringify(tasks,null,2);
    },
    markcomplete(taskId){
    let task=tasks.find(t=>t.id==taskId);
    if(task){
      task.completed=true;
    }
    },
    removeTask(taskId){
    tasks=tasks.filter(t=>t.id!==taskId);
    },
    getPendingTasks(){
    return tasks.filter(t=>!t.completed).map(t=>t.title);
    },
    getCompletedTasks(){
    return tasks.filter(t=>t.completed).map(t=>t.title);
    },
    sortTasks(){
    return tasks
    .slice()
    .sort((a,b)=>
    a.title.localeCompare(b.title))
    .map(t=>t.title);
    }
    };
    }
    
    let myTasks=TaskManager();
    myTasks.addTask("Do laundry");
    myTasks.addTask("Finish project");
    myTasks.addTask("Read book");
    myTasks.markcomplete(2);
    console.log("All Tasks:");
    console.log(myTasks.getAllTasks());
    console.log("Pending:");
    console.log(myTasks.getPendingTasks());
    console.log("Completed:");
    console.log(myTasks.getCompletedTasks());
    console.log("Sorted Titles:");
    console.log(myTasks.sortTasks());
    myTasks.removeTask(1);
    console.log("After Removing Task")
    console.log(myTasks.getAllTasks());