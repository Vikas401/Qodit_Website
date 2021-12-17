var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CareerFormSchema = new Schema({
   name: {type:String,required:true},
   message:  {type:String,required:true},
   email:{type:String,required:true},
   phone_number:{type:String,required:true},
   upload:{type:String,required:true}
}, { timestamps: true })


var CareerForm = mongoose.model('CareerForm', CareerFormSchema);
module.exports= CareerForm;