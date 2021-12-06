//import functions
const db = require('../db/connection.js');
const inquirer = require('inquirer');
const displayEmployees = require('./displayEmployees.js');

//add employee
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter employee's first name",
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log("Please enter employee's first name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter employee's last name",
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log("Please enter employee's last name");
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const params = [answer.firstName, answer.lastName]

        //get roles
        const rolesql = `SELECT role.id, role.position FROM role`;

        db.query(rolesql, (err, data) => {
            if (err) throw err;

            const roles = data.map(({ id, position }) => ({ name: position, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "Pick the employee's role",
                    choices: roles
                }
            ])
            .then(roleChoice => {
                const role = roleChoice.role;
                params.push(role);

                const managersql = `SELECT * FROM employee`;

                db.query(managersql, (err, data) => {
                    if (err) throw err;
                    const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'manager',
                            message: "Pick the employee's manager",
                            choices: managers
                        }
                    ])
                    .then(managerChoice => {
                        const manager = managerChoice.manager;
                        params.push(manager);

                        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                                    VALUES (?, ?, ?, ?)`;
                        
                        db.query(sql, params, (err, result) => {
                            if (err) throw err;
                            console.log("Employee added");
                        })

                        displayEmployees();
                    });
                });
            });
        });
    });
};

module.exports = addEmployee;