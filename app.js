
var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world FAIL');
	//res.send('MetLife Tests #1');
	//comment ewr
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
