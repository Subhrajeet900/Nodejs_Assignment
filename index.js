
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");


const Post = require("./Post");

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Route: Create a new post
app.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body); 
    await post.save(); // save to database
    res.status(200).json(post); 
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Route: Get all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find(); 
    res.json(posts); 
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
