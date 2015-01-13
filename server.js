var express =  require('express');

var path = require('path');
var bodyParser= require('body-parser');
var hbs = require('hbs');
//User Model
var userController = require('./controllers/users');
var app = express();


app.set('view engine', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',hbs.__express);
app.use(bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( 
    {
        extended:false
    }));

app.use(express.static('public'));

app.get('/',function(req,res){

res.render('index',{
    title:"Home",
    users:userController.getUsers()
});

});

app.get('/users/:id',function(req,res){
var user = 
    users.getUser(req.params.id);
res.render('profile',{
    title:"User Profile",
    user:user
});

});

app.get('/login',function(req,res){

res.render('login',{title:"Login"});

})

app.post('/login', userController.postlogin);

app.get('/signup',function(req,res){

res.render('signup',{title:"Signup"});

})


app.get('/about',function(req,res){

res.render('aboutus',{title: "About Us"});

})





app.listen(3000);