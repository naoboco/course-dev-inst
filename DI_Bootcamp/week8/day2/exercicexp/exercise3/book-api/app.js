const express = require("express");
const { router } = require("./routes/books");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/books", router);

if (require.main === module) {
    app.listen(port, () => console.log(`Book API running on port ${port}`));
}

module.exports = app;
