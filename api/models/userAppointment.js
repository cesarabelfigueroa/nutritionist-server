module.exports = {
	attributes: {
		userId: {
			type: Sequelize.INTEGER,
			unique: 'user_Appointment',
			allowNull: false
		},
		appointmentID: {
			type: Sequelize.INTEGER,
			unique: 'user_Appointment',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_Appointment'
	}
};