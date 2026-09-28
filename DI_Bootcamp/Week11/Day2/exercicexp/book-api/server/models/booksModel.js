const pool = require("../config/db");

async function getAllBooks() {
    const result = await pool.query(
        `SELECT id, title, author, published_year AS "publishedYear"
         FROM public.books
         ORDER BY id`
    );

    return result.rows;
}

async function getBookById(id) {
    const result = await pool.query(
        `SELECT id, title, author, published_year AS "publishedYear"
         FROM public.books
         WHERE id = $1`,
        [id]
    );

    return result.rows[0];
}

async function createBook(title, author, publishedYear) {
    const result = await pool.query(
        `INSERT INTO public.books (title, author, published_year)
         VALUES ($1, $2, $3)
         RETURNING id, title, author, published_year AS "publishedYear"`,
        [title, author, publishedYear]
    );

    return result.rows[0];
}

async function updateBook(id, title, author, publishedYear) {
    const result = await pool.query(
        `UPDATE public.books
         SET title = $1,
             author = $2,
             published_year = $3
         WHERE id = $4
         RETURNING id, title, author, published_year AS "publishedYear"`,
        [title, author, publishedYear, id]
    );

    return result.rows[0];
}

async function deleteBook(id) {
    const result = await pool.query(
        `DELETE FROM public.books
         WHERE id = $1
         RETURNING id, title, author, published_year AS "publishedYear"`,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};