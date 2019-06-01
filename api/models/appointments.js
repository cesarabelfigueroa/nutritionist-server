module.exports = {
	attributes: {
		Patient_ID: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Nutritionist_ID: {
			type: Sequelize.STRING,
			allowNull: false
		},
		ID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Date: {
            type:Sequelize.STRING,
            allowNull:false
        },
        Time:{
            type:Sequelize.STRING,
            allowNull:false
        },      
        PatientData:{
            type:Sequelize.STRING,
            allowNull:true,
        }
	},
	associations: function() {
		sails.models.users.belongsToMany(sails.models.users, {
			through: {
			    model: sails.models.userappointment,
			    unique: false
			},
			as: 'users',
			foreignKey: {
				name: 'appointmentId',
				unique: false
			}
		}); 
	},
	options: { 
		tableName: 'appointment'
	}
};