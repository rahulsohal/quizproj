const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
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
	}
});

const Admin  = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminByEmail = function(email,password,callback){
	const query= {email:email , password:password}
	Admin.findOne(query,callback);
}