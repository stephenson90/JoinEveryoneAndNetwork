var orm = require('../config/orm.js');

var profiledata = {
	all: function(cb){
		orm.all('profiledata', function(res){
			cb(res);
		})
	}
}
module.exports = profiledata;