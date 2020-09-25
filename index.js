const inquirer = require("inquirer");
const fs = require("fs"); 

function promptUser() {
    return inquirer.prompt([

        {   
            type: "input",
            name: "title",
            message: "What would you like to name your ReadMe?"
        }

        {   
            type: "input",
            name: "description",
            message: "How would you briefly describe your project?"
        }


        {   
            type: "input",
            name: "installation",
            message: "How does a User the application? Write instructions here "
        }

        {   
            type: "input",
            name: "usage",
            message: "How does a User properly use this application? Write Usage iinstructions here"
        }

        {   
            type: "input",
            name: "contributions",
            message: "What are the contributions of this project?"
        }

        {   
            type: "input",
            name: "license",
            message: "What license are you using?"
        }




    ]);
}