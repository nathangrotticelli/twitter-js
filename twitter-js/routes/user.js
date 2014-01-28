
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

var store = require("../store");

exports.show = function(req, res){
  var name = req.params.name;
  var list = store.find({name: name});

  res.render('user', { title: 'Twitter.js - Posts by '+name, tweets: list });
};

exports.showByID = function (req,res){
	var name = req.params.name;
	var id = parseInt(req.params.id);
	var list = store.find({name: name, id: id});
	res.render('user', { title: 'Twitter.js - Posts by '+name, tweets: list, show_form: false});
};