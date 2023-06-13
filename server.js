const inquirer = require('inquirer')
const express = require('express');

const app = express();

const mysql = require('mysql2')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Bikerdude7770',
    database: 'employee_db'
  },
  console.log(`Connected to the movies_db database.`)
);

app.get('/api/department', (req, res) => {
  const sql = `SELECT fid, Department`;

  console.log(sql);
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    console.log(rows);
    res.json({
      message: 'success',
      data: rows
    });
  });
});


async function handleOptions() {
    const options = [
        'view All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role'
    ]
    const result = await inquirer.prompt([{
        message: 'What would you like to do?',
        name: 'command',
        type: 'list',
        choices: options,
    }])
    if (result.command == 'View All Departments'){
        await displayDepartments();
        handleOptions();
    } else if (result.command == 'View All Roles'){
        await displayRoles();
        handleOptions();
    } else if (result.command == 'View All Employees'){
        await displayEmployees();
        handleOptions();
    }
}

handleOptions()