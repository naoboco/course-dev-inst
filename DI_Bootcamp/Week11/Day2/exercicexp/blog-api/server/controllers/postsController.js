const postsModel = require("../models/postsModel");

async function getAllPosts(req, res, next) {
    try {
        const posts = await postsModel.getAllPosts();

        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
}

async function getPostById(req, res, next) {
    try {
        const id = req.params.id;

        const post = await postsModel.getPostById(id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
}

async function createPost(req, res, next) {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const newPost = await postsModel.createPost(
            title,
            content
        );

        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
}

async function updatePost(req, res, next) {
    try {
        const id = req.params.id;
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const updatedPost = await postsModel.updatePost(
            id,
            title,
            content
        );

        if (!updatedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        next(error);
    }
}

async function deletePost(req, res, next) {
    try {
        const id = req.params.id;

        const deletedPost = await postsModel.deletePost(id);

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted",
            post: deletedPost
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};