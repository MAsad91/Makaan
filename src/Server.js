var express = require('express');
var app = express();
var sql = require("mssql");

var config = {
    user: 'root',
    password: '',
    server: '127.0.0.1', 
    database: 'makaan' 
};

app.post('/', function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    var user = req.body;
    var connection = new sql.ConnectionPool(config, function(err) {
    var request = new sql.Request(connection);
    request.query('INSERT INTO Persons SET ?', user);
    });
    res.end('Success');
  });

app.listen(5000, () => {console.log('Server is running..')});