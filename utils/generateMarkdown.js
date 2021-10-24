// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// const renderLicenseBadge = license => {
//   if 
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license}

## Description
${data.description}

## Table of Contents
-[Installation](##-installation)
-[Usage](##-usage)
-[License](##-license)
-[Contributions](##-contributions)
-[Tests](##-tests)
-[Questions](##-questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)


## Tests
${data.tests}

## Questions
My Github username is [${data.username}](https://github.com/${data.username}/).
For any questions, feel free to (reach out to me)[mailto:${data.email}].
`
};

module.exports = generateMarkdown;
