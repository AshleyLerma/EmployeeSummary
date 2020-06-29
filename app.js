const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
  return inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Employee name:",
      default: "Employee Name",
    },
    {
      name: "role",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"],
      message: "Please select the employee's role.",
    },
    {
      name: "id",
      type: "input",
      message: "Employee ID:",
      default: "Employee ID",
    },
    {
      name: "email",
      type: "input",
      message: "Employee email:",
      default: "Employee Email",
    },
    {
      name: "office",
      type: "input",
      message: "What is the Manager's office number?",
      when: (userInput) => userInput.role === "Manager",
    },
    {
      name: "github",
      type: "input",
      message: "What is the Engineer's GitHub username?",
      when: (userInput) => userInput.role === "Engineer",
    },
    {
      name: "school",
      type: "input",
      message: "What's the Intern's school?",
      when: (userInput) => userInput.role === "Intern",
    },
  ]);
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

promptUser()
  .then(function (answers) {
    const html = render(answers);
    return writeFileAsync("team.html", html);
  })
  .catch(function (err) {
    console.log(err);
  });

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
