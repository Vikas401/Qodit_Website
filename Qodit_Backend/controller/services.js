const Services = require("../models/services");
var { ObjectID } = require('mongodb');

exports.create = (req, res) => {
    var services = new Services({
        title: req.body.title,
        alt: req.body.alt,
        body: req.body.body,
      });     
      services.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
    Services.find()
  .then((services) => {
    
     res.send(services);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  Services.findById(id)
  .then((services) => {
       if (!services) {
           return res.status(404).send();
       }
       res.send(services);
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
 Services.findByIdAndUpdate(id, {  
    title: req.body.title,
        alt: req.body.alt,
        body: req.body.body,
}, {new:true})
.then((services) => {
    if (!services) {
       return res.status(404).send();
    }
    res.send(services);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Services.findByIdAndRemove(id).then((services) => {
       if (!services) {
          return res.status(404).send();
       }
       res.send(services);
  }).catch((e) => {
    res.status(400).send();
  });
};