module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING
		},
		color: {
			type: Sequelize.STRING
		}
	},
	options: { 
		tableName: 'roles'
	}
};