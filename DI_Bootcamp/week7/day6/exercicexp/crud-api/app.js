const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const port = process.env.PORT || 5000;

app.get("/posts", async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log("Posts retrieved successfully");
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Unable to retrieve posts" });
    }
});

if (require.main === module) {
    app.listen(port, () => console.log(`CRUD API running on port ${port}`));
}

module.exports = app;
