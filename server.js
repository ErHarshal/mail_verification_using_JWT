require('dotenv').config({ 'path': '.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const authSecretKey = (req, res, next) => {
    const token = req.header("secretKey");
    if(token === process.env.SECRET_KEY) {
        next();
    } else {
        res.send('Please add secret key in request header');
    }
}
app.use(authSecretKey);

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