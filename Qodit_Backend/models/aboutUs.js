var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AboutUsSchema = new Schema({
   title: {type:String},
   body: {type: String},
   image: {type: String},
   alt: {type: String},
   title1: {type: String}
}, { timestamps: true })

// defining a Customer model
var AboutUs = mongoose.model('AboutUs', AboutUsSchema);
module.exports= AboutUs;