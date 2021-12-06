const db = require('../db/connection.js');

//display all employees
displayEmployees = () => {
    console.log('Displaying Employees');
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.position, department.name AS department, role.pay,
                CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

module.exports = displayEmployees;