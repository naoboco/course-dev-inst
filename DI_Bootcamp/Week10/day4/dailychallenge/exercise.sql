CREATE TABLE FirstTab (
    id integer,
    name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5, 'Pawan'),
(6, 'Sharlee'),
(7, 'Krish'),
(NULL, 'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

SELECT * FROM SecondTab;


-- Q1
-- Expected output: 0

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NULL
);


-- Q2
-- Expected output: 2
-- Rows with ids 6 and 7

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id = 5
);


-- Q3
-- Expected output: 0

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
);


-- Q4
-- Expected output: 2
-- Rows with ids 6 and 7

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);