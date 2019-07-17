let getMessage = function (args) {
    let watchers = process.env.WATCHERS || process.env.SMTPUSER;
    return {
        from: process.env.SMTPFROM || process.env.SMTPUSER, // sender address
        to: watchers.split(' '),
        subject: 'Форма обратной связи', // Subject line
        html: "<html><body>" +
        "<p>Здравствуйте.</p>" +
        "<p>"+args.firstName+" заполнил форму на сайте <a href=\"https://www.agrosignal.com\">https://www.agrosignal.com</a> </p>" +
        "<p>Компания: " + args.company + "</p>" +
        "<p>Площадь: " + args.area + "</p>" +
        "<p>Телефон: " + args.tel +"</p>" +
        "<p>email: " + args.eMail +"</p>" +
        "</body></html>" // html body
    };
};

exports.getMessage = getMessage;
