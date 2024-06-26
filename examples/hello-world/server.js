'use strict';
//module.exports = require('./lib/express');

//var express = require('../');

//var app = module.exports = require('express');
const express = require('/var/app/current/node_modules/express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3001);
  console.log('Express started on port 3001');
}


