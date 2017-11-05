const express  = require('express');
const router = express.Router();

const Admin = require("../models/Admin");
const User = require("../models/User");
const Question = require("../models/Question");
//admin part

//adminlogin
router.get('/adminlogin', function(req, res, next){

});

router.post('/adminlogin', function(req, res, next){
	const email = req.body.email;
	const password = req.body.password;

	Admin.getAdminByEmail(email,password,function(err,admin){
		if(err) throw err;
		if(!admin)
		{
			return res.json({success: false, msg: 'Wrong Credentials'});
		}
		else
			return res.json({success:true, msg: 'Successfully Loggd in'});
	});

});

//get adminhome
router.get('/adminhome', function(req, res, next){

});

//get add question form
router.get('/addquestion', function(req, res, next){
});

//submit the data to add question
router.post('/addquestion', function(req, res, next){
	let newQuestion = new Question({
		question: req.body.question,
		ques_type: req.body.ques_type,
		option_a: req.body.option_a,
		option_b: req.body.option_b,
		option_c: req.body.option_c,
		option_d: req.body.option_d,
		answer: req.body.answer
	});

	newQuestion.save(function(err, ques){
		if(err){
			res.json({success:false, msg: 'Failed to add question'});
		}
		else{
			res.json({success:true, msg: 'Question added succesfully'});
		}
	});
});

//delete any question
router.delete('/deletequestion/:id',function(req,res,next){
	Question.remove({_id: req.param.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});

//see all the added questions
router.get('/questions', function(req, res, next){
	Question.find(function(err, questions){
		res.json(questions);
	})
});

//get timer set page
router.get('/settimer', function(req, res, next){

});

//set the quiz timer 
router.post('/settimer', function(req, res, next){

});


//user part

//get register form
router.get('/register', function(req,res,next){

});

router.post('/register', function(req,res,next){
	let newUser = new User({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: req.body.password,
	});

	User.addUser(newUser, function(err, user){
		if(err){
			res.json({success:false, msg: 'Failed to register user'});
		}
		else{
			res.json({success:true, msg: 'User successfully registered'});	
		}
	});
});

router.post('/login', function(req,res, user){
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByCredential(email,password,function(err,user){
		if(err) throw err;
		if(!user)
		{
			return res.json({success: false, msg: 'Wrong Credentials'});
		}
		else
			return res.json({success:true, msg: 'Successfully Loggd in'});
	});

})

module.exports = router;