import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true, 'name is required'],
    trim:true,
},
email:{
type:String,
required:true, 
unique:true
},
password:{
    type:String,
    required:true,
   
},
phone:{
type:String,
require: true,

},
address:{
    type:String,
    required:true,
},
answer:{
    type:String,
    required:true,
},
role: {
    type: Number,
    default: 0,
},
//timestamps: true,



});
 export default mongoose.model('users', userSchema);

// const users = mongoose.model('users', userSchema);
// module.exports = users;