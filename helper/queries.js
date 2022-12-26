const inquirer = require('inquirer');

function viewAllDepartments(db, mainMenu) {
    let query = `SELECT * FROM department`;
    db.query(query, function (err, res) {
        console.table(res);
        mainMenu();
    });
}