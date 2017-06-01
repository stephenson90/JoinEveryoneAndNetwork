var orm = require('../config/orm.js');

var userlogin = {
	all: function(cb){
		orm.all('userlogin', function(res){
			cb(res);
		})
	}
}
module.exports = userlogin;