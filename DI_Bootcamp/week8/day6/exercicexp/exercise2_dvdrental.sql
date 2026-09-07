\connect dvdrental

SELECT *
FROM customer;

SELECT first_name || ' ' || last_name AS full_name
FROM customer;

SELECT DISTINCT create_date
FROM customer;

SELECT *
FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address
WHERE district = 'Texas';

SELECT *
FROM film
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Inception';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'In%';

SELECT *
FROM film
ORDER BY rental_rate ASC, film_id ASC
LIMIT 10;

SELECT *
FROM film
ORDER BY rental_rate ASC, film_id ASC
LIMIT 10 OFFSET 10;

SELECT film_id, title, description, release_year, rental_rate
FROM (
    SELECT
        film_id,
        title,
        description,
        release_year,
        rental_rate,
        ROW_NUMBER() OVER (ORDER BY rental_rate ASC, film_id ASC) AS row_number
    FROM film
) AS ranked_films
WHERE row_number BETWEEN 11 AND 20;

SELECT
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC, payment.payment_date ASC;

SELECT film.*
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
WHERE inventory.inventory_id IS NULL;

SELECT city.city, country.country
FROM city
INNER JOIN country ON city.country_id = country.country_id
ORDER BY country.country, city.city;

SELECT
    payment.staff_id,
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date
FROM payment
INNER JOIN customer ON payment.customer_id = customer.customer_id
ORDER BY payment.staff_id ASC, customer.customer_id ASC;
