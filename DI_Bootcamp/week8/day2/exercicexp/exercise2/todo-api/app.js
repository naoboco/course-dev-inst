const express = require("express");
const { router } = require("./routes/todos");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/todos", router);

if (require.main === module) {
    app.listen(port, () => console.log(`Todo API running on port ${port}`));
}

module.exports = app;
