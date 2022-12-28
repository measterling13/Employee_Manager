const inquirer = require('inquirer');

function viewAllDepartments(db, mainMenu) {
    let query = `SELECT * FROM department`;
    db.query(query, function (err, res) {
        console.table(res);
        mainMenu();
    });
}

function viewAllEmployees(db, mainMenu) {
    let query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id`;
    db.query(query, function (err, res){
     console.table(res);
     mainMenu();
    }); 
 }

 function veiwAllRoles(db, mainMenu) {
    let query = `SELECT * FROM role`;
    db.query(query, function (err, res) {
        console.table(res);
        mainMenu();
    });
}