const nodemailer = require('nodemailer');

let options = {
    host : process.env.SMTPHOST,
    auth : {
        user : process.env.SMTPUSER,
        pass : process.env.SMTPPASS
    },
    port: 587,
    secure: false,
    logger: process.env.SMTPLOG || false,
    tls: {
        rejectUnauthorized: false
    }
};

let transporter = nodemailer.createTransport(options);

let sendMail = (message) => {
    transporter.sendMail(message, (info,error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    })
};

exports.sendMail = sendMail;