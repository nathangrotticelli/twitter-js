var _ = require("underscore");
var id = 0;
var store = module.exports = (function(){
  var data = [];

  return {
    push: function(name, text){
      data.push({
        "name": name,
        "text": text,
        "id": id,
      });
    },

    list: function(){
      return data;
    },

    find: function(properties){
      return _.where(data, properties);
    }
  };
})();
module.exports = store;



var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

var getID = function(){
	id++;
	return id;
};

module.exportID = function(id) {
	return id;
};

for(var i=0; i<10; i++) {
  store.push(getFakeName(), getFakeTweet(), getID());
}