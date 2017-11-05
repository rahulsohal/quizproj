//import modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var path = require('path');

var app = express();

const route = require('./routes/routes');

//Connection to mongoDB 
mongoose.connect('mongodb://rsohal:quiz2017@ds149335.mlab.com:49335/quizdata');
//mongodb://<dbuser>:<dbpassword>@ds149335.mlab.com:49335/quizdata

//on connection
mongoose.connection.on('connected', function(){
	console.log('Connected to database');
});

//on error connecting
mongoose.connection.on('error', function(err){
	if(err){
		console.log('Error connecting to database');	
	}
});


//port no
const port = 3000;

//adding middleware
app.use(cors());

//bodyparser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',route);

// testing server
app.get('/', function(req,res){
	res.send('foo');
});

app.listen(port, function(){
	console.log('Server started at port '+ port);
});