-- DEPARTMENTS
INSERT INTO departmentTable (departmentName)
VALUES ("Executive Department");

INSERT INTO departmentTable (departmentName)
VALUES ("Magical Law Enforcement");

INSERT INTO departmentTable (departmentName)
VALUES ("Department for the Improper Use of Magic");


-- ROLE TABLE
INSERT INTO roleTable (title, salary, departmentID)
VALUES ("Minister of Magic", 200000, 1);

INSERT INTO roleTable (title, salary, departmentID)
VALUES ("Junior Assistant", 70000, 1);

INSERT INTO roleTable(title, salary departmentID)
VALUES ("Department Manager", 80000, 3);

INSERT INTO roleTable (title, salary, departmentID)
VALUES ("Auror", 100000, 2);


-- EMPLOYEES
INSERT INTO employeeTable (firstName, lastName, roleID)
VALUES ("Cornelius" , "Fudge", 1);

INSERT INTO employeeTable (firstName, lastName, roleID)
VALUE ("Percy", "Weasly", 2);

INSERT INTO employeeTable (firstName, lastName, roleID)
VALUES ("Kinsley" , "Shacklebolt", 3);

INSERT INTO employeeTable (firstName, lastName, roleID)
VALUE ("Arthur", "Weasly", 4);

INSERT INTO employeeTable (firstName, lastName, roleID)
VALUE ("Alastor", "Moody", 3);