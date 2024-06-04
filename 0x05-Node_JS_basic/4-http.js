const http = require('http');

/**
 * HTTP server that responds with "Hello Holberton School!" to any endpoint.
 * @module 4-http
 */

/**
 * Callback function that handles incoming HTTP requests.
 * @param {http.IncomingMessage} req The incoming HTTP request.
 * @param {http.ServerResponse} res The server response that will be sent back to the client.
 */
const handleRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
};

const app = http.createServer(handleRequest);

app.listen(1245);

module.exports = app;
