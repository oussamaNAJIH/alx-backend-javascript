const http = require('http');
/**
 * Callback function that handles incoming HTTP requests.
 * @param {http.IncomingMessage} req The incoming HTTP request.
 * @param {http.ServerResponse} res The server response that will be sent back to the client.
 */

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
