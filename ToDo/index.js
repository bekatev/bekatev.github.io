


  document.getElementById('add-button').onclick = addTask;



function addTask(event){
    event.preventDefault();
    let newToDo = document.querySelector(".newToDo");
    if(newToDo.value === ""){
        return null;
    }
    let newLI = document.createElement('li');
    newLI.innerText = newToDo.value;
    newLI.classList.add("list-item");
    let list = document.getElementById('list');
    list.appendChild(newLI);
    newToDo.value = "";

    let taskDate = document.getElementById("calendar").value;

    addButton(newLI,taskDate,'date-class');
    taskDate = "";

    //add complete button
    addButton(newLI,'<i class="fas fa-check-square"></i>','complete-button');
    //add remove button
    addButton(newLI,'<i class="fas fa-trash-alt"></i>','remove-button');
    removeTask();
    completeTask(); 
    unCompleteTask();
}



function addButton(par, text, className){
    let btn = document.createElement('button');
    btn.innerHTML = text;
    par.appendChild(btn);
    btn.classList.add(className);
}



function removeTask(){
    let taskList = document.getElementsByClassName('remove-button');
    for(let i = 0; i < taskList.length; i++){
        taskList[i].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
          });
    }
}
function completeTask(){
    let taskList = document.getElementsByClassName('complete-button');
    for(let i = 0; i < taskList.length; i++){
        taskList[i].addEventListener("click", function() {
                this.parentElement.classList.add("completed-task");
                this.parentElement.classList.remove("list-item");               
          });
    }
}
function unCompleteTask(){
    let taskList = document.getElementsByClassName('complete-button');
    for(let i = 0; i < taskList.length; i++){
        taskList[i].addEventListener("dblclick", function() {
                this.parentElement.classList.remove("completed-task");  
                this.parentElement.classList.add("list-item");              
          });
    }
}



    