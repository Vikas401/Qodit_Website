var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const WhyChooseUsSchema = new Schema({
   title: {type:String},
 
}, { timestamps: true })

// defining a Customer model
var WhyChooseUs = mongoose.model('WhyChooseUs', WhyChooseUsSchema);
module.exports= WhyChooseUs;