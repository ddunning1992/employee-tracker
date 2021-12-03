const db = require('../../db/connection.js');

//display all departments
displayDepartments = () => {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    db.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

//add a department
addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: "Input department name.",
            validate: addDept => {
                if (addDept) {
                    return true;
                } else {
                    console.log('Please enter the department name');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (name)
                    VALUES (?)`;
        db.query(sql, answer.addDept, (err, result) => {
            if (err) throw err;
            console.log('Department added!');
        })
    })
}

module.exports = {
    displayDepartments,
    addDepartment
};