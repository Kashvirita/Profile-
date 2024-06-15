const InputEl=document.querySelector("#input");
const buttonEl=document.querySelector("#delete")
const outputEl=document.querySelector("#listcontainer")
const form=document.querySelector("form")


const removeTask= id =>{
    let tasks;
    if(localStorage.getItem('tasks')==null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks',tasks))
    }
    tasks=tasks.filter((task)=>{
        return task.id !== +id
    })
    localStorage.setItem("tasks",JSON.stringify(tasks))
    getTask();
}


const getTask=()=>{
    let tasks;
    if(localStorage.getItem("tasks")==null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"))
    }
    console.log(tasks)
    //Display in the Dom
    let output;
    const allTask=tasks.map(task =>{
        return `
        <li id="item">
            <span>${task.title}</span>
            <button onclick="removeTask('${task.id}')" id="delete">X</button>
        </li>
        `
    })
    output=allTask.join("");
    outputEl.innerHTML = output
}
getTask();
const addTask = e=>{
    e.preventDefault();
    if(InputEl.value==""){
        alert("Please enter a task");
    }
    const task= InputEl.value
    if(task){
        let tasks;
        if(localStorage.getItem('tasks')==null){
            tasks=[]
        }
        else{
            tasks=JSON.parse(localStorage.getItem('tasks'))
        }
        tasks.unshift({
            id: Date.now(),
            title:task
        });

        localStorage.setItem("tasks",JSON.stringify(tasks));
        InputEl.value="";
    }
    getTask();
} 

form.addEventListener("submit",addTask) 