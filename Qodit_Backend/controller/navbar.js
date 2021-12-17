const Navbar = require("../models/navbar");
var { ObjectID } = require('mongodb');

exports.create = (req, res) => {
    var navbar = new Navbar({
       title: req.body.title,
       body:req.body.body
      });     
      navbar.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
  Navbar.find()
  .then((navbar) => {
    
     res.send(navbar);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
Navbar.findById(id)
  .then((navbar) => {
       if (!navbar) {
           return res.status(404).send();
       }
       res.send(navbar);
  }).catch((e) => {
     res.status(400).send();
  });
};


exports.update = (req, res) => {
  var id = req.params.id;
  // const navbar = new Navbar
  // var body = _.pick(req.body);
 if (!ObjectID.isValid(id)) {
    return res.status(404).send();
 }
 Navbar.findByIdAndUpdate(id, { title: req.body.title}, {new:true})
.then((navbar) => {
    console.log(navbar)
    if (!navbar) {
       return res.status(404).send();
    }
    res.send(navbar);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Navbar.findByIdAndRemove(id).then((navbar) => {
       if (!navbar) {
          return res.status(404).send();
       }
       res.send(navbar);
  }).catch((e) => {
    res.status(400).send();
  });
};