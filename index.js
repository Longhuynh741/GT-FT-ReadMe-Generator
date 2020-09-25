const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(answers) {
    return inquirer.prompt([

        {   
            type: "input",
            name: "title",
            message: "What would you like to name your ReadMe?",
        },

        {   
            type: "input",
            name: "description",
            message: "How would you briefly describe your project?",
        },


        {   
            type: "input",
            name: "installation",
            message: "How does a User the application? Write instructions here ",
        },

        {   
            type: "input",
            name: "usage",
            message: "How does a User properly use this application? Write Usage iinstructions here",
        },

        {   
            type: "input",
            name: "contributions",
            message: "What are the contributions of this project?",
        },

        {   
            type: "list",
            name: "license",
            message: "What license are you using?",
            choices: [ "MIT", "ISC"]

        }


    ]);
}

function generateMarkdown(answers) {
return `# [Title] 
## - Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license) 
    
## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}


## Contribution
${answers.contributions}


## License
${answers.license}`}

promptUser()
    .
    then(function (answers) {
        const readMe = generateMarkdown(answers);

        return writeFileAsync("ReadMe.md", readMe);
    })
    .then(function () {
        console.log("Wrote ReadMe successfully");
    })
    .catch(function (err) {
        console.log(err);
    });