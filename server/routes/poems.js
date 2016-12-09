const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const Promise = require('bluebird')

const models = require('../models')
const Poem = models.Poem;
const User = models.User;


router.get('/', function(req, res, next){
  Poem.findAll({where: req.query})
  .then(poems => res.json(poems))
  .catch(next)
})

router.get('/:id', function(req, res, next){
	Poem.findById(req.params.id)
	.then(poem => res.json(poem))
	.catch(next)
})

// router.get('/create', function(req, res, next){
// 	res.render('add-poem');
// });

// router.post('/create', function(req, res, next){
//   let userPromise = User.findOrCreate({
//     where: {
//       username: req.body.username
//     }
//   })

//   let poemPromise = Poem.create({
//     title: req.body.title,
//     text: req.body.text,
//     tags: req.body.tags
//   })

//   Promise.all([userPromise, poemPromise])
//   .spread(function(user, poem){
//     return poem.setUser(user[0])
//   })
//   .then(function(poem){
//     res.redirect('/poem/' + poem.id)
//   })
//   .catch(next)
// });

// router.get('/delete/:id', function(req, res, next){
//   Poem.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(function(){
//     res.redirect('/')
//   })
//   .catch(next)
// });

// router.get('/archive', function(req,res,next){
//   Poem.findAll({include: [User]})
//   .then(function (poems) {
//     res.render('archive', {
//       poems: poems
//     });
//   })
//   .catch(next);
// })

// router.get('/:id', function(req, res, next){
//   Poem.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(function(poem){
//     if (poem === null){
//       var error = new Error('NO POEM.')
//       error.status = 404
//       return next(error)
//     }
//     req.poem = poem
//     return poem.getUser()
//   })
//   .then(function(user){
//     res.render('poem', {
//       poem: req.poem,
//       user: user
//     })
//   })
//   .catch(next)
// })

// router.get('/search/:tag', function(req, res, next){
//   Poem.findByTag(req.params.tag)
//   .then(function(poems){
//     res.render('index', { 
//       poems: poems
//     })
//   })
//   .catch(next)
// })

// router.get('/edit/:id', function(req, res, next){
//   Poem.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(function(poem){
//     res.render('add-poem', {
//       poem: poem
//     })
//   })
//   .catch(next)
// })

// router.post('/edit/:id', function(req, res, next){

//   let foundUser
//   const poemId = req.params.id
//   Poem.findOne({
//     where: {
//       id: poemId
//     },
//     include: [User]
//   })
//   .then(function(poem){
//     foundUser = poem.user

//     return poem.update({
//       title: req.body.title,
//       text: req.body.text,
//       tags: req.body.tags
//     })
//   })
//   .then(function(){
//     return foundUser.update({
//       username: req.body.username
//     })
//   })
//   .then(function(){
//     res.redirect("/poem/" + poemId)
//   })
//   .catch(next)
// })

module.exports = router;
