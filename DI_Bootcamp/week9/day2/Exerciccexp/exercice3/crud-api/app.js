const express = require("express");

const {
    fetchPosts
} = require("./data/dataService");

const app = express();

const PORT = 5000;

app.get("/api/posts", async (req, res) => {
    try {
        const posts = await fetchPosts();

        console.log(
            "Posts retrieved successfully"
        );

        res.status(200).json(posts);
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Error retrieving posts"
        });
    }
});

app.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});