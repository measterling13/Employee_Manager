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

function addDepartment (db, mainMenu) {
    inquirer.prompt({
        type: 'input',
        message: 'What is the new Department?',
        name: 'newDep'
    }).then(function (res) {
        const newDepo = res.newDep;
        const query = `INSERT INTO department (department_name) VALUES ('${newDepo}')`;
        db.query(query, function (err, res) {
            if (err) {
                throw err
            }
            viewAllDepartments(db, mainMenu);
        });
    });
}

function addRole (db, mainMenu) {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter new title.',
            name: 'roleTitle'
        },
        {
            type: 'input',
            message: 'What is the pay for this role?',
            name: 'roleSalary',
        },
        {
           type: 'input',
           message: 'What department does this role belong too?',
           name: 'roleDept' 
        }
    ]).then(function (res) {
        const title = res.roleTitle;
        const salary = res.roleSalary;
        const deptID = res.roleDept;
        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${deptID}")`;
        db.query(query, function( err, res) {
            if (err) {
                throw err;
            }
            veiwAllRoles(db, mainMenu);
        });
    });
}

function addEmployee (db, mainMenu) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the new employees first name?',
            name: 'employFirstName'
        },
        {
            type: 'input',
            message: 'What is the new employees last name?',
            name: 'employLastName'
        },
        {
            type: 'input',
            message: 'What is the role id for this employee?',
            name: 'employRole'
        },
        {
            type: 'input',
            message: 'What is the Managers ID for this employee?',
            name: 'employManager'
        }
    ]).then(function (res) {
        const firstName = res.employFirstName;
        const lastName = res.employLastName;
        const newEmployRole = res.employRole;
        const newEmployManager = res.employManager;
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${newEmployRole}", "${newEmployManager? newEmployManager : -1}")`;

        db.query(query, function( err, res) {
            if (err) {
                throw err;
            }
            viewAllEmployees(db, mainMenu);
        });
    });
}

module.exports = {addDepartment, addEmployee, addRole, viewAllDepartments, viewAllEmployees, veiwAllRoles}