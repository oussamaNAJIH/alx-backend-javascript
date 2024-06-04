const http = require('http');

const app = http.createServer((req, resp) => {
    resp.write('Hello Holberton School!');
    resp.end();
});
app.listen(1245);
module.exports = app;
