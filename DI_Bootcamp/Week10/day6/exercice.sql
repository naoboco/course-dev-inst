
-- EXERCISE 1 : DVD RENTAL



-- 1. Get a list of all languages

SELECT *
FROM language;


-- 2. Get all films joined with their languages

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM film
JOIN language
ON film.language_id = language.language_id;


-- 3. Get all languages, even if there are no films in those languages

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;


-- 4. Create new_film table and add some films

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES
    ('My First Film'),
    ('My Second Film'),
    ('My Third Film');


-- 5. Create customer_review table

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_review_film
        FOREIGN KEY (film_id)
        REFERENCES new_film(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_review_language
        FOREIGN KEY (language_id)
        REFERENCES language(language_id)
);


-- 6. Add 2 movie reviews

INSERT INTO customer_review (
    film_id,
    language_id,
    title,
    score,
    review_text
)
VALUES
(
    1,
    (SELECT language_id
     FROM language
     WHERE TRIM(name) = 'English'
     LIMIT 1),
    'Great movie',
    9,
    'I really enjoyed this movie.'
),
(
    2,
    (SELECT language_id
     FROM language
     WHERE TRIM(name) = 'English'
     LIMIT 1),
    'Good movie',
    8,
    'A very entertaining film.'
);


-- Check reviews before deleting a film

SELECT *
FROM customer_review;


-- 7. Delete a film that has a review

DELETE FROM new_film
WHERE id = 1;


-- Check what happened to customer_review
-- The review linked to film_id = 1 is automatically deleted
-- because the foreign key uses ON DELETE CASCADE.

SELECT *
FROM customer_review;



-- =========================================
-- EXERCISE 2 : DVD RENTAL
-- =========================================


-- 1. Change the language of some films
-- Use a valid language from the language table

UPDATE film
SET language_id = (
    SELECT language_id
    FROM language
    WHERE TRIM(name) = 'French'
    LIMIT 1
)
WHERE film_id IN (1, 2);


-- 2. Foreign keys defined for the customer table

SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
AND tc.table_name = 'customer';


-- The customer table has foreign keys such as:
-- store_id -> store
-- address_id -> address
--
-- This means that when inserting a customer,
-- store_id and address_id must reference existing valid rows.


-- 3. Drop customer_review table

DROP TABLE customer_review;

-- This is easy because the foreign keys belong to customer_review itself.
-- PostgreSQL removes these constraints when the table is dropped.
-- If another table depended on customer_review, extra checking would be needed.


-- 4. Count rentals that have not been returned

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;


-- 5. Find the 30 most expensive outstanding movies

SELECT DISTINCT
    film.film_id,
    film.title,
    film.replacement_cost
FROM film
JOIN inventory
    ON film.film_id = inventory.film_id
JOIN rental
    ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;


-- 6.1 Film about a sumo wrestler
-- with Penelope Monroe as one of the actors

SELECT DISTINCT
    film.film_id,
    film.title,
    film.description
FROM film
JOIN film_actor
    ON film.film_id = film_actor.film_id
JOIN actor
    ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%'
AND actor.first_name = 'PENELOPE'
AND actor.last_name = 'MONROE';


-- 6.2 Short documentary, less than 1 hour, rated R

SELECT
    film_id,
    title,
    description,
    length,
    rating
FROM film
WHERE description ILIKE '%documentary%'
AND length < 60
AND rating = 'R';


-- 6.3 Film rented by Matthew Mahan
-- payment over $4
-- returned between July 28 and August 1, 2005

SELECT DISTINCT
    film.film_id,
    film.title,
    payment.amount,
    rental.return_date
FROM customer
JOIN rental
    ON customer.customer_id = rental.customer_id
JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
JOIN film
    ON inventory.film_id = film.film_id
JOIN payment
    ON rental.rental_id = payment.rental_id
WHERE customer.first_name = 'MATTHEW'
AND customer.last_name = 'MAHAN'
AND payment.amount > 4
AND rental.return_date >= '2005-07-28'
AND rental.return_date < '2005-08-02';


-- 6.4 Film watched by Matthew Mahan
-- containing "boat" in title or description
-- choose the most expensive one to replace

SELECT DISTINCT
    film.film_id,
    film.title,
    film.description,
    film.replacement_cost
FROM customer
JOIN rental
    ON customer.customer_id = rental.customer_id
JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
JOIN film
    ON inventory.film_id = film.film_id
WHERE customer.first_name = 'MATTHEW'
AND customer.last_name = 'MAHAN'
AND (
    film.title ILIKE '%boat%'
    OR film.description ILIKE '%boat%'
)
ORDER BY film.replacement_cost DESC
LIMIT 1;