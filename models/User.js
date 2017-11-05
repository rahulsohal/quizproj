const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	first_name:{
		type:String,
		required:true,
	},
	last_name:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true,
	},
	password:{
		type:String,
		required:true,
	},
});

const User  = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByCredential = function(email,password,callback){
	const query= {email:email , password:password}
	User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
	newUser.save(callback);
}