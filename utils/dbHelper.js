const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_CONNECTION_URL}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB connection successfull....')
}).catch((err) => {
    console.log('Something went wrong while DB connection',err);
});

module.exports = mongoose;
