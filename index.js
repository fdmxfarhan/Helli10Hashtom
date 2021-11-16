var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Database Connection
mongoose.connect('mongodb://localhost:27017/sampad');

var User = mongoose.model('Users', new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    phone: String,
}));

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.set('views', './views');




app.get('/', function(req, res){
    res.render('home');
})

app.post('/register', function(req, res){
    var {firstName, lastName, email, password} = req.body;
    
    user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });
    user.save().then(function(){
        res.redirect('/');
    });

});


app.listen(3000);