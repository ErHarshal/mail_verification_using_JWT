let config = {};

config.cryptoObject = {
        'salt': '10',
        'iterations': 100,
        'digestAlgo': 'SHA512',
        'keyLenght': 64
};
config.gmailAuth = {
        'user': process.env.GMAIL_USER,
        'pass': process.env.GMAIL_PASS
}

module.exports = config
