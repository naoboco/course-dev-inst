const booksModel = require("../models/booksModel");

async function getAllBooks(req, res, next) {
    try {
        const books = await booksModel.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}

async function getBookById(req, res, next) {
    try {
        const id = req.params.id;

        const book = await booksModel.getBookById(id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
}

async function createBook(req, res, next) {
    try {
        const { title, author, publishedYear } = req.body;

        if (!title || !author) {
            return res.status(400).json({
                message: "Title and author are required"
            });
        }

        const newBook = await booksModel.createBook(
            title,
            author,
            publishedYear
        );

        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
}

async function updateBook(req, res, next) {
    try {
        const id = req.params.id;
        const { title, author, publishedYear } = req.body;

        if (!title || !author) {
            return res.status(400).json({
                message: "Title and author are required"
            });
        }

        const updatedBook = await booksModel.updateBook(
            id,
            title,
            author,
            publishedYear
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
}

async function deleteBook(req, res, next) {
    try {
        const id = req.params.id;

        const deletedBook = await booksModel.deleteBook(id);

        if (!deletedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted",
            book: deletedBook
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};