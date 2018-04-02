const http = require('http');
const fs = require('fs');
const path = require('path');
const db = require('../db/helpers');
require('dotenv').config({ path: path.join(__dirname, '/.env') });

const app = http.createServer((req, res) => {
  const { method, url } = req;
  const urlSplit = url.split('/').slice(1);
  if (method === 'GET' && url === '/') {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/index.html'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    stream.pipe(res);
  } else if (method === 'GET' && url === '/bundle.js') {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/bundle.js'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    stream.pipe(res);
  } else if (method === 'GET' && url === '/assets/twinPeaks.jpeg') {
    const img = fs.readFileSync(path.join(__dirname, '../client/dist/assets/twinPeaks.jpeg'));
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (method === 'GET' && url === '/styles.css') {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/styles.css'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    stream.pipe(res);
  } else if (method === 'GET' && urlSplit[0] === 'events') {
    db.fetchEvents(urlSplit[1], urlSplit[2], (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(JSON.stringify(result));
      }
    });
  }
});

module.exports = app;
