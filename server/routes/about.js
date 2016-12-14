const express = require('express');
const router = express.Router();

const Poem = require('../models/poem')
const User = require('../models/user')

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