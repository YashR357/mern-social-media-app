
const Post = require("../models/post.model")

const router = require("express").Router();

router.route('/addPost').post((req, res) => {
    try {
        let post = new Post(req.body);
        // console.log("user is: ", user);
        post = post.save();
        res.status(200).json({
            status: 200,
            data: post,
        })
    } catch (err) {
        console.log(err)
        res.status(400).json()
    }
})

router.route('/').get((req, res) =>
{
    Post.find().then(post => res.json(post))
})

module.exports = router;