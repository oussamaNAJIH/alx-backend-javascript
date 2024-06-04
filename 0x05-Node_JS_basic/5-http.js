const http = require('http');
const countStudents = require('./3-read_file_async');
const path = process.argv[2].toString(); // Corrected argument index

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        // Call countStudents and handle the Promise
        countStudents(path)
            .then((output) => {
                const outString = output.slice(0, -1);
                res.end(outString);
            })
            .catch(() => {
                response.statusCode = 404;
                response.end('Cannot load the database');
            });
    }
});

app.listen(1245);

module.exports = app;

