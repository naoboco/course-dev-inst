-- Exercise 1 : Items and customers

-- 1. All items, ordered by price from lowest to highest
SELECT *
FROM public.items
ORDER BY price ASC;

-- 2. Items with price >= 80, ordered from highest to lowest
SELECT *
FROM public.items
WHERE price >= 80
ORDER BY price DESC;

-- 3. First 3 customers in alphabetical order by first name
SELECT first_name, last_name
FROM public.customers
ORDER BY first_name ASC
LIMIT 3;

-- 4. All last names only, in reverse alphabetical order
SELECT last_name
FROM public.customers
ORDER BY last_name DESC;