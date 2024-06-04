const http = require('http');
const os = require('os');

const hostname = os.hostname();
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1', () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
