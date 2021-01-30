-- DEPARTMENTS
INSERT INTO departmentTable (department_id, departmentName)
VALUES ("Sales");

INSERT INTO departmentTable (department_id, departmentName)
VALUES ("Management");

INSERT INTO departmentTable (department_id, departmentName)
VALUES ("Engineering");


-- ROLE TABLE
INSERT INTO roleTable (title, salary, department_id)
VALUES ("Manager", 200000, 2);

INSERT INTO roleTable (title, salary, department_id)
VALUES ("Web Developer", 70000, 3);

INSERT INTO roleTable (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);


-- EMPLOYEES
INSERT INTO employeeTable (firstName, lastName, role_id)
VALUES ("Amani" , "Draper", 1);

INSERT INTO employeeTable (firstName, lastName, role_id)
VALUE ("Lila", "Bowman", 3);

INSERT INTO employeeTable (firstName, lastName, role_id)
VALUES ("Cassius" , "Holland", 3);

INSERT INTO employeeTable (firstName, lastName, role_id)
VALUE ("Athena", "Lopez", 2);

INSERT INTO employeeTable (firstName, lastName, role_id)
VALUE ("Al", "Moody", 3);