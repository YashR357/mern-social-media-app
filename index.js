const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


const userRouter = require('./routes/user');
// console.log("users: ", userRouter)
app.use('/api/users', userRouter);

const postRouter = require('./routes/post');
app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});