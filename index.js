const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title to your project?',
        name: 'title',
      },
      {
          type: 'input',
          message: 'Describe your project.',
          name: 'description'
      },
      {
        type: 'input',
        message: 'What would you like your install instructions to be?',
        name: 'installInstructions'
    },
    {
        type: 'input',
        message: 'Enter your usage information.',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are your testing instructions?',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'What license would you like?',
        name: 'license',
        choices: ['MIT','Apache','GPL']
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// function to initialize program
function init() {
    inquirer 
    .prompt(questions).then((response) => {
        writeToFile('README.md', generateMarkdown(response))
    } )
}

// function call to initialize program
init();
