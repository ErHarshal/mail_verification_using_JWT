const express = require('express');
const router = express.Router();
const registerCtr = require('../controllers/authentication');

router.post('/register',(req, res) => {
    registerCtr.register(req.body).then((response) => {
        res.send({ 'token':response });
    }).catch((err) => {
        console.log('Something went wrong while registartion', err);
        res.statusCode(500);
    });
})

router.get('/verify',(req, res) => {
    let token = req.headers.authtoken;
    let result = tokenHelper.verify(token)
    res.send(result);
})

module.exports = router;