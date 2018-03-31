const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'GET' && url === '/') {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/index.html'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    stream.pipe(res);
  } else if (method === 'GET' && url === '/bundle.js') {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/bundle.js'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    stream.pipe(res);
  }
});

module.exports = app;
