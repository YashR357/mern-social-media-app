
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
            // req.session.save()
            // console.log(req)
            // res.message = "Logged in successfully"
            // session.save
            res.send(user)
            // return
        } else {
            // res.send("User not found")
        }
    }))
    // res.send("User not found")
})

// router.route('/').get((req, res) => {
//     if (req.session && req.session.user) {
//         // Assuming User.findById is used to retrieve the user by ID from the database
//         User.findById(req.session.user).then(user => {
//             if (user) {
//                 res.send({loggedIn: true, user: user});
//             } else {
//                 res.send({loggedIn: false});
//             }
//         }).catch(err => {
//             console.error(err);
//             res.send({loggedIn: false});
//         });
//     } else {
//         res.send({loggedIn: false});
//     }
// });

// router.route('/').post((req, res) => {
//     User.findOne({username: req.body.username}).then(user => {
//         if (user && bcrypt.compareSync(req.body.password, user.password)) {
//             req.session.user = user._id; // Store user ID in the session
//             res.send(user);
//         } else {
//             res.send("User not found");
//         }
//     }).catch(err => {
//         console.error(err);
//         res.send("User not found");
//     });
// });

module.exports = router;