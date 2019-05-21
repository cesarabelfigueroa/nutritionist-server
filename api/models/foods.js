/**
 * Foods.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		image: {
			type: Sequelize.BLOB,
			allowNull: true
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	options: {
		tableName: 'foods'
	},
};

