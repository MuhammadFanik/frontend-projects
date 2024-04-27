// Selecting the add task button
const addBtn = document.getElementById('add')
// Selecting the text field
const textBox = document.getElementById('todo-task')
// Selecting the task list that will be added
const taskList = document.querySelector('.tasks')

function addWork(){
    if(textBox.value === ""){
        alert("You must write something")
    }
    else{
        let newList = document.createElement('li')
        newList.innerHTML = textBox.value;
        taskList.appendChild(newList);
        let cross = document.createElement('span')
        cross.innerHTML = "\u00d7";
        newList.appendChild(cross)
    }
    textBox.value = ""
}

addBtn.addEventListener('click', addWork)

taskList.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})