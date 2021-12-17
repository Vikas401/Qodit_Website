const AboutUs = require("../models/aboutUs");
var { ObjectID } = require('mongodb');
var url= `https://qoditdev.herokuapp.com/`

exports.create = (req, res) => {
    var aboutUs = new AboutUs({
        title: req.body.title,
        image: `${url}${req.file.path}`,
        alt: req.body.alt,
        body: req.body.body,
        title1: req.body.title1
      });     
      aboutUs.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
    AboutUs.find()
  .then((aboutUs) => {
    
     res.send(aboutUs);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  AboutUs.findById(id)
  .then((aboutUs) => {
       if (!aboutUs) {
           return res.status(404).send();
       }
       res.send(aboutUs);
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
 AboutUs.findByIdAndUpdate(id, {  
    title: req.body.title,
        image: req.body.image,
        alt: req.body.alt,
        body: req.body.body,
        title1: req.body.title1
}, {new:true})
.then((aboutUs) => {
    if (!aboutUs) {
       return res.status(404).send();
    }
    res.send(aboutUs);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  AboutUs.findByIdAndRemove(id).then((aboutUs) => {
       if (!aboutUs) {
          return res.status(404).send();
       }
       res.send(aboutUs);
  }).catch((e) => {
    res.status(400).send();
  });
};