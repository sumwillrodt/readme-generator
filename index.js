// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github Username.',
            validate: usernameInput => {
                if (usernameInput) {
                return true;
                } else {
                console.log('Please enter your Github Username!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Please enter your email address!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title', 
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('Please enter the title of your project!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Describe your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                console.log('Please enter a description of you project!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation', 
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                return true;
                } else {
                console.log('Please provide instructions on how to get the development environment running.');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage', 
            message: 'Please provide instructions and examples for how to use your application?',
            validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('Please explain how to use your application.');
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmImage',
            message: 'Would you like to include an image?',
            default: false
        },
        {
            type: 'input',
            name: 'usageImage',
            message: 'Please enter the relative filepath.',
            when: ({ usageImageInput }) => {
                if (usageImageInput) {
                return true;
                } else {
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'imageDesc',
            message: 'Please provide a brief description of the image.',
            when: ({ imageDescInput }) => {
                if (imageDescInput) {
                return true;
                } else {
                return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the license that the application is covered under.',
            choices: ['MIT', 'GPL', 'Apache', 'Ms-PL', 'BSD', 'Other']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter a description of any tests for your application and descriptions on how to run them.',
        }
    ]);
};

// TODO: Create a function to write README file
const writeFile = (filedata) => {
    fs.writeFile('./dist/README.md', generateMarkdown(filedata), err => {
        if (err) {
            reject(err);
            return;
        }
    });
};



// TODO: Create a function to initialize app



// Function call to initialize app
promptUser()
    .then(response => {
        return writeFile(response);
        // console.log(fileData)
    })
    .catch(err => {
        console.log(err);
      });
