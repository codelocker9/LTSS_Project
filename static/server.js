'use strict';

let http = require("http");

function Hello_World(request, response) {
    response.write("Hello, World!");
    response.end();
}

let server = http.createServer(Hello_World);
server.listen(8000);
console.log("Done, The server is ready");