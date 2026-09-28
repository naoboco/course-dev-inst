require("dotenv").config();

const express = require("express");
const usersRoutes = require("./server/routes/usersRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/", usersRoutes);

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