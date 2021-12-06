const db = require('../db/connection.js');
const inquirer = require('inquirer');

//add a department
addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'dept',
            message: "Input department name.",
            validate: dept => {
                if (dept) {
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
        db.query(sql, answer.dept, (err, result) => {
            if (err) throw err;
            console.log('Department added!');
            displayDepartments();
        })
    })
};

module.exports = addDepartment;