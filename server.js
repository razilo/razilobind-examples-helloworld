// Config
var PORT = 8080;
var express = require('express');
var app = express();
var path = require("path");

/* Application */

// Static files
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/node_modules/proxy-polyfill/proxy.js', express.static(__dirname + '/node_modules/proxy-polyfill/proxy.js'));

// Routing - Index
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Start
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
