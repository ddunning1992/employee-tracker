const db = require('../db/connection.js');

//display all departments
module.exports = displayDepartments = () => {
    console.log('Showing departments');
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};