let counter=0;
var tasks = [];
const task=new Object();
let taskname;
let taskstatus;
let taskprio;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".submit").onclick = submit;
})

function submit(){
    let taskname=document.getElementById("taskname").value;
    console.log(taskname);
    taskprio=document.getElementById("selectprio").value;
    console.log(taskprio);
    const radioButtons = document.querySelectorAll('input[name="taskradio"]');
    radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
      taskstatus = radioButton.value;
      console.log(taskstatus);
      }
    });
    task.taskname=taskname;
    task.taskstatus=taskstatus;
    task.taskprio=taskprio;
    tasks.push(task);
    const node = document.createElement("li");
    node.id=counter;
    const namenode = document.createTextNode(taskname);
    const statusnode = document.createTextNode(" Status: " + taskstatus);
    const prionode = document.createTextNode(" Trask priority: " + taskprio);
    const doneButton = document.createElement("button");
    doneButton.textContent = "Mark done";
    doneButton.class="done";
    doneButton.addEventListener("click", () => {
        const listItem = event.target.parentElement;
        listItem.style.textDecoration = "line-through";
      });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        delete task[counter];
        const listItem = event.target.parentElement;
        listItem.remove();
      });
    node.appendChild(namenode);
    node.appendChild(prionode);
    node.appendChild(statusnode);
    node.appendChild(doneButton);
    node.appendChild(deleteButton);

    document.getElementById("tasklist").appendChild(node);
    counter++;
    document.getElementById('taskname').value ="";
}
