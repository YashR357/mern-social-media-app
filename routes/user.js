
const User = require("../models/user.model")
const router = require("express").Router();


router.route('/add').post((req, res) => {
    try {
        let user = new User(req.body);
        console.log("user is: ", user);
        user = user.save();
        res.status(200).json({
            status: 200,
            data: user,
        })
    } catch (err) {
        console.log(err)
        res.status(400).json()
    }
})

router.route('/').get((req, res) =>
{
    User.find().then(users => res.json(users))
})

module.exports = router;