const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const Parser = require("rss-parser");
const path = require("path");

const app = express();
const parser = new Parser();

const PORT = 3000;
const RSS_URL = "https://thefactfile.org/feed/";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "pages"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const getFeed = async () => {
    return await parser.parseURL(RSS_URL);
};

const getCategories = items => {
    const categories = items.flatMap(item => item.categories || []);

    return [...new Set(categories)].sort();
};

app.get("/", async (req, res) => {
    try {
        const feed = await getFeed();

        res.render("index", {
            posts: feed.items
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading RSS feed");
    }
});

app.get("/search", async (req, res) => {
    try {
        const feed = await getFeed();

        res.render("search", {
            posts: [],
            categories: getCategories(feed.items)
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading search page");
    }
});

app.post("/search/title", async (req, res) => {
    try {
        const feed = await getFeed();

        const title = req.body.title.toLowerCase();

        const posts = feed.items.filter(item =>
            item.title &&
            item.title.toLowerCase().includes(title)
        );

        res.render("search", {
            posts,
            categories: getCategories(feed.items)
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error searching by title");
    }
});

app.post("/search/category", async (req, res) => {
    try {
        const feed = await getFeed();

        const category = req.body.category;

        const posts = feed.items.filter(item =>
            item.categories &&
            item.categories.includes(category)
        );

        res.render("search", {
            posts,
            categories: getCategories(feed.items)
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error searching by category");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});