const Sequelize = require('sequelize');
const poemDb = require('./db');

const bcrypt = require('bcrypt')

let userSchema = {
	firstName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	googleId: {
		type: Sequelize.STRING
	}
}

var userConfig = {
	instanceMethods: {
		checkPassword: function(password){
			return new Promise((resolve, reject) => {
				bcrypt.compare(password, this.password, (err, result) => {
						if(err){ return reject(err) }
						resolve(result)
				})
			})
		},
		hashPassword: function(){
			return new Promise((resolve, reject) => {
				bcrypt.genSalt(4, (err, salt) => {
					if(err) { return reject(err); }
		        bcrypt.hash(this.password, salt, (err, hash) => {
						if(err) { return reject(err) }
						this.password = hash
						resolve()
					})
				})
			})
		}
	},
	hooks: {
		beforeCreate: function(user){
			return user.hashPassword()
		},
		beforeUpdate: function(user){
			if(user.changed('password')) { return }
			return user.hashPassword()
		}
	},
	getterMethods: {
		fullName: function(){
			return this.firstName + " " + this.lastName
		}
	}
}
var User = poemDb.define('user', userSchema, userConfig)

module.exports = User