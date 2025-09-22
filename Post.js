const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {

        type: String,
        required: true,
        minlength: 5
    },
    content: {

        type: String,
        required: true,
        minlength: 20
    },
    author: {

        type: String,
        required: true
    },
    tags: {

        type: [String],
        default: []
    },
    likes: {

        type: Number,
        default: 0
    },
    createdAt: {

        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
