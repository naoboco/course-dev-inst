const express = require("express");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/todos", todosRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});