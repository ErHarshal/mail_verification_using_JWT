const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET_KEY);
}

const verify = (token) => {
    try{
        return {
            'statusCode': 200,
            'token': jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        };
    }
    catch(err){
        return {
            'statusCode': 500,
            'error': err
        };
    }
}

module.exports = {
    generateToken,
    verify
}