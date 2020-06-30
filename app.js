// All variables and required connections to other pages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Blank employees array to hold all employee objects
let employees = [];

// Function to add employees
function promptUser() {
  return (
    inquirer
      .prompt([
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
        {
          name: "newEmployee",
          type: "confirm",
          message: "Would you like to add another employee?",
        },
      ])
      // Use answers to create an employee that is pushed to the employees array
      .then((answers) => {
        switch (answers.role) {
          case "Manager": {
            employees.push(
              new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.office
              )
            );
            break;
          }
          case "Engineer": {
            employees.push(
              new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
              )
            );
            break;
          }
          case "Intern":
            employees.push(
              new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
              )
            );
            break;
        }
        // If they say yes to adding more employees reprompt, otherwise render html passing in the employees array
        if (answers.newEmployee === true) {
          promptUser();
        } else {
          const html = render(employees);
          renderHtml(html);
        }
      })
  );
}
// renderHTML by first checking for existing output folder then creating one if none existant
const renderHtml = (html) => {
  fs.access(OUTPUT_DIR, function (error) {
    if (error) {
      console.log("Directory does not exist. Making Directory.");
      fs.mkdir(OUTPUT_DIR, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`successfully created.`);
          writeHtml(html);
        }
      });
    } else {
      writeHtml(html);
    }
  });
};
// write to the html file
const writeHtml = (html) => {
  fs.writeFile(outputPath, html, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("team.html successfully written");
    }
  });
};

promptUser();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
