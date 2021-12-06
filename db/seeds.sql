INSERT INTO department (name)
VALUES
    ('Injection Molding'),
    ('Tooling'),
    ('Maintenance'),
    ('Engineering');

INSERT INTO role (position, pay, department_id)
VALUES
    ('Operator', 32000, 1),
    ('Team Lead', 36000, 1),
    ('Toolsetter', 40000, 1),
    ('Process Technician', 70000, 1),
    ('Tooling Technician', 60000, 2),
    ('Maintenance Technician', 55000, 3),
    ('Junior Engineer', 50000, 4),
    ('Senior Engineer', 100000, 4),
    ('Production Manager', 120000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Rachel', 'Rooks', 9, null),
    ('Chris', 'Lane', 8, 1),
    ('Chelsea', 'Havens', 7, 1),
    ('Mark', 'Meers', 6, 2),
    ('Aurther', 'Sharp', 6, 2),
    ('Jim', 'Jones', 5, 2),
    ('John', 'Jameson', 4, 2),
    ('Alexa', 'Smith', 3, 7),
    ('Eric', 'White', 3, 7),
    ('Damon', 'Pearce', 2, 7),
    ('Lisa', 'Brown', 1, 10),
    ('Bob', 'Wagner', 1, 10),
    ('Mike', 'Williams', 1, 10);