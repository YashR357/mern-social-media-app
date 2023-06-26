
const bcrypt = require("bcrypt");
const session = require("express-session");
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

router.route('/').get((req, res) => {
    // console.log("The session is", req)
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
}).post((req, res) =>
{
    // res.send("")
    User.find().then(users => users.forEach((user) => {
        // console.log("users:", req.body.username)
        // bcrypt.compare(req.body.password,)
        if (user.username === req.body.username && bcrypt.compare(req.body.password, user.password)) {
            console.log("User found");
            req.session.user = user
            res.send(user)
        } else {
        }
    }))
})


module.exports = router;