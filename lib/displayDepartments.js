const db = require('../db/connection.js');

//display all departments
displayDepartments = () => {
    console.log('Displaying Departments');
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

module.exports = displayDepartments;