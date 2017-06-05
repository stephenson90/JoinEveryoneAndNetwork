
module.exports = function(sequelize, DataTypes) {

var userlogin = sequelize.define("userlogin", {
	ID:{type:DataTypes.INTEGER, autoIncrement:true, primarykey:true},
	username:DataTypes.STRING,
	password:DataTypes.STRING,
	name:DataTypes.STRING

	}
});

return userlogin;
};