const express = require("express");

const router = express.Router();

const books = [];

router.get("/", (req, res) => {
    res.json(books);
});

router.post("/", (req, res) => {
    const {
        title,
        author,
        publishedYear
    } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({
            message: "Title, author and publishedYear are required"
        });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(
        book => book.id === id
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const {
        title,
        author,
        publishedYear
    } = req.body;

    if (title !== undefined) {
        book.title = title;
    }

    if (author !== undefined) {
        book.author = author;
    }

    if (publishedYear !== undefined) {
        book.publishedYear = publishedYear;
    }

    res.json(book);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(
        book => book.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1);

    res.json({
        message: "Book deleted",
        book: deletedBook[0]
    });
});

module.exports = router;