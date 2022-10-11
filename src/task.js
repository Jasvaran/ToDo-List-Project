import "./index.js"
import { ToDoListModule } from ".";
import { projectModule } from "./project";
import { createTaskHeading } from ".";
import { storageModule } from "./storage.js";
import { compareAsc, format, isThisWeek, isToday } from 'date-fns';
format(new Date(2014, 1, 11), 'MM/dd/yyyy')



const taskModule = (() => {
    let $taskTitle = document.getElementById('title')
    let $taskDescription = document.getElementById('description')
    let $taskDueDate = document.getElementById('dueDate')
    let $priority = document.getElementById('priority')
    let $notes = document.getElementById('notes')
    let $checkList = document.getElementById('checklist');
    let tContent = document.querySelector('.task-content');

    const taskFactory = (taskTitle, description, dueDate, priority, notes, checkList) => {
        return {taskTitle, description, dueDate, priority, notes, checkList};
    };

    function renderTask(project) {
        tContent.textContent = "";
        
        

        
        project.tasks.forEach((ele, index) => {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('task-container');
            taskDiv.setAttribute('id', index)
            
            let taskContent = `<h1 class="task-title">Title: ${ele.taskTitle}</h1>
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
                               <button class="task-edit" id=${index}>  Edit  </button>
                               <button onclick="return false" class="task-delete" id=${index}>  Delete  </button>
            
            `

            taskDiv.innerHTML = taskContent;
            tContent.appendChild(taskDiv)
        })
        deleteTaskEvent();
        editTaskEvent(storageModule.projectArray, storageModule.activeProject);
    }

    function showTaskForm() {
        let formContainer = document.querySelector('.form-container')
        formContainer.style.visibility = 'visible'
    }

    function removeTaskForm() {
        let formContainer = document.querySelector('.form-container');
        formContainer.style.visibility = 'hidden'
    }

    function clearForm() {


        $taskTitle.value = "";
        $taskDescription.value = "";
        $taskDueDate.value = "";
        $priority.value = "";
        $notes.value = "";
        $checkList.value = "";
    }

    function createNewTask(array, id) {
        



        let theDate = new Date($taskDueDate.value);
        

        let newTask = taskFactory($taskTitle.value, $taskDescription.value, theDate,
                                    $priority.value, $notes.value, $checkList.value)

       

       array[id].tasks.push(newTask)
       
       return array
        
    }

    function deleteTaskEvent() {
        let taskDelete = document.querySelectorAll('.task-delete')
        taskDelete.forEach(btn => {
           btn.addEventListener('click', (e) => {
              let taskIndex = e.target.id
              storageModule.projectArray[storageModule.activeProject].tasks.splice(taskIndex, 1)
              projectModule.returnProjectObject(storageModule.activeProjectTitle, storageModule.projectArray)
           })
        })
     }

    function renderToday(array) {
        array.forEach(project => {
            project.tasks.forEach(task => {
                if (isToday(task.dueDate) === true) {
                    renderTask(project);
                } else {
                    tContent.textContent = "";
                }
            });
        });
    };


    function renderThisWeek(array) {
        array.forEach(project => {
            project.tasks.forEach(task => {
                if (isThisWeek(task.dueDate) === true){
                    console.log(task);
                    renderTask(project);
                }
            })
        })
    }


    function editTaskEvent(array, projectID) {
        let taskEdit = document.querySelectorAll('.task-edit')

        taskEdit.forEach((task, index) => {
            task.addEventListener('click', (e) => {
                let $taskTitle = document.getElementById('title').value = array[projectID].tasks[index].taskTitle
                let $taskDescription = document.getElementById('description').value = array[projectID].tasks[index].description
                let $taskDueDate = document.getElementById('dueDate').value = array[projectID].tasks[index].dueDate
                let $priority = document.getElementById('priority').value = array[projectID].tasks[index].priority
                let $notes = document.getElementById('notes').value = array[projectID].tasks[index].notes
                let $checkList = document.getElementById('checklist').value = array[projectID].tasks[index].checkList
                storageModule.formState = 'Edit'
                storageModule.taskEditIndex = index
                showTaskForm();
                
            
                })
        })
    }

    function editTask(array, projectID, taskID) {

        let theDate = new Date($taskDueDate.value);

        array[projectID].tasks[taskID].taskTitle = $taskTitle.value
        array[projectID].tasks[taskID].description = $taskDescription.value
        array[projectID].tasks[taskID].dueDate = theDate
        array[projectID].tasks[taskID].priority = $priority.value
        array[projectID].tasks[taskID].notes = $notes.value
        array[projectID].tasks[taskID].checkList = $checkList.value
                                      

    }

    
   return {renderTask, showTaskForm, removeTaskForm, clearForm, createNewTask, renderToday, renderThisWeek, editTaskEvent, editTask} 

})();

export {taskModule}