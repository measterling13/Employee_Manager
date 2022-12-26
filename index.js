const inquirer = require('inquirer');
const express = require('express');
const mysql2 = require('mysql2');
require('dotenv').config();



const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
);

db.connect(function (err) {
    if (err) throw err;
    mainMenu();
});

function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "mainMenu",
        message: "What you want to know?",
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Exit'
        ]
    })
    .then(function(answer) {
        switch (answer.mainMenu){
            case 'View All Departments':
                viewAllDepartments(db, mainMenu);
                break;
            case 'View All Roles':
                veiwAllRoles(db, mainMenu);
                break;
            case 'View All Employees':
                viewAllEmployees(db, mainMenu);
                break;
            case 'Add Department':
                addDepartment(db, mainMenu);
                break;
            case 'Add Role':
                addRole(db, mainMenu);
                break;
            case 'Add Employee':
                addEmployee(db, mainMenu);
                break;
            case 'Exit':
                db.end();
                break;
        }
    });
}