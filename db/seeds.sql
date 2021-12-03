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