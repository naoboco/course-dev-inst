CREATE TABLE public.items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL
);

CREATE TABLE public.customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

INSERT INTO public.items (name, price)
VALUES
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);

INSERT INTO public.customers (first_name, last_name)
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');

SELECT *
FROM public.items;

SELECT *
FROM public.items
WHERE price > 80;

SELECT *
FROM public.items
WHERE price <= 300;

SELECT *
FROM public.customers
WHERE last_name = 'Smith';

SELECT *
FROM public.customers
WHERE last_name = 'Jones';

SELECT *
FROM public.customers
WHERE first_name <> 'Scott';