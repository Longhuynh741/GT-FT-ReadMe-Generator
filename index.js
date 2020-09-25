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
            name: "name",
            message: "What is your name?",
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

        },

        {   
            type: "input",
            name: "gitHubUser",
            message: "What is your GitHub username?",
        },
        {   
            type: "input",
            name: "email",
            message: "What is your Email?",
        },
        {   
            type: "input",
            name: "linkedinUrl",
            message: "What is your LinkedIn url?",
        },

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
- [Questions](#questions)
    
## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}


## Contribution
${answers.contributions}

## Questions
If you would like to reach out to me, here are my contact informatioon: 
GitHub username: [${answers.gitHubUser}](</n>
Email: ${answers.email}</n>
LinkedIn Url: ${answers.linkedinUrl}</n>,


## License
${answers.license}
Copyright (c) [2020] </n>
[${answers.name}]

`}


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