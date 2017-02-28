var express = require('express');
var app = express();


app.use(express.static('public'))

app.get('/', function (req,res){
  res.sendFile('/Users/rita/Desktop/interactive/interactive programme/node/public/lab2.html');
})

var PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, function(){
  console.log("App running in a port: " + PORT_NUMBER);
})