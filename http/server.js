const http = require("http");
const router = require("./router");
const requestHandlers = require("./requestHandlers");
const querystring = require('querystring');
const url = require("url");

function start(app) {

    let handle = {
         '/sendMail':{
            'GET': requestHandlers.send
        }
    };

    function onRequest(request, response) {
        let DATA = "";

        request.setEncoding("utf8");

        request.addListener("data", function(DataChunk) {
            DATA += DataChunk;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if(DATA.length > 1e6) {
                DATA = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });

        request.addListener("end", function() {
            let parsedUrl = url.parse(request.url);
            let parsedQs = querystring.parse(parsedUrl.query);
            let POSTData = querystring.parse(DATA);
            console.log(parsedQs);
            router.route(handle, request, response, app, parsedQs, POSTData);
        });

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;