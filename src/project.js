import { storageModule } from "./storage";
import { taskModule } from "./task";
import { createTaskHeading } from ".";
const projectModule = (() => {

    let projectFactory = (projectTitle) => {
        let tasks = [];
        return {projectTitle, tasks}
    }

    
    function renderProject(projects) {
        let projectListContainer = document.querySelector('.project-list');
        projectListContainer.textContent = "";
        projects.forEach((element, index) => {
            console.log(element)
            let projectButton = document.createElement('button');
            projectButton.textContent = element.projectTitle
            projectButton.classList.add('project-button');
            projectButton.setAttribute('id', index);

           
            projectListContainer.appendChild(projectButton);
            
            
            
        })
        
        
        
        return projectListContainer;
    };

    function projectEventListener() {
        
        let nodelist = document.querySelectorAll('.project-button')
        nodelist.forEach((ele, index) => {
            ele.addEventListener('click', (e) => {
                
                let target = e.target.childNodes[0].textContent
                // console.log(e)
                // console.log(e.target.id)
                setActiveProject(e.target.id)
                setActiveProjectTitle(target)
                
                
                
                returnProjectObject(target, storageModule.projectArray)

                

            })
        })
    }

    function setActiveProject(id) {
        storageModule.activeProject = id;
        return storageModule.activeProject;
    };

    function setActiveProjectTitle(title) {
        storageModule.activeProjectTitle = title;
        return storageModule.activeProjectTitle;
    };

    
    
    function returnProjectObject(target, array) {
        array.forEach(project => {
            if (target === project.projectTitle){
                taskModule.renderTask(project)
            };
        });
    };

    function addNewProject(array){
        let input = document.querySelector('#project');
        let inputDiv = document.querySelector('.input-div')
        let newProject = projectFactory(input.value)
        array.push(newProject);
        console.log(array)
        input.remove()
        inputDiv.remove();



        
    }

    function deleteProject(array) {
        let deleteInput = prompt('Name of project you want to delete')
        array.forEach((project, index) => {
            if (deleteInput === project.projectTitle){
                array.splice(index, 1);
            } else {
                return;
            }
        })
    }


    return {renderProject, projectEventListener, returnProjectObject, addNewProject, setActiveProject, deleteProject}

})();

export {projectModule};