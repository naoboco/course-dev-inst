const express = require("express");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

if (require.main === module) {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
