const express = require('express');
const router = express.Router();
const chalk = require('chalk')

const Poem = require('../models/poem')
const User = require('../models/user')

router.use(require('../middleware/standardMiddleware'));

// signup
router.post('/', (req, res, next) => {
	return User.create(req.body)
	.then(user => {
		req.session.userId = user.id
		res.json(user)
	})
	.catch(next)
})

router.get('/', (req, res, next) => {
	return User.findAll()
	.then(users => {
		res.json(users)
	})
	.catch(next)
})

router.use(require('../middleware/authenticationMiddleware'));

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

// router.post('/edit-user/:id', function(req, res, next){
// 	User.findOne({
// 		where: {
// 			id: req.params.id
// 		}
// 	})
// 	.then(function(user){
// 		return user.update({
// 			username: req.body.username,
// 			firstName: req.body.firstName,
// 			lastName: req.body.lastName,
// 			email: req.body.email
// 		})
// 	})
//   .then(function(user){
//     res.redirect('/about')
//   })
//   .catch(next)
// })

// router.get('/edit-user/:id', function(req, res, next){
// 	User.findOne({
// 		where: {
// 			id: req.params.id
// 		}
// 	})
//   .then(function(user){
//     res.render('edit-user', {
//       user: user
//     })
//   })
//   .catch(next)
// })

module.exports = router;