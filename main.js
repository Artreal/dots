var files = [
  'data/obama'
, 'data/cfr'
, 'data/wikipedia'
, 'data/illuminati'
, 'data/unsorted'
];
var dots = new (function() {
  var _this = this;
  files.forEach(function(file){
    var data = require('./' + file);
    for(var field in data){
      _this[field] = _this[field] ? _this[field].concat(data[field]) : data[field];
    }
  });
  this.overview = function() {
    var line = '';
    for(var field in _this) {
      if(!Array.isArray(_this[field])) continue;
      console.log('\n' + field.toUpperCase() + ':');
      console.log(_this[field].map(function(obj){ return obj.name; }));
    }
  };
})();
dots.overview();