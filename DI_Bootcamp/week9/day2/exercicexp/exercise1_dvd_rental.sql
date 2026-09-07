\connect dvdrental

SELECT *
FROM language;

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM film
INNER JOIN language ON film.language_id = language.language_id;

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES
    ('Jerusalem Lights'),
    ('The Last Portal'),
    ('Running Home');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id SMALLINT NOT NULL REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score SMALLINT NOT NULL CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

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
        (SELECT language_id FROM language WHERE name = 'English'),
        'Beautiful story',
        9,
        'A moving film with memorable images.'
    ),
    (
        2,
        (SELECT language_id FROM language WHERE name = 'French'),
        'Fast and surprising',
        8,
        'The story stays interesting until the end.'
    );

DELETE FROM new_film
WHERE id = 1;

SELECT *
FROM customer_review;
