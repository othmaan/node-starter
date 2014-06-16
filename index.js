var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('I am a NodeJS test server running in a Linux container.\n -aothman-\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
