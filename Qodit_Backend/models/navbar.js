var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NavbarSchema = new Schema({
   title: {type:String},
   body: {type:String}
}, { timestamps: true })

// defining a Customer model
var Navbar = mongoose.model('Navbar', NavbarSchema);
module.exports= Navbar;