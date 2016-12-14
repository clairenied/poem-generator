const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const Promise = require('bluebird')

const Poem = require('../models/poem')
const User = require('../models/user')

router.use(require('../middleware/standardMiddleware'));
router.use(require('../middleware/authenticationMiddleware'));

router.get('/', function(req, res, next){
  console.log(chalk.magenta('POEM FIND ALL!!! I AM HAPPENING!!!!!!!'))
  Poem.findAll({
  	where: req.query,
  	limit: 10,
  	order: '"updatedAt" DESC'
  })
  .then(poems => {
    console.log(chalk.green('POEM DOT THEN!!! I AM HAPPENING!!!!!!!'), poems)

    return res.json(poems)
  })
  .catch(next)
})

router.post('/create', (req, res, next) => {
	console.log(chalk.magenta('REQ DOT BODY.username', req.body.username))
  let userPromise = User.findOrCreate({
    where: {
    	username: req.body.username
    }
  })

  let poemPromise = Poem.create(req.body)

  Promise.all([userPromise, poemPromise])
  .spread((user, poem) => {
    return poem.setUser(user[0])
  })
  .then(poem => res.json(poem))
  .catch(next)
});

router.param('id', (req, res, next, id) => {
	Poem.findById(id, {include: [User]})
	.then(poem => {
		if(!poem){
			const err = Error('No poem found')
			err.status = 404
			throw err
		}
		req.poem = poem
		next()
		return null
	})
})

router.get('/:id', function(req, res, next){
	res.json(req.poem)
})


router.get('/:id/delete', function(req, res, next){
  req.poem.destroy()
  .then(() => res.status(204).end())
  .catch(next)
});

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
