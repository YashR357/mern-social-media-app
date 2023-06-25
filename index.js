const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const router = express.Router();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors( {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser(process.env.SESSIONSECRET));



app.use(express.json());
app.use(
    session({
        key: "userId",
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            expires: 60 * 60 * 24,
            secure: false
        }
    })
)

app.use((req, res, next) => {
    console.log("session", req.session);
    next();
})
app.use(bodyParser.urlencoded({extended: true}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use('/', router)

const userRouter = require('./routes/user');
// console.log("users: ", userRouter)
app.use('/api/users', userRouter);

const postRouter = require('./routes/post');
app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});