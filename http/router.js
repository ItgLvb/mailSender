const url = require("url");
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

function route(handle, request, response, app, data) {
    let parsedUrl = url.parse(request.url);
    let pathname = parsedUrl.pathname;
    let method = request.method;
    if (handle[pathname] && typeof handle[pathname][method] === 'function') {
            handle[pathname][method] (response, app, data, pathname);
    } else {
        let filePath = path.join(__dirname, pathname);
        console.log(filePath);
        if (pathname.indexOf("/public/") === 0 && fs.existsSync(filePath)) {
            handle["public"]["GET"] (response, app, null, pathname);
        } else {
            console.log("No request handler found for " + method + " " + pathname);
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not found");
            response.end();
        }
    }
}

exports.route = route;