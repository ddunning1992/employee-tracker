const db = require('../db/connection.js');
const inquirer = require('inquirer');

//add a department
module.exports = addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: "Input department name.",
            validate: addDept => {
                if (addDept) {
                    return true;
                } else {
                    console.log('Please enter the department name');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (name)
                    VALUES (?)`;
        db.query(sql, answer.addDept, (err, result) => {
            if (err) throw err;
            console.log('Department added!');
            promptUser();
        })
    })
};