const express = require("express");
const tasksRoutes = require("./server/routes/tasksRoutes");

const app = express();
const PORT = 5002;

app.use(express.json());

app.use("/tasks", tasksRoutes);

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