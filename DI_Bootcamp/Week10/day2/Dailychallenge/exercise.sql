-- Exercise 1

-- 1. Count how many actors are in the table

SELECT COUNT(*)
FROM actors;


-- 2. Try to add a new actor with blank fields

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Test', NULL, NULL, NULL);

-- Expected outcome:
-- The insertion should fail if these columns have NOT NULL constraints.
-- PostgreSQL does not allow NULL values in columns defined as NOT NULL.