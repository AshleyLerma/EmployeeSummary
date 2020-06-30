# EmployeeSummary

This is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

See it in action here:
(Video to come)

## Usage

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Install

Prepare with :

`npm install`

Launch CLI with :

`node app.js`

## Minimum Requirements for this project

- Functional application.

- GitHub repository with a unique name and a README describing the project.

- User can use the CLI to generate an HTML page that displays information about their team.

- All tests must pass.

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

- Name

- Role

- ID

- Role-specific property (School, link to GitHub profile, or office number)
