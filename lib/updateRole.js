//import functions
const db = require('../db/connection.js');
const inquirer = require('inquirer');
const displayEmployees = require('./displayEmployees.js');

//update role
updateRole = () => {
    //get employees
    const employeesql = `SELECT * FROM employee`;

    db.query(employeesql, (err, data) => {
        if (err) throw err;

        const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));

        inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                message: "Pick which employee you would like to change roles",
                choices: employees
            }
        ])
        .then(employeeChoice => {
            const employee = employeeChoice.name;
            const params = [];
            params.push(employee);

            const rolesql = `SELECT * FROM role`;
            db.query(rolesql, (err, data) => {
                if (err) throw err;

                const roles = data.map(({ id, position }) => ({ name: position, value: id }));

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: "Pick a new role for the employee",
                        choices: roles
                    }
                ])
                .then(roleChoice => {
                    const role = roleChoice.role;
                    params.push(role);

                    let employee = params[0]
                    params[0] = role
                    params[1] = employee

                    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

                    db.query(sql, params, (err, result) => {
                        if (err) throw err;
                        console.log("Employee role updated");
                        displayEmployees();
                    });
                });
            });
        });
    });
};

module.exports = updateRole;