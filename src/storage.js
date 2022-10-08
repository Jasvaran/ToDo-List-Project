const storageModule = (() => {

    let projectArray = [
        {
            projectTitle: 'Homework',
            tasks: [
                {
                    taskTitle: 'English Essay',
                    description: 'Write a two page essay on a current event',
                    dueDate: '10/20/2022',
                    priority: 'High',
                    notes: 'N/A',
                    checkList: 'N/A'
                },
                {
                    taskTitle: 'Math Problems',
                    description: 'Finish math problems',
                    dueDate: '5/20/2022',
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
                    dueDate: 'N/A',
                    priority: 'High',
                    notes: 'N/A',
                    checkList: 'N/A',
                }
            ]
        }
    ]


    function testOne() {
        console.log("testing import functions")
    }
    return {projectArray,
            testOne
    }

})();



export {storageModule};


