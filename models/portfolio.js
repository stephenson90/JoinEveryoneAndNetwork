
module.exports = function(sequelize, DataTypes) {

var portfolio = sequelize.define("portfolio", {
	title:DataTypes.STRING,
	body:DataTypes.TEXT

	}
	portfolio.belongsTo(userlogin, {foreignKey: 'ID'});
});

return portfolio;
};