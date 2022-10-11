import './style.css';
import { storageModule } from "./storage";
import { projectModule } from "./project"
import { taskModule } from './task';
import { compareAsc, format, isSameDay } from 'date-fns';
format(new Date(2014, 1, 11), 'MM/dd/yyyy')





let bottom = document.querySelector('.bottom');
let addProjectBtn = document.querySelector('.add-project');
let content = document.getElementById('content');
let addNewTaskBtn = document.querySelector('.add-task-button');
let cancelTaskFormBtn = document.querySelector('.cancel-submit');
let formElement = document.querySelector('form');
let today = document.querySelector('.today')






addProjectBtn.addEventListener('click', () => {
   let inputBar = document.createElement('input');
   inputBar.setAttribute('id', 'project');

   let inputDiv = document.createElement('div');
   inputDiv.classList.add('input-div');

   let addBtn = document.createElement('button');
   addBtn.classList.add('add');
   addBtn.textContent = 'Add';
   addBtn.addEventListener('click', () => {
      projectModule.addNewProject(storageModule.projectArray);
      projectModule.renderProject(storageModule.projectArray);
      projectModule.projectEventListener();
   })

   let cancelBtn = document.createElement('button');
   cancelBtn.classList.add('cancel');
   cancelBtn.textContent = 'Cancel';
   cancelBtn.addEventListener('click', () => {
      inputBar.remove()
      inputDiv.remove();
   })

   inputDiv.appendChild(addBtn);
   inputDiv.appendChild(cancelBtn);
   bottom.appendChild(inputBar);
   bottom.appendChild(inputDiv);

});



addNewTaskBtn.addEventListener('click', () => {
   taskModule.showTaskForm();
})


cancelTaskFormBtn.addEventListener('click', () => {
   console.log('cancel');
   taskModule.clearForm();
   taskModule.removeTaskForm();
})

formElement.addEventListener('submit', (e) => {
   e.preventDefault();
   taskModule.createNewTask(storageModule.projectArray, storageModule.activeProject);
   projectModule.returnProjectObject(storageModule.activeProjectTitle, storageModule.projectArray);
   taskModule.clearForm();
   taskModule.removeTaskForm();


})

today.addEventListener('click', () => {
   taskModule.renderToday(storageModule.projectArray);
})





const ToDoListModule = (() => {

   let dateA = new Date(2022, 9, 10)
   let currentDate = new Date();
   console.log(currentDate)
   let result = isSameDay(dateA, currentDate);
   console.log(result)
   
   projectModule.renderProject(storageModule.projectArray);
   
   
   projectModule.projectEventListener();
   

   
   
  

   
   
   
})();










export {ToDoListModule};