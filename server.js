//import mysql2
const mysql = require('mysql2');
//import inquirer
const inquirer = require('inquirer');

const db = require()

//if connection succeeds, begins executing script
db.connect(err => {
    if (err) throw err;
    console.log('connection successful');
    console.log('***   Welcome to the employee tracker!   ***');
    promptUser();
});

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choicces: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
    .then((answers) => {
        const { choice } = answers;

        if (choice === 'View all departments') {
            displayDepartments();
        }
        if (choice === 'View all roles') {
            displayRoles();
        }
        if (choice === 'View all employees') {
            displayEmployees();
        }
        if (choice === 'Add a department') {
            addDepartment();
        }
        if (choice === 'Add a role') {
            addRole();
        }
        if (choice === 'Add an employee') {
            addEmployee();
        }
        if (choice === 'Update an employee role') {
            updateRole();
        };
    });
};