// Load environment variables
require("dotenv").config();

// Import required packages
const express = require("express");
const mongoose = require("mongoose");

// Import Post model
const Post = require("./Post");

// Create an Express app
const app = express();
app.use(express.json()); // so we can read JSON from requests

// Setup port and database URI
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log(" MongoDB connected"))
    .catch((err) => console.error(" MongoDB connection error:", err));

// Route: Create a new post
app.post("/posts", async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;

        // Create a new post document
        const post = new Post({ title, content, author, tags });

        // Save in database
        await post.save();

        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

//  Get all posts
app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
