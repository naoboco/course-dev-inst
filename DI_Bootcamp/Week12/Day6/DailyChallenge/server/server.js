const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello From Express"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});