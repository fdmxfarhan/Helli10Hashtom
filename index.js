var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('home');
})


app.listen(3000);