module.exports = {
	attributes: {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		date: {
			type: Sequelize.STRING,
			allowNull: false
		},
		water: {
			type: Sequelize.STRING,
			allowNull: false
		},
		steps: {
			type: Sequelize.STRING,
			allowNull: false
		},
		weight: {
			type: Sequelize.STRING,
			allowNull: false
		},
		hours_of_sleep: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	options: {
		tableName: 'entries'
	}
};