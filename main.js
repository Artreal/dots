var files = [
  'data/obama'
, 'data/cfr'
, 'data/wikipedia'
, 'data/illuminati'
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
      line += field + ':  ';
      _this[field].forEach(function(obj) {
        line += '"' + obj.name + '"    ';
        if(line.length > 100) {
          console.log(line);
          line = '';
        }
      });
      line += '\n';
    }
    console.log(line);
  };
})();
dots.overview();