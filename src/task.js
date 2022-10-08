import "./index.js"
import { ToDoListModule } from ".";
import { projectModule } from "./project";


const taskModule = (() => {

    function renderTask(project) {
        let content = document.getElementById('content');
        content.textContent = "";
        project.tasks.forEach(ele => {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('task-container');
            
            let taskContent = `<h1 class="task-title>Title: ${ele.taskTitle}</h1>
                                <br>
                               <p class="task-description">Description: ${ele.description}</p>
                               <br>
                               <p class="task-date">Due Date: ${ele.dueDate}</p>
                               <br>
                               <p class="task-priority">Priority: ${ele.priority}</p>
                               <br>
                               <p class="task-notes">Notes: ${ele.notes}</p>
                               <br>
                               <p class="task-checklist">Checklist: ${ele.checkList}</p>
                               <button class="task-edit">Edit</button>
                               <button class="task-delete">Delete</button>
            
            `

            taskDiv.innerHTML = taskContent;
            content.appendChild(taskDiv)
        })
    }
    
   return {renderTask}

})();

export {taskModule}