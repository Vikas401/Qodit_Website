var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const HeroBoxSchema = new Schema({
   title: {type:String},
   image:{type:String},
   alt: {type: String},
   body: {type: String},
   buttonText: {type: String}
}, { timestamps: true })

// defining a Customer model
var HeroBox = mongoose.model('HeroBox', HeroBoxSchema);
module.exports= HeroBox;