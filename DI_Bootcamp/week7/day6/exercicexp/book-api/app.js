const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const books = [
    { id: 1, title: "The Little Prince", author: "Antoine de Saint-Exupéry", publishedYear: 1943 },
    { id: 2, title: "Pride and Prejudice", author: "Jane Austen", publishedYear: 1813 },
    { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 }
];

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
    const book = books.find(item => item.id === Number(req.params.bookId));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: "All book fields are required" });
    }

    const newBook = {
        id: books.length ? Math.max(...books.map(book => book.id)) + 1 : 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put("/api/books/:bookId", (req, res) => {
    const book = books.find(item => item.id === Number(req.params.bookId));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title ?? book.title;
    book.author = req.body.author ?? book.author;
    book.publishedYear = req.body.publishedYear ?? book.publishedYear;
    res.json(book);
});

app.delete("/api/books/:bookId", (req, res) => {
    const bookIndex = books.findIndex(item => item.id === Number(req.params.bookId));

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(books.splice(bookIndex, 1)[0]);
});

if (require.main === module) {
    app.listen(port, () => console.log(`Book API running on port ${port}`));
}

module.exports = { app, books };
