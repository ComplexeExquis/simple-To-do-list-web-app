
// buttons
const addTask = document.getElementById("add-new-task-btn");
const deleteTask = document.getElementById("delete-task-btn");
const confirmAddTask = document.getElementById("confirm-add-task-btn");
const cancelAddTask = document.getElementById("cancel-add-task-btn");
const deleteAllTask = document.getElementById("delete-all-task-btn");

// task-input and delete-btn state
// 1 visible
// 0 invisible
let inputState = 0;
let deleteBtnState = 0;

// input and it's label
const input = document.getElementById("task-input");
const label = document.getElementById("task-input-label");

function addNewTask() {
    
    if (!inputState) 
    {
        // make it visible
        input.style.display = 'block';
        label.style.display = 'block';
        confirmAddTask.style.display = 'block';
        cancelAddTask.style.display = 'block';

        inputState = 1;
    }else 
    {
        // make it invisible
        input.style.display = 'none';
        label.style.display = 'none';
        confirmAddTask.style.display = 'none';
        cancelAddTask.style.display = 'none';

        inputState = 0;
    }

}
addTask.addEventListener("click", addNewTask);

function confirmTask() {
    if (input.value === "")
        return;
    

    // make a new <li> tag, inside it a <div> with textvalue
    const parent = document.getElementById("task-unordered-list");
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "individual-task-div";
    div.textContent = input.value;    

    li.style.display = "flex";


    li.appendChild(div);
    parent.appendChild(li);

    div.addEventListener('click', function() {
        if (div.style.textDecoration === "line-through") 
            div.style.textDecoration = "none";
        else
            div.style.textDecoration = "line-through";
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "&#10006;";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener('click', function() {
       li.remove(); 
    });

    li.appendChild(deleteBtn);

    li.style.marginTop = "0.2em";
    li.className = "individual-task-li";

    input.value = "";
}
confirmAddTask.addEventListener('click', confirmTask);
input.addEventListener('keydown', function(event) {
   if(event.key === "Enter")
        confirmTask(); 
});


function cancelTask() {
    input.value = "";
    
    addNewTask();  
}
cancelAddTask.addEventListener('click', cancelTask);

deleteTask.addEventListener('click', function() {
    
    // if input is visible, make it invisible
    if (inputState) 
        addNewTask();
    
    const delete_btns = document.getElementsByClassName("delete-btn");

    if (!deleteBtnState) 
    {
        // // make it visible
        Array.from(delete_btns).forEach((elem) => {
            elem.style.display = 'inline';
        });
        deleteAllTask.style.display = 'block';

        deleteBtnState = 1;
    }else 
    {
        // make it invisible
        Array.from(delete_btns).forEach((elem) => {
            elem.style.display = 'none';
        });
        deleteAllTask.style.display = 'none';

        deleteBtnState = 0;
    }

    deleteAllTask.addEventListener('click', function() {
        const individualTaskLi = document.getElementsByClassName("individual-task-li");
        Array.from(individualTaskLi).forEach((elem) => {
            elem.remove();
        }); 
    });
    
    // TODO
    // show x delete btn and delete all btn
});




























