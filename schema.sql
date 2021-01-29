DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE departmentTable (
 departementID INT NOT NULL AUTO_INCREMENT,
 departmentName VARCHAR(10) NOT NULL,
 PRIMARY KEY (departmentID)
);

CREATE TABLE roleTable (
    roleId INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departmentID INT NOT NULL
    PRIMARY KEY (roldID)
    FOREIGN KEY (department_id) REFERENCES departmentTable (departmentID)
);

CREATE TABLE employeeTable (
    employeeID INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    roleID INT NOT NULL,
    managerID INT NOT NULL,
    FOREIGN KEY (roleID) REFERENCES roleTable (roleID) 
    FOREIGN KEY (managerID) REFERENCES employeeTable(roleID),
    PRIMARY KEY (employeeID),
);



SELECT * FROM employeeTable;
SELECT * FROM departmentTable;
SELECT * FROM roleTable;




