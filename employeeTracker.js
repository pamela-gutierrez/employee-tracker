var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

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
                name: "startingPromptOptions",
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
        ]).then(function (answer) {
            switch (answer.startingPromptOptions) {
                case "Add Employees":
                    addEmployees();
                    break;

                case "Add Roles":
                    addRoles();
                    break;

                case "Add Departments":
                    addDepartment();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "View All Departments":
                    viewAllDepartments();
                    break;

                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
            }

        })
}

// ==========================================================ADD FUNCTIONS================================================================
// Add Employee:
function addEmployees() {
    // I understand this concept but I wasn't able to execute it. I think what would need to happen is that I would set a variable equal to the role choices.
    // var roleChoices = [];
    // In this empty array we select the title from the roleTable AND then push it into the empty array. roleChoices.push(roleTable.title). In order to get that value we do a for loop to iterate through the array. 

    inquirer
        .prompt([
            {
                name: "employeeFirstName",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "employeeLastName",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "employeeRole",
                type: "list",
                message: "What is the employee's role?",
                // choices: roleChoices
            }
        ]).then(function (answer) {
            connection.query("INSERT INTO employeeTable SET ?", {
                firstName: answer.employeeFirstName,
                lastName: answer.employeeLastName,
                // : answer.employeeRole
            })
        })
};


// Add Roles:
function addRoles() {
    // var departmentChoices = []
    // all the department names go into the departmentChoices. SELECT departmentName FROM departmentTable
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: "What is the role?",
                choices: ["Manager", "Salesperson", "Web Developer"]
            },
            {
                name: "salary",
                type: "number",
                message: "What is the salary?"
            },
            {
                name: "department_id",
                type: "number",
                message: "What is the department's ID?"

            }

        ]).then(function (res) {
            connection.query("INSERT INTO roleTable SET ?", {
                title: res.role,
                salary: res.salary,
                department_id: res.department_id
            },
                function (err) {
                    if (err) throw err;
                    console.table(res);
                    startingPrompt();
                })
        })
}


// Add Department:
function addDepartment() {
    inquirer
        .prompt([
            {
                name: "departmentName",
                type: "input",
                message: "What is the department's name?"
            }
        ])
        .then(function (res) {
            connection.query(
                "INSERT INTO departmentTable SET ?",
                {
                    departmentName: res.departmentName,
                },
                function (err, res) {
                    console.log("Department added!\n");
                    viewAllDepartments();
                    // Call updateProduct AFTER the INSERT completes
                }
            );
        })
}

// ==========================================================VIEW FUNCTIONS================================================================

// View all employees:
function viewAllEmployees() {
    connection.query("SELECT * FROM employeeTable", function (err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompt();
    })
}

// View all roles:
function viewAllRoles() {
    connection.query("SELECT * FROM roleTable", function (err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompt();
    })
}

// View all departments:
function viewAllDepartments() {
    connection.query("SELECT * FROM departmentTable", function (err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompt();
    })
}
