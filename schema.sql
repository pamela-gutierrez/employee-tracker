DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE departmentTable (
 id INT NOT NULL AUTO_INCREMENT,
 departmentName VARCHAR(20) NOT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE roleTable (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departmentTable (id)
);

CREATE TABLE employeeTable (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
 --    manager_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roleTable (id),
--     FOREIGN KEY (manager_id) REFERENCES employeeTable(id),
    PRIMARY KEY (id)
);

-- DEPARTMENTS
INSERT INTO departmentTable (departmentName)
VALUES ("Sales");

INSERT INTO departmentTable (departmentName)
VALUES ("Management");

INSERT INTO departmentTable (departmentName)
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

SELECT * FROM employeeTable;
SELECT * FROM departmentTable;
SELECT * FROM roleTable;
