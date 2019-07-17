'use strict';

function send(response, app, data) {
    console.log(data);
    app.sendEmails(data);
    getResponce(response,"")
}

function getResponce(response, body) {
    response.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8",
        'Cache-control': 'no-cache'
    });
    response.write(body);
    response.end();
}

exports.send = send;