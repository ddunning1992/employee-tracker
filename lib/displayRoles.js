const db = require('../db/connection.js');


//display all roles
displayRoles = () => {
    console.log('Displaying Roles');
    const sql = `SELECT role.id, role.position, role.pay, department.name AS department FROM role
                INNER JOIN department on role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

module.exports = displayRoles;