const express = require('express');
const router = require('./router'); // Importe o arquivo router.js

const app = express();

app.use('/', router); // Use o router no app

module.exports = app;