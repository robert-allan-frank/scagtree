/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

  var app = new EmberApp(defaults, {
  });

  app.import('bower_components/crossfilter/crossfilter.js');
  app.import('bower_components/d3/d3.js');

  return app.toTree();
};
