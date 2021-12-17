var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
   title: {type:String},
   image: {type: String},
   alt: {type: String},
   body: {type: String},
 
}, { timestamps: true })

// defining a Customer model
var Testimonial = mongoose.model('Testimonial', TestimonialSchema);
module.exports= Testimonial;