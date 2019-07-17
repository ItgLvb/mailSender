const mailer = require("./mailer/mailer");
const messageBuilder = require("./templates/mailGenerator");

function APP() {
    if (!(this instanceof APP)) return new APP();
}

APP.prototype.start = function() {
    let self = this;
    self.emit('needReload');
};

APP.prototype.sendEmails = function (args) {
    if (process.env.SMTPHOST) {
        let message = messageBuilder.getMessage(args);
        mailer.sendMail(message);
    } else console.log("Cannot send mail. Check settings.")
};

module.exports = APP;
