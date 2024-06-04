const http = require('http');
const countStudents = require('./3-read_file_async');
const path = process.argv[1];

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
        res.write('This is the list of our students');
        countStudents(path);
    }
});

app.listen(1245);

module.exports = app;
