const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

//routes
app.get('/', (req,res) => {
    res.send("this is home")
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('connected to DB')
);

//start listening to server on port 3001
app.listen(3000);
