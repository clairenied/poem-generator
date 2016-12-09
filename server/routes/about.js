const express = require('express');
const router = express.Router();

const models = require('../models')
const Poem = models.Poem;
const User = models.User;

// router.get('/', function(req, res, next){
// 	User.findAll({include: [Poem]})
// 	.then(function(users){
// 		res.render('about',{
// 			users: users
// 		})
// 	})
// 	.catch(next)
// })

module.exports = router