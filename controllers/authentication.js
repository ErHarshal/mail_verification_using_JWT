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
            'text': `http://127.0.0.1:3000/verify?token=${token}`
        };

        mailHelper.sendMail(mailOptions).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(err);
        });
    }).catch((err) => {
        reject(err);
    });
})

module.exports = {
    register
}