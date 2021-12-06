//import functions
const db = require('../db/connection.js');
const inquirer = require('inquirer');
const displayRoles = require('./displayRoles.js');

//add a role
addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: "Input role name",
            validate: role => {
                if (role) {
                    return true;
                } else {
                    console.log('Please enter the name of the role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pay',
            message: "What is the pay for this role?",
            validate: pay => {
                if (isNaN(pay)) {
                    console.log('Please enter the pay for this role');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(answer => {
        const params = [answer.role, answer.pay];

        //get department
        const rolesql = `SELECT name, id FROM department`;

        db.query(rolesql, (err, data) => {
            if (err) throw err;

            const dept = data.map(({ name, id }) => ({ name: name, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'dept',
                    message: "What department is this role in?",
                    choices: dept
                }
            ])
            .then(departmentChoice => {
                const dept = departmentChoice.dept;
                params.push(dept);

                const sql = `INSERT INTO role (position, pay, department_id)
                            VALUES (?, ?, ?)`;

                db.query(sql, params, (err, result) => {
                    if (err) throw err;
                    console.log('Role Added!');
                    displayRoles();
                });
            });
        });
    });
};

module.exports = addRole;