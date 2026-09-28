require("dotenv").config();

const express = require("express");
const booksRoutes = require("./server/routes/booksRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/books", booksRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.use((error, req, res, next) => {
    console.error(error);

    res.status(500).json({
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});