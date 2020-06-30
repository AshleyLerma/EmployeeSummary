// Connect to Employee Parent Class
const Employee = require("./Employee");

// Create Engineer as an extension of Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
