const inquirer = require('inquirer')


const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bikerdude7770',
  database: 'employee_db'
});

async function displayDepartments() {
  try {
    const [rows] = await connection.promise().query('SELECT * FROM department');
    console.log('Departments:');
    console.table(rows);
  } catch (error) {
    console.error('Error retrieving departments:', error);
  }
  console.log("#####")
}

async function displayRoles() {
  try {
    const [rows] = await connection.promise().query('SELECT * FROM role');
    console.log('Roles:');
    console.table(rows);
  } catch (error) {
    console.error('Error retrieving roles:', error);
  }
};

async function displayEmployees() {
  try {
    const [rows] = await connection.promise().query('SELECT * FROM employee');
    console.log('Employees:');
    console.table(rows);
  } catch (error) {
    console.error('Error retrieving employees:', error);
  }
};

async function newDepartment() {
  const result = await inquirer.prompt([{
    message: 'What would you like to name this department?',
    name: 'department',
    type: 'input'
  }])
  console.log(result.department)
 try {
  const response = await connection.promise().query(`INSERT INTO department (name) Values (?)`, [result.department])
  console.log(response)
 } catch (error) {
  console.log('Error creating new department:', error);
 }
};

async function newRole() {
  const result = await inquirer.prompt([{
    message: 'What would you like to name this Role?',
    name: 'title',
    type: 'input'
  },
  {
    message: 'How much does this role make?',
    name: 'salary',
    type: 'input'
  },
  {
    message: 'What department does this role belong to?',
    name: 'department_id',
    type: 'input'
  }
])
  console.log(result.title)
  console.log(result.salary)
  console.log(result.department_id)
 try {
  const response = await connection.promise().query(`INSERT INTO role (title, salary, department_id) Values (?, ?, ?)`, [result.title, result.salary, result.department_id])
  console.log(response)
 } catch (error) {
  console.log('Error creating new Role:', error);
 }
};

async function newEmployee() {
  const result = await inquirer.prompt([{
    message: 'What is the employees first name?',
    name: 'first_name',
    type: 'input'
  },
  {
    message: 'What is the employees last name?',
    name: 'last_name',
    type: 'input'
  },
  {
    message: 'what is the emnployes role id?',
    name: 'role_id',
    type: 'input'
  },
  {
    message: 'what is the employees managers id?',
    name: 'manager_id',
    type: 'input'
  }
])
  console.log(result.first_name)
  console.log(result.last_name)
  console.log(result.role_id)
  console.log(result.manager_id)
 try {
  const response = await connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) Values (?, ?, ?, ?)`, [result.first_name, result.last_name, result.role_id, result.manager_id])
  console.log(response)
 } catch (error) {
  console.log('Error creating new employee:', error);
 }
};

async function updatedEmployee() {
  const result = await inquirer.prompt([{
    message: 'Enter employee id:',
    name: 'employee_id',
    type: 'input'
  },
  {
    message: 'Enter new role:',
    name: 'role_id',
    type: 'input'
  }
])
  console.log(result.employee_id)
  console.log(result.role_id)
 try {
  const response = await connection.promise().query(`UPDATE employee SET role_id = ? WHERE id =?`, [result.role_id, result.employee_id])
  console.log(response)
 } catch (error) {
  console.log('Error creating new employee:', error);
 }
};


async function handleOptions() {
    const options = [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add a Employee',
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
    } else if (result.command == 'Add a Department'){
      await newDepartment();
      handleOptions();
    } else if (result.command == 'Add a Role'){
      await newRole();
      handleOptions();
    } else if (result.command == 'Add a Employee'){
      await newEmployee();
      handleOptions();
    } else if (result.command == 'Update an Employee Role'){
      await updatedEmployee();
      handleOptions();
    }
}

handleOptions()