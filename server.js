//import mysql2
const mysql = require('mysql2');
//import inquirer
const inquirer = require('inquirer');

//database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hello6874!',
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connection successful');
    init();
});

init = () => {
    console.log('Welcome to the employee tracker!');
    promptUser();
};

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
}