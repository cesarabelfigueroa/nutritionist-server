


module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	options: {
		tableName: 'users'
	},
	associations: function() {
		sails.models.users.hasMany(sails.models.roles, {
			as: 'roles',
			foreignKey: {
				name: 'userId',
				allowNull: false
			}
		});
	}
};