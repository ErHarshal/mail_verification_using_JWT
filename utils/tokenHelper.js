const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET_KEY);
}

const verify = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET_KEY);
}

module.exports = {
    generateToken,
    verify
}