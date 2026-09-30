const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello From Express"
  });
});

app.post("/api/world", (req, res) => {
  console.log("Request body:", req.body);

  const value = req.body.value;

  res.json({
    message: `I received your POST request. This is what you sent me: ${value}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});