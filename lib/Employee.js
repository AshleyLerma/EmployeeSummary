// Create Employee Class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  // Create functions to call certain values

  getName(name) {
    return this.name;
  }

  getId(id) {
    return this.id;
  }
  getEmail(email) {
    return this.email;
  }
  getRole(role) {
    return this.role;
  }
}

module.exports = Employee;
