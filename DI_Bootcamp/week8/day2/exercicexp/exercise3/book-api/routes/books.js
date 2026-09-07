const express = require("express");

const router = express.Router();
const books = [];
let nextId = 1;

router.get("/", (req, res) => {
    res.json(books);
});

router.post("/", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
    }

    const book = { id: nextId++, title, author };
    books.push(book);
    res.status(201).json(book);
});

router.put("/:id", (req, res) => {
    const book = books.find(item => item.id === Number(req.params.id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title ?? book.title;
    book.author = req.body.author ?? book.author;
    res.json(book);
});

router.delete("/:id", (req, res) => {
    const bookIndex = books.findIndex(item => item.id === Number(req.params.id));

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(books.splice(bookIndex, 1)[0]);
});

module.exports = { router, books };
