-- Exercise 1 - DVD Rental

-- 1
SELECT *
FROM language;

-- 2
SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM film
JOIN language
ON film.language_id = language.language_id;

-- 3
SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;