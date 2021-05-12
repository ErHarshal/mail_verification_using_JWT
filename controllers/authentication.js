const tokenHelper = require('../utils/tokenHelper');
const Users = require('../models/users');
const cryptoHelper = require('../utils/cryptoHelper');
const mailHelper = require('../utils/mailHelper');

const register = (data) => new Promise((resolve, reject) => {
    let userData = {
        'name': data.userName,
        'password': cryptoHelper.convertToHash(data.password)
    };

    const users = new Users(userData);

    users.save().then((res) => {
        let token = tokenHelper.generateToken({ 'user': data.userName });
        let mailOptions = {
            'to': data.userName,
            'subject': 'User Verification Mail',
            'text': `http://127.0.0.1:3000/authentication/verify?token=${token}`
        };

        mailHelper.sendMail(mailOptions).then((result) => {
            resolve(token);
        }).catch((error) => {
            reject(err);
        });
    }).catch((err) => {
        reject(err);
    });
});

const verify = (token, pass) => new Promise((resolve, reject) => {
    let info = tokenHelper.verify(token);
    if (info.statusCode === 200) {
        let userName = info.token.user;

        Users.findOne({ 'name': userName }, 'password _id').then((res) => {
            if (cryptoHelper.validateHash(pass, res.password)) {
                Users.update({ '_id': res.id, 'name': userName }, { $set: { 'isEmailVerified': true } }).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
            } else {
                reject('Invalid password');
            }
        }).catch((err) => {
            reject(err);
        });
    } else {
        reject('Invalid Token');
    }
});

const login = (data) => new Promise((resolve, reject) => {
    Users.findOne({ 'name': data.userName, 'isEmailVerified': true }, 'password').then((res) => {
        if (res && cryptoHelper.validateHash(data.password, res.password)) {
            let token = tokenHelper.generateToken({ 'user': data.userName });
            resolve(token);
        }else{
            reject('Invalid user');
        }
    }).catch((err) => {
        reject(err);
    })
});

module.exports = {
    register,
    verify,
    login
}