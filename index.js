const inquirer = require('inquirer');
const fs = require('fs');






const writeToFile = (response) =>

`# ${response.title} \n
![badge](https://img.shields.io/badge/license-${response.license}-blue) \n
## Table of Contents: \n
- [Description](#description) 
- [Installation](#Installation) 
- [Usage](#Usage) 
- [Credits](#Credits) 
- [License](#License) 
- [Tests](#Tests) 
- [Questions](#questions)
## Description \n ${response.description}
## Installation \n ${response.installation}
## Usage \n ${response.usage}
## Credits \n ${response.credits}
## License \nThis application is covered by the ${response.license} license.
## Test \n${response.test}
## Questions 
> - <${response.email}>
> - <https://${response.gitHub}>
`;


// // TODO: Create a function to initialize app
function init() {

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe the who, what and why of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use:',
      name: 'usage',

    },
    {
      type: 'input',
      message: 'List contributors, thrid-parties, and tutorials:',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'License:',
      name: 'license',
      choices: ['GNU GPLv3', 'MIT', 'Apache Licence 2.0' , "Mozilla Public License 2.0", "The Unlicense", "Boost License 1.0" ]
    },
    {
        type: 'input',
        message: 'Provide examples of how to run tests for your application:',
        name: 'test',
      },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'GitHub URL',
        name: 'gitHub',
    },

  ])
  .then((response) => {
    const newREADME = writeToFile(response);
    fs.writeFile('README.md', newREADME, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
 );
  }
     
  );


}

// // Function call to initialize app
init();
