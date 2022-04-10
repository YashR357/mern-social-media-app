
const bcrypt = require("bcrypt");
const User = require("../models/user.model")

const router = require("express").Router();


router.route('/add').post(async (req, res) => {
    try {
        let user = new User(req.body);
        console.log("user is: ", user);
        user = await user.save();
        res.status(200).json({
            status: 200,
            data: user,
        })
    } catch (err) {
        console.log(err)
        res.status(400).json()
    }
})


router.route('/').post((req, res) =>
{
    User.find().then(users => users.forEach((user) => {
        // console.log("users:", req.body.username)
        // bcrypt.compare(req.body.password, hash)
        if (user.username === req.body.username && bcrypt.compare(req.body.password, user.password)) {
            console.log("User found");
            res.send("Logged in successfully")
        } else {
            res.send("User not found")
        }
    }))
})

module.exports = router;