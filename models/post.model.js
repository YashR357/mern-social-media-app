const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: String, required: true },
    post: { type: String, required: true },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;