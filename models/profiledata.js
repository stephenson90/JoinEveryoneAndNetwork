
module.exports = function(sequelize, DataTypes) {

var profiledata = sequelize.define("profiledata", {	
	data:DataTypes.TEXT
	}
	profiledata.belongsTo(userlogin, {foreignKey: 'ID'});
	profiledata.belongsTo(userlogin, {foreignKey: 'name'});
	profiledata.belongsTo(pictures, {foreignKey: 'image'});
});


return profiledata;
};