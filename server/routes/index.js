const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const models = require('../models')
const Poem = models.Poem;
const User = models.User;

const aboutRouter = require('./about.js')
const poemsRouter = require('./poems.js')
const usersRouter = require('./users.js')

router.use('/about', aboutRouter);
router.use('/poem', poemsRouter);
router.use('/user', usersRouter);

router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
