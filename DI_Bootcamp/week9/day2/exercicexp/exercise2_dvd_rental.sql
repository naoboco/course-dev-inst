\connect dvdrental

UPDATE film
SET language_id = (
    SELECT language_id
    FROM language
    WHERE name = 'French'
)
WHERE film_id IN (1, 2, 3);

SELECT
    key_columns.column_name,
    referenced_columns.table_name AS referenced_table,
    referenced_columns.column_name AS referenced_column
FROM information_schema.table_constraints AS constraints
INNER JOIN information_schema.key_column_usage AS key_columns
    ON constraints.constraint_name = key_columns.constraint_name
   AND constraints.table_schema = key_columns.table_schema
INNER JOIN information_schema.constraint_column_usage AS referenced_columns
    ON constraints.constraint_name = referenced_columns.constraint_name
   AND constraints.table_schema = referenced_columns.table_schema
WHERE constraints.constraint_type = 'FOREIGN KEY'
  AND constraints.table_name = 'customer';

SELECT 'A customer needs valid store_id and address_id values before it can be inserted.' AS answer;

DROP TABLE customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT DISTINCT
    film.film_id,
    film.title,
    film.replacement_cost
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC, film.title ASC
LIMIT 30;

SELECT DISTINCT
    film.film_id,
    film.title,
    film.description
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%'
  AND actor.first_name = 'Penelope'
  AND actor.last_name = 'Monroe';

SELECT film_id, title, description, length, rating
FROM film
WHERE length < 60
  AND rating = 'R'
  AND description ILIKE '%documentary%';

SELECT DISTINCT
    film.film_id,
    film.title,
    payment.amount,
    rental.return_date
FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id
INNER JOIN payment ON rental.rental_id = payment.rental_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND payment.amount > 4
  AND rental.return_date >= '2005-07-28'
  AND rental.return_date < '2005-08-02';

SELECT DISTINCT
    film.film_id,
    film.title,
    film.description,
    film.replacement_cost
FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND (
      film.title ILIKE '%boat%'
      OR film.description ILIKE '%boat%'
  )
ORDER BY film.replacement_cost DESC
LIMIT 1;
