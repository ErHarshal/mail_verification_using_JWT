var crypto = require('crypto');
const config = require('../config/config');

const convertToHash = (password) => {
   return crypto.pbkdf2Sync(password, config.cryptoObject.salt, config.cryptoObject.iterations, config.cryptoObject.keyLenght, config.cryptoObject.digestAlgo).toString('hex');
}

const validateHash = (password, hash) => {
    let newHash = crypto.pbkdf2Sync(password, config.cryptoObject.salt, config.cryptoObject.iterations, config.cryptoObject.keyLenght, config.cryptoObject.digestAlgo).toString('hex');
    return newHash === hash;
}

module.exports = {
    convertToHash,
    validateHash
}