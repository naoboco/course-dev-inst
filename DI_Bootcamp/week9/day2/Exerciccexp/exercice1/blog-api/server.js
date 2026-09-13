const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let data = [
    {
        id: 1,
        title: "First Post",
        content: "This is my first blog post."
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is my second blog post."
    }
];

app.get("/posts", (req, res) => {
    res.json(data);
});

app.get("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const post = data.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    res.status(200).json(post);
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    const newPost = {
        id: data.length
            ? Math.max(...data.map(post => post.id)) + 1
            : 1,
        title,
        content
    };

    data.push(newPost);

    res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const post = data.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const { title, content } = req.body;

    if (title !== undefined) {
        post.title = title;
    }

    if (content !== undefined) {
        post.content = content;
    }

    res.status(200).json(post);
});

app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const postIndex = data.findIndex(
        post => post.id === id
    );

    if (postIndex === -1) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const deletedPost = data.splice(postIndex, 1);

    res.status(200).json({
        message: "Post deleted",
        post: deletedPost[0]
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});