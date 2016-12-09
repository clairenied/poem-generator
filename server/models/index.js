var Sequelize = require('sequelize')
var poemDb = new Sequelize('postgres://localhost:5432/poemDb')

let poemSchema = {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	dateCreated: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
		// getter
		// get: function(){
		// 	var date = this.getDataValue('dateCreated');
		// 	return date.getDate() + ', ' + date.getMonth() + ' ' + date.getYear()
		// },
	},
	tags: {
		type: Sequelize.ARRAY(Sequelize.TEXT),
		set: function(value){
			var tagArray
			if(typeof value === 'string'){
				tagArray = value.split(',').map(function(string){
					return string.trim()
				})
				this.setDataValue('tags', tagArray)
			} else {
				this.setDataValue('tags', value)
			}
		}
	}
}

var poemConfig = {
	classMethods: {
    findByTag: function (tag) {
      return Poem.findAll({
        where: {
          tags: {
            $overlap: [tag]
          }
        }
      });
    }
  },
}
var Poem = poemDb.define('poem', poemSchema, poemConfig)


let userSchema = {
	firstName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING
	},
	username: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		notEmpty: true,
		validate: {
			is: /^[a-z0-9\_\-]+$/i,
		}
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		validate: {
			isEmail: true
		}
	}
}

var userConfig = {
	getterMethods: {
		fullName: function(){
			return this.firstName + " " + this.lastName
		}
	}
	//instance method example:
	//sendEmail would contact send grid and send something to user
}
var User = poemDb.define('user', userSchema, userConfig)

//These are sort of the same
//User will have extra methods that know about posts
//To have all of the methods, you need both
User.hasMany(Poem)
Poem.belongsTo(User)

// Hello, I am a many to many relationship 	  *!!!!!REMEMBER NO CAMEL CASE!!!!!!*
// Category.belongsToMany(Product, { through: 'product_category' }) //(NO CAMELS)
// Product.belongsToMany(Category, { through: 'product_category' }) //(NO CAMELS)


module.exports = {
	User: User,
	Poem: Poem,
	poemDb: poemDb
}
