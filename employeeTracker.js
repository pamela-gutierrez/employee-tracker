var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    startingPrompt();
});

// STARTING PROMPT
function startingPrompt() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "firstPrompt",
                choices: [
                    "Add Employees",
                    "Add Roles",
                    "Add Departments",
                    "View All Roles",
                    "View All Departments",
                    "View All Employees",
                    "Update Employee Role"],
                message: "What would you like to do?"
            }
        ]);
};


// ADD EMPLOYEE QUESTIONS
function addEmployee() {
    inquirer
        .prompt([
            {
                name: "employeeID",
                type: "number",
                message: "What is the employee's ID number?"
            },
            {
                name: "employeeName",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "employeeLastName",
                type: "input",
                message: "What is the employee's last name?"
            },
        ])
};

// ADD ROLES QUESTIONS
function addRoles() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "input",

            }
        ])

}

function addDepartments() {

}


function viewAllRoles() {

}


function viewAllDepartments() {

}


function updateEmployeeRole() {

}




