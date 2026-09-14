
CREATE SCHEMA IF NOT EXISTS relationships_exercise;

SET search_path TO relationships_exercise;


-- PART I
-- =====================================


-- 1. Create Customer table

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL
);


-- Create Customer Profile table
-- UNIQUE on customer_id creates the One-to-One relationship

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    is_logged_in BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE REFERENCES customer(id)
        ON DELETE CASCADE
);


-- 2. Insert customers

INSERT INTO customer (first_name, last_name)
VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');


-- 3. Insert customer profiles using subqueries

-- John is logged in

INSERT INTO customer_profile (is_logged_in, customer_id)
VALUES (
    TRUE,
    (
        SELECT id
        FROM customer
        WHERE first_name = 'John'
        AND last_name = 'Doe'
    )
);


-- Jerome is not logged in

INSERT INTO customer_profile (is_logged_in, customer_id)
VALUES (
    FALSE,
    (
        SELECT id
        FROM customer
        WHERE first_name = 'Jerome'
        AND last_name = 'Lalu'
    )
);


-- 4.1 First name of logged-in customers

SELECT c.first_name
FROM customer AS c
JOIN customer_profile AS cp
ON c.id = cp.customer_id
WHERE cp.is_logged_in = TRUE;


-- 4.2 All customers, even customers without a profile

SELECT
    c.first_name,
    cp.is_logged_in
FROM customer AS c
LEFT JOIN customer_profile AS cp
ON c.id = cp.customer_id;


-- 4.3 Number of customers explicitly marked as not logged in

SELECT COUNT(*) AS not_logged_in
FROM customer_profile
WHERE is_logged_in = FALSE;



-- PART II
-- =========================================


-- 1. Create Book table

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);


-- 2. Insert books

INSERT INTO book (title, author)
VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee');


-- 3. Create Student table

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);


-- 4. Insert students

INSERT INTO student (name, age)
VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);


-- 5. Create Library junction table
-- Many-to-Many relationship

CREATE TABLE library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id),

    FOREIGN KEY (book_fk_id)
        REFERENCES book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (student_fk_id)
        REFERENCES student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


-- 6. Insert borrowing records using subqueries


-- John borrowed Alice In Wonderland on 15/02/2022

INSERT INTO library (
    book_fk_id,
    student_fk_id,
    borrowed_date
)
VALUES (
    (
        SELECT book_id
        FROM book
        WHERE title = 'Alice In Wonderland'
    ),
    (
        SELECT student_id
        FROM student
        WHERE name = 'John'
    ),
    '2022-02-15'
);


-- Bob borrowed To kill a mockingbird on 03/03/2021

INSERT INTO library (
    book_fk_id,
    student_fk_id,
    borrowed_date
)
VALUES (
    (
        SELECT book_id
        FROM book
        WHERE title = 'To kill a mockingbird'
    ),
    (
        SELECT student_id
        FROM student
        WHERE name = 'Bob'
    ),
    '2021-03-03'
);


-- Lera borrowed Alice In Wonderland on 23/05/2021

INSERT INTO library (
    book_fk_id,
    student_fk_id,
    borrowed_date
)
VALUES (
    (
        SELECT book_id
        FROM book
        WHERE title = 'Alice In Wonderland'
    ),
    (
        SELECT student_id
        FROM student
        WHERE name = 'Lera'
    ),
    '2021-05-23'
);


-- Bob borrowed Harry Potter on 12/08/2021

INSERT INTO library (
    book_fk_id,
    student_fk_id,
    borrowed_date
)
VALUES (
    (
        SELECT book_id
        FROM book
        WHERE title = 'Harry Potter'
    ),
    (
        SELECT student_id
        FROM student
        WHERE name = 'Bob'
    ),
    '2021-08-12'
);


-- =========================================
-- 7. DISPLAY DATA
-- =========================================


-- 7.1 Select all columns from Library

SELECT *
FROM library;


-- 7.2 Student names and borrowed book titles

SELECT
    s.name,
    b.title
FROM library AS l
JOIN student AS s
ON l.student_fk_id = s.student_id
JOIN book AS b
ON l.book_fk_id = b.book_id;


-- 7.3 Average age of students who borrowed Alice In Wonderland

SELECT AVG(s.age) AS average_age
FROM library AS l
JOIN student AS s
ON l.student_fk_id = s.student_id
JOIN book AS b
ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';


-- 7.4 Delete a student who has borrowed books

DELETE FROM student
WHERE name = 'Bob';


-- Check Library after deletion

SELECT *
FROM library;

-- Bob's borrowing records are automatically deleted
-- because the foreign key uses ON DELETE CASCADE.