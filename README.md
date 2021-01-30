## Employee Tracker

This is a command line application that allows the user to navigate, create, and update their employee database with only a few clicks. It's a work in progress and some features remain inaccessible but will be updated soon. The database allows for an indefinite number of employees, departmetns, and roles. 

* [See Live Video Walkthrough](https://drive.google.com/file/d/1LBeHsP5UgwcKag2AknaRObkizj3WwCHZ/view)

## **Built With**
* [Git Hub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
* [MySQL](https://www.mysql.com/)
* [Node](https://nodejs.org/en/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
*  Git - used to track changes to code
______________________________________________________________________________
  
### **Installation**

Installation for this application is fairly simple. You will need to complete the following installs on your Bash or Terminal:
"npm mysql"
"npm inquirer"
"npm console.table"

From there you are set to go! 

______________________________________________________________________________

#### **Code Snippet**

This application kicks off with a single prompt that in turn guides the rest of the user experience. The startingPrompt function uses inquirer.js to ask the initial questions. From there, the switch function allows for different functions (and concurrent prompts) to be issued based on the user's response to the startingPrompt. At the end of each function, the user is once again asked the startingPrompt so they can choose to completele additional tasks such as adding more departments or employees.
```
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
        });
}
```
From there, the switch function allows for different functions (and concurrent prompts) to be issued based on the user's response to the startingPrompt. At the end of each function, the user is once again asked the startingPrompt so they can choose to completele additional tasks such as adding more departments or employees.
```
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
```
__________________________________________________________________________

### **Author Links**

* **PAMELA GUTIERREZ**
* **UC Berkeley Coding Bootcamp**
  
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)



______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   