// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-red)
### Description
${data.description}

### Table of Contents
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  


### Installation
${data.installInstructions}


### Usage
${data.usageInfo}

### License
The license you have selected is ${data.license}
### Contributing
${data.contribution}
### Tests
${data.testInstructions}
### Questions
[Github page](https://github.com/${data.userName})  
With further questions, please e-mail <${data.email}>
`;
}

module.exports = generateMarkdown;
