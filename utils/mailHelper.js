const nodemailer = require("nodemailer");
const config = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.gmailAuth.user,
    pass: config.gmailAuth.pass
  }
});

const sendMail = (options) => new Promise((resolve, reject) => {
  let mailOptions = {
    from: config.gmailAuth.user,
    to: options.to,
    subject: options.subject, 
    text: options.text
    // html: options.html
  };

  transporter.sendMail(mailOptions).then((res) => {

    resolve(res.messageId);
  }).catch((err) => {
    console.log("Something went wrong while sending mail ", err);
    reject(err);
  })
});

module.exports = {
  sendMail
}