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
		sails.models.users.belongsToMany(sails.models.roles, {
			through: {
				model: sails.models.userrole,
				unique: false
			},
			as: 'roles',
			foreignKey: {
				name: 'userId',
				unique: false
			}
		});

		sails.models.users.hasMany(sails.models.entries, {
			as: 'entries',
			foreignKey: {
				name: 'userId',
				unique: false
			}
		});


		sails.models.users.belongsToMany(sails.models.categories, {
			through: {
				model: sails.models.usercategories,
				unique: false
			},
			as: 'categories',
			foreignKey: {
				name: 'userId',
				unique: false
			}
		});
	}
};