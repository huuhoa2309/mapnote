const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const pinRouter = require('./routes/pins');
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to mongodb');
}).catch((err) => console.log(err));


app.listen(8800, () => {
    console.log('server is running on port 8800 shshs');
})