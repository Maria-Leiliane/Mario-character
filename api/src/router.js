/* eslint-disable no-undef */
const express = require('express');
const charactersController = require('./controllers/charactersController');

const router = express.Router();

router.get('/characters', charactersController.getAll);

module.exports = router;