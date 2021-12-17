const Features = require("../models/features");
var { ObjectID } = require('mongodb');

exports.create = (req, res) => {
    var features = new Features({
        title: req.body.title,
        image: req.body.image,
        alt: req.body.alt,
        body: req.body.body
      });     
      features.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
    Features.find()
  .then((features) => {
    
     res.send(features);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  Features.findById(id)
  .then((features) => {
       if (!features) {
           return res.status(404).send();
       }
       res.send(features);
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
 Features.findByIdAndUpdate(id, {  
    title: req.body.title,
        image: req.body.image,
        alt: req.body.alt,
        body: req.body.body,
}, {new:true})
.then((features) => {
    if (!features) {
       return res.status(404).send();
    }
    res.send(features);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Features.findByIdAndRemove(id).then((features) => {
       if (!features) {
          return res.status(404).send();
       }
       res.send(features);
  }).catch((e) => {
    res.status(400).send();
  });
};