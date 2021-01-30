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

// VIEW ALL EMPLOYEES

function viewAllEmployees() {
    connection.query("SELECT * FROM employeeTable", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

// ADD EMPLOYEE QUESTIONS
function addEmployee() {

    // var query = connection.query("INSERT INTO employeeTable SET ?",
    //     {
    //         firstName: "Rocky Road",
    //         lastName: 3.0,
    //         roleID: 50
    //     },
    //     function (err, res) {
    //         console.log(res.affectedRows + " product inserted!\n");
    //         // Call updateProduct AFTER the INSERT completes
    //         updateProduct();
    //     }
    // )
    inquirer
        .prompt([
            {
                name: "employeFirstName",
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
                choices: ["Salesperson", "Manager", "Web Developer"]
            }
        ]).then(function (answer) {
            connection.query("INSERT INTO employee SET ?", {
                employeeFirstName: answer.employeeFirstName,
                employeeLastName: answer.employeeLastName,
                employeeRole: answer.employeeRole
            })
        })
};

// UPDATE EMPLYEE MANAGER
function updateEmployeeManager() {
    var done = this.async();
    inquirer
        .prompt([
            {
                name: "manager",
                type: "list",
                message: "Which employee's manager do you want to update?",
                choices: "EMPLOYEES"
                // DISPLAY ALL EMPLOYEE LIST
            },
            {
                name: "updateEmployeeManager",
                type: "list",
                message: "Which employee do you want to set as manager for the selected employee?",
                choices: "THIS WOULD BE ALL EMPLOYEES"
            }
            // KICK BACK TO STARTING PROMPT
        ])
}

// ADD ROLES QUESTIONS
function addRoles() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "input",
                message: "What is the role?"
            },
            {
                name: "salary",
                type: "number",
                message: "What is the salary?"
            },
            {
                name: "depID",
                type: "number",
                message: "What is the department ID?"

            }
        ])

}

function removeEmployee() {
    inquirer
        .prompt([
            {
                name: "removeEmployee",
                type: "list",
                message: "Which employee do you want to remove?",
                choices: " INSERT LIST  OF EVERY EMPLOYEE IN EMPLOYEE TABLE SO MAYBE DO FUNCTION TO DISPLAY EMPLOYEES?"
            }
            // THEN THEY CHOOSE THE EMPLOYEE AND I DISPLAY "Removed employee from database."
            // THEN KICK THEM BACK TO STARTING PROMPT
        ])
}

function addDepartment() {
    inquirer
        .prompt([
            {
                name: "depName",
                type: "input",
                message: "What is the department's name?"
            },
            {
                name: "depID",
                type: "number",
                message: "What is the department ID?"
            }
        ])
}


function viewAllRoles() {
    connection.query("SELECT * FROM roleTable", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}


function viewAllDepartments() {
    connection.query("SELECT * FROM departmentTable", function (err, res) {
        if (err) throw err;
        console.table(res);
    });
}


            // function updateEmployeeRole() {
            //     inquirer
            //         .prompt([
            //             {
            //                 name: "updateEmployeeRole",
            //                 type: "list",
            //                 message: "Which employee's role would you like to update?",
            //                 choices: "LIST ALL EMPLOYEES HERE"

            //             }
            //         ])

            // }
