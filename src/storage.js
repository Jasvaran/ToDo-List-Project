import { compareAsc, format } from 'date-fns';
format(new Date(2014, 1, 11), 'MM/dd/yyyy')
const storageModule = (() => {

    let activeProject;
    let activeProjectTitle;
    let activeInput;
    let formState;
    let taskEditIndex;


    let projectArray = [
        {
            projectTitle: 'Homework',
            tasks: [
                {
                    taskTitle: 'English Essay',
                    description: 'Write a two page essay on a current event',
                    dueDate: new Date(2022, 9, 12),
                    priority: 'High',
                    notes: 'N/A',
                    checkList: 'N/A'
                },
                {
                    taskTitle: 'Math Problems',
                    description: 'Finish math problems',
                    dueDate: new Date(2022, 9, 10),
                    priority: 'Low',
                    notes: 'N/A',
                    checkList: 'N/A'
                },
            ] 
        },
        {
            projectTitle: 'Work',
            tasks: [
                {
                    taskTitle: 'Meeting with client 1',
                    description: 'Meet with client about contract',
                    dueDate: new Date(2022, 11, 10),
                    priority: 'High',
                    notes: 'N/A',
                    checkList: 'N/A',
                }
            ]
        }
    ]




    function testOne() {
        let taskDelete = document.querySelector('.task-delete')
        console.log(taskDelete)
    }
    return {projectArray,
            testOne,
            activeProject,
            activeProjectTitle,
            activeInput,
            formState,
            taskEditIndex
            
    }

})();



export {storageModule};


