const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config({ path: path.join(__dirname, '/.env') });

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.options('*', cors());

app.use('/', routes);
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/', express.static(path.join(__dirname, '../client/dist/assets')));

module.exports = app;
