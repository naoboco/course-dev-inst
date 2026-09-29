const express = require("express");
const path = require("path");
const usersRoutes = require("./server/routes/usersRoutes");

const app = express();
const PORT = 5004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRoutes);

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "register.html")
    );
});

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