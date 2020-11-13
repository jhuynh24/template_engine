const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
