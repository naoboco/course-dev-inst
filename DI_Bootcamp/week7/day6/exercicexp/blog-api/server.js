const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const posts = [
    { id: 1, title: "First post", content: "Welcome to the blog." },
    { id: 2, title: "Learning Express", content: "Routes make APIs easier to organize." }
];

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const post = posts.find(item => item.id === Number(req.params.id));

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }

    const post = {
        id: posts.length ? Math.max(...posts.map(item => item.id)) + 1 : 1,
        title,
        content
    };

    posts.push(post);
    res.status(201).json(post);
});

app.put("/posts/:id", (req, res) => {
    const post = posts.find(item => item.id === Number(req.params.id));

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    const { title, content } = req.body;

    if (!title && !content) {
        return res.status(400).json({ message: "Title or content is required" });
    }

    post.title = title ?? post.title;
    post.content = content ?? post.content;
    res.json(post);
});

app.delete("/posts/:id", (req, res) => {
    const postIndex = posts.findIndex(item => item.id === Number(req.params.id));

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post not found" });
    }

    const deletedPost = posts.splice(postIndex, 1)[0];
    res.json(deletedPost);
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
});

if (require.main === module) {
    app.listen(port, () => console.log(`Blog API running on port ${port}`));
}

module.exports = { app, posts };
