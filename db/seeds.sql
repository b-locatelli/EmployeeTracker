USE employee_db

-- adds the department name into the table
INSERT INTO department (name)
VALUES ("Construction Worker"),
       ("Equipment"),
       ("Schedualing"),
       ("Management");


-- adds role information into the table
INSERT INTO role (title, salary, department_id)
VALUES ("General Laborer", 75000, 1),
       ("Skilled laborer", 90000, 1),
       ("Equipent Maintenance", 50000, 2),
       ("Equipment operator", 70000, 2),
       ("Schedualer", 50000, 3),
       ("Safety Manager", 80000, 4),
       ("Construction Foreperson", 110000, 4);

-- adds employees and information into the table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Edward", "Riggs", 6, NULL),
       ("Douglas", "Sandoval", 7, NULL),
       ("Marc", "Dotson", 3, 3),
       ("Wayne", "Norris", 5, 3),
       ("David", "Manning", 3, 3),
       ("Aamir", "Hoover", 4, 3),
       ("Tyrell", "Branch", 1, 6),
       ("Randy", "Morales", 2, 6);

       SELECT * FROM employee;
       SELECT * FROM department;

       