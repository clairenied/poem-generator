const Sequelize = require('sequelize');
const poemDb = require('./db');

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
		// to-do: make a getter that makes the date not gross
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

module.exports = Poem