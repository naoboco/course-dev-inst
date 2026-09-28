const postsModel = require("../models/postsModel");

async function getAllPosts(req, res, next) {
    try {
        const posts = await postsModel.getAllPosts();

        res.json(posts);
    } catch (error) {
        next(error);
    }
}

async function getPostById(req, res, next) {
    try {
        const post = await postsModel.getPostById(
            req.params.id
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json(post);
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

        const post = await postsModel.createPost(
            title,
            content
        );

        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
}

async function updatePost(req, res, next) {
    try {
        const { title, content } = req.body;

        const post = await postsModel.updatePost(
            req.params.id,
            title,
            content
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json(post);
    } catch (error) {
        next(error);
    }
}

async function deletePost(req, res, next) {
    try {
        const post = await postsModel.deletePost(
            req.params.id
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json({
            message: "Post deleted",
            post
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