const inquirer = require('inquirer')

const myslq = require('mysql2')

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
    if (results.command == 'View All Departments'){
        displayDepartments();
        handleOptions();
    } else if (results.command == 'View All Roles'){

    }
}

handleOptions()