//import mysql2
const mysql = require('mysql2');
//import inquirer
const inquirer = require('inquirer');

//import functions
const db = require('./db/connection.js')
const displayDepartments = require('./lib/displayDepartments.js');
const addDepartment = require('./lib/addDepartment.js');
const displayRoles = require('./lib/displayRoles.js');
const displayEmployees = require('./lib/displayEmployees.js');
const addRole = require('./lib/addRole.js');
const addEmployee = require('./lib/addEmployee.js');
const updateRole = require('./lib/updateRole');

//if connection succeeds, begins executing script
db.connect(err => {
    if (err) throw err;
    console.log('connection successful');
    console.log('***   Welcome to the employee tracker!   ***');
    promptUser();
});

promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
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
        const { choices } = answers;

        if (choices === 'View all departments') {
            displayDepartments();
        }
        if (choices === 'View all roles') {
            displayRoles();
        }
        if (choices === 'View all employees') {
            displayEmployees();
        }
        if (choices === 'Add a department') {
            addDepartment();
        }
        if (choices === 'Add a role') {
            addRole();
        }
        if (choices === 'Add an employee') {
            addEmployee();
        }
        if (choices === 'Update an employee role') {
            updateRole();
        };
    });
};