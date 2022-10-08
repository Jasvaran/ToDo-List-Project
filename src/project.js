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
    
    }


    return {renderProject}

})();

export {projectModule};