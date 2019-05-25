module.exports={
    attributes:{
        description:{
            type: Sequelize.STRING,
            allowNull : false
        },
    },
    options:{
        tableName :'categories'
    },
    associations: function(){
        sails.models.users.belongsToMany(sails.models.users, {
			through: {
			    model: sails.models.usercategorie,
			    unique: false
			},
			as: 'users',
			foreignKey: {
				name: 'categorieId',
				unique: false
			}
		}); 
    },
    options:{
        tableName:'categories'
    }

}