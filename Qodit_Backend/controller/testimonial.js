const Testimonial = require("../models/testimonial");
var { ObjectID } = require('mongodb');
var url= `https://qoditdev.herokuapp.com/`

exports.create = (req, res) => {
    var testimonial = new Testimonial({
        title: req.body.title,
        image: `${url}${req.file.path}`,
        alt: req.body.alt,
        body: req.body.body,
       
      });     
      testimonial.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
    Testimonial.find()
  .then((testimonial) => {
    
     res.send(testimonial);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  Testimonial.findById(id)
  .then((testimonial) => {
       if (!testimonial) {
           return res.status(404).send();
       }
       res.send(testimonial);
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
 Testimonial.findByIdAndUpdate(id, {  
    title: req.body.title,
    image: req.body.image,
    alt: req.body.alt,
    body: req.body.body,
    
}, {new:true})
.then((testimonial) => {
    if (!testimonial) {
       return res.status(404).send();
    }
    res.send(testimonial);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Testimonial.findByIdAndRemove(id).then((testimonial) => {
       if (!testimonial) {
          return res.status(404).send();
       }
       res.send(testimonial);
  }).catch((e) => {
    res.status(400).send();
  });
};