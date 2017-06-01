var express = require('express');
var router = express.Router();
// var portfolio = require('../models.portfolio.js');
var profiledata = require('../models/profiledata.js');
// var userlogin = require('../models.userlogin.js');

router.get('/', function(req,res){
	profiledata.all(function(profileinfo){
		console.log(profileinfo);
		res.render('index')
	})
})

module.exports = router;