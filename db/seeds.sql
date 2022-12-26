INSERT INTO department (department_name)
VALUES ("engineering"),
        ("Sales"),
        ("Mangament"),
        ("Development");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 80000, 1),
       ("Sales agent", 40000, 2),
        ("Manager", 100000, 3),
        ("Juniour Developer", 72000, 4),
        ("Senior Developer", 112000, 4);
        
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mitchell", "easterling", 4),
        ("John", "Smith", 5),
        ("Suzie", "Johnson", 5),
        ("Rose", "Tyler", 2),
        ("Docter", "Who", 1),
        ("Ricky", "Martin", 4),
        ("Steven", "Scarberry", 3);
        