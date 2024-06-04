const http = require('http');
const countStudents = require('./3-read_file_async');
const path = process.argv[2]; // Corrected argument index

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
            .then(() => {
                console.log('Database processed successfully.');
                // At this point, the database processing is done
                // You should send the response back to the client here
                res.end(); // End the response
            })
            .catch((err) => {
                console.error('Error processing database:', err.message);
                res.end(); // End the response in case of error
            });
    }
});

app.listen(1245);

module.exports = app;

