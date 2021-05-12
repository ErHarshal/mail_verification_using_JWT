const express = require('express');
const router = express.Router();
const registerCtr = require('../controllers/authentication');
const tokenHelper = require('../utils/tokenHelper');

router.post('/register', (req, res) => {
    registerCtr.register(req.body).then((response) => {
        res.send({ 'token': response });
    }).catch((err) => {
        console.log('Something went wrong while registartion', err);
        res.sendStatus(500);
    });
})

router.put('/verify', (req, res) => {
    registerCtr.verify(req.query.token, req.body.password).then((response) => {
        res.send({ 'result': 'user verified successfully' });
    }).catch((err) => {
        console.log('Something went wrong while verification', err);
        res.sendStatus(500);
    });
});

router.post('/login', (req, res) => {
    registerCtr.login(req.body).then((response) => {
        res.send({
            'result': 'user login successfully',
            'token': response
        });
    }).catch((err) => {
        console.log('Something went wrong while login', err);
        res.sendStatus(404);
    });
});

module.exports = router;