import './style.css';
import { storageModule } from "./storage";
import { projectModule } from "./project"





const ToDoListModule = (() => {

   projectModule.renderProject(storageModule.projectArray);
   
})();

