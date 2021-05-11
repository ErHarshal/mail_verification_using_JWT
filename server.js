require('dotenv').config({ 'path': '.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_CONNECTION_URL}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB connection successfull....')
}).catch((err) => {
    console.log('Something went wrong while DB connection',err);
});


app.use(bodyParser.json());

const authentication = require('./routes/authentication');

app.use('/authentication', authentication)

app.listen(3000, (err, res) => {
    if(err){
        console.log("Something went wrong while starting server", err);
    }
    else{
        console.log("Server started on port 3000");
    }
});