var orm = require('../config/orm.js');

var portfolio = {
	all: function(cb){
		orm.all('portfolio', function(res){
			cb(res);
		})
	}
}
module.exports = portfolio;