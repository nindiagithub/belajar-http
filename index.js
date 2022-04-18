const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    fs.readFile("./index.html", null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write("not found");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
        }

        response.end();
    });

})
.listen(9000);