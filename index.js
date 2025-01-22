// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions for your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Add project's usage information.",
    },
    {
      // WHEN I choose a license for my application from a list of options
      type: "list",
      name: "license",
      message: "Please choose a license for your project.",
      choices: [
        "GNU General Public License v3.0",
        "Apache License 2.0",
        "MIT",
        "None",
        "Boost Software License 1.0",
        "None",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Specify contribution guidelines for the project for other developers.",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide test instructions for your project.",
    },
    {
      // WHEN I enter my email address
      type: "input",
      name: "questions",
      message: "Please provide a contact email address for questions about your project.",
    },
    {
      // WHEN I enter my GitHub username
      type: "input",
      name: "github",
      message: "GitHub username:",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
    console.log("We're working on it! Sit tight while ReadME File is being created!");
    writeToFile("./result/README.md", generateMarkdown({...response}));
    });
}

// Function call to initialize app
init();
