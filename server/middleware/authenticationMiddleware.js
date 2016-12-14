const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/user')

module.exports = router

router.use((req, res, next) => {
	passport.authenticate()

	User.findById(req.session.userId)
	.then(user => {
		if(!user){
			const err = new Error('Unauthorized')
			err.status = 403
			throw err
		}
		req.user = user
		next()
	})
	.catch(next)
})
