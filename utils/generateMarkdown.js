// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##Description
${data.description}

##Table of Contents
${data.table}
-[Description](#description) 
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Testing](#testing)
-[Questions](#questions)

##Installation
${data.installation}
##Usage
${data.usage}
##License
${data.license}
##Contributing
${data.contributing}
##Tests
${data.tests}
##Questions
For questions about this project, please contact me at (mailto:${data.questions}) or visit my GitHub profile at [github/${data.github}]`;
}

export default generateMarkdown;
