// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([    
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter your name!');
                return false;
                }
            }
        },
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
            name: 'github',
            message: 'Enter the url to your Github profile.',
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log('Please enter the url to your Github profile!');
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
            type: 'choices',
            name: 'license',
            message: 'Please choose the license that the application is covered under.',
            choices: ['MIT', 'GPL', 'Apache', 'Ms-PL', 'BSD', 'Other']
        }    
    ]);
};


// TODO: Create a function to write README file
const generateReadme = data => {
    return`
        # ${title}
        
        ## Description
        ${description}

        ## Table of Contents
        -[Installation](##-installation)
        -[Usage](##-usage)
        -[License](##-license)
        -[Contributions](##-contributions)
        -[Tests](##-tests)
        -[Questions](##-questions)

        ## Installation
        ${installation}

        ## Usage
        ${usage}

        ## License
        ${license}

        ## Contributing
        ${contributing}

        ## Tests
        ${tests}

        ## Questions
        My Github username is [${username}](https://github.com/sumwillrodt).
        For any questions, reach out to me at [${email}](mailto:87799429+sumwillrodt@users.noreply.github.com).

        ${questions}

    `
};

function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
