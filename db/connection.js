const mysql = require('mysql2');

//database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Hello6874!',
        database: 'employee_db'
    },
    console.log('Connected to the employee database')
);

module.exports = db;