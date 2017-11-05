const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
	question:{
		type:String,
		required:true,
	},
	ques_type:{
		type:String,
	},
	option_a:{
		type:String,
	},
	option_b:{
		type:String,
	},
	option_c:{
		type:String,
	},
	option_d:{
		type:String,
	},
	answer:{
		type:String,
		required:true,
	}
});

const Question  = module.exports = mongoose.model('Question', QuestionSchema);