import { storageModule } from "./storage";
const projectModule = (() => {

    
    function renderProject(projects) {
        let projectListContainer = document.querySelector('.project-list');
        projectListContainer.textContent = "";
        
        projects.forEach((element, index) => {
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
        nodelist.forEach(ele => {
            ele.addEventListener('click', (e) => {
                let target = e.target.childNodes[0].textContent
                console.log(target)
                returnProjectObject(target)

                return target;

            })
        })
    }
    
    function returnProjectObject(target) {
        
    }


    return {renderProject, projectEventListener, returnProjectObject}

})();

export {projectModule};