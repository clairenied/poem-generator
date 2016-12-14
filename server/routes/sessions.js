const router = require('express').Router()
const User = require('../models/user')
const passport = require('passport')

module.exports = router

router.use(require('../middleware/standardMiddleware'));

router.get('/auth/google', passport.authenticate('google', { scope : 'email' }));

router.get('/auth/google/callback', (req, res, next) => {
  
  passport.authenticate('google', {
    successRedirect: '/', 
    failureRedirect: '/'
  })
	
})

// login
router.post('/', (req, res, next) => {
	// req.login()
	return User.findOne({ where: {
		email: req.body.email
	}})
	.then(user => {
		if(!user) {
			var err = new Error('Unauthorized')
			err.status = 401
			throw err
		}
		return Promise.all([
			user.checkPassword(req.body.password),
			user
		])
	})
	.then(results => {
		const [passwordIsValid, user] = results
		if(!passwordIsValid){
			var err = new Error('Unauthorized')
			err.status = 401
			throw err
		}
		req.session.userId = user.id 
		res.json(user)
	})
	.catch(next)
})


// log out
router.post('/logout', (req, res, next) => {
	// req.login()
	req.session.destroy()
	res.redirect('/')
})