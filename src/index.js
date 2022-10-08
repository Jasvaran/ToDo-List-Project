import './style.css';
import { storageModule } from "./storage";
import { projectModule } from "./project"
import { taskModule } from './task';


let bottom = document.querySelector('.bottom');
let addProjectBtn = document.querySelector('.add-project');





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

})






const ToDoListModule = (() => {

   
   
   projectModule.renderProject(storageModule.projectArray);
   
   
   projectModule.projectEventListener();

   
   
  

   
   
   
})();



export {ToDoListModule};