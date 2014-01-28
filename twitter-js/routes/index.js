var store = require('../store');
/*
 * GET home page.
 */
// var io;

// exports.setIO = function(ioObj) {
//	io = ioObj;
// };

exports.index = function(req, res){
	var tweets = store.list();
	res.render('index', { title: 'Twitter.js', tweets: tweets, show_form: true });

};

exports.submit = function(req, res){
  var name = req.body.name;
  var text = req.body.text;
  io.sockets.emit("new_tweet", {"name": name, "text": text});
  store.push(name, text);
  res.redirect('/');

};