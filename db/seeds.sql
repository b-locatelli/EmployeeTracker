INSERT INTO department (name)
VALUES ("department"),
       ("department"),
       ("department"),
       ("department");


INSERT INTO role (title, salary, department_id)
VALUES ("jobrole", 100000, 1),
       ("jobrole", 100000, 1),
       ("jobrole", 100000, 2),
       ("jobrole", 100000, 2),
       ("jobrole", 100000, 3),
       ("jobrole", 100000, 3),
       ("jobrole", 100000, 4),
       ("jobrole", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("dog", "cat", 3, 1),
       ("dog", "cat", 5, ),
       ("dog", "cat", 8, ),
       ("dog", "cat", 2, ),
       ("dog", "cat", 3, ),
       ("dog", "cat", 7, ),
       ("dog", "cat", 6, ),
       ("dog", "cat", 1, ),
       ("dog", "cat", 4, );