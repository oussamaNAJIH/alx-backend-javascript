const http = require('http');

const app = http.createServer((req, resp) => {
    if (req) {
        resp.writeHead(200, { 'Content-Type': 'text/plain' });
        resp.end('Hello Holberton School!');
    }
    
});
app.listen(1245);
module.exports = app;
