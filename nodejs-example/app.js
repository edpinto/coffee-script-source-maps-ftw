(function() {
  var express;

  require('source-map-support').install();

  express = require('express');

  express().use(express["static"](__dirname)).listen(4000);

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/