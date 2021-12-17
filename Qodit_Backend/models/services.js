var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ServicesSchema = new Schema({
   title: {type:String},
   body: {type: String},
   alt: {type: String},
}, { timestamps: true })

// defining a Customer model
var Services = mongoose.model('Services', ServicesSchema);
module.exports= Services;