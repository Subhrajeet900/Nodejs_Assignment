// Load env variables
require("dotenv").config();

// Import required packages
const express = require("express");
const mongoose = require("mongoose");

// Import Post model
const Post = require("./Post");

// Create an Express app
const app = express();
app.use(express.json());

// Setup port and database URI
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log(" MongoDB connected"))
    .catch((err) => console.error(" MongoDB connection error:", err));

// Route - Create a new post
app.post("/posts", async (req, res) => {
    console.log("Received POST /posts with body:", req.body);
    try {
        const { title, content, author, tags } = req.body;
        // Manual validation
        if (!title || title.length < 5) {
            return res.status(400).json({ error: "Title is required and must be at least 5 characters." });
        }
        if (!content || content.length < 20) {
            return res.status(400).json({ error: "Content is required and must be at least 20 characters." });
        }
        if (!author) {
            return res.status(400).json({ error: "Author is required." });
        }

        // Create a new post document
        const post = new Post({ title, content, author, tags });

        // Save in database
        await post.save();

        res.status(201).json(post);
    } catch (err) {
        console.error("Error creating post:", err); // Debug log
        res.status(500).json({ error: err.message || "Something went wrong" });
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
    console.log(`Server running on http://localhost:${PORT}`);
});
