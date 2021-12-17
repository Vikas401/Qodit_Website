const WhyChooseUs = require("../models/whychooseus");
var { ObjectID } = require('mongodb');

exports.create = (req, res) => {
    var whychooseus = new WhyChooseUs({
        title: req.body.title,
       
      });     
      whychooseus.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
    WhyChooseUs.find()
  .then((whychooseus) => {
    
     res.send(whychooseus);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  WhyChooseUs.findById(id)
  .then((whychooseus) => {
       if (!whychooseus) {
           return res.status(404).send();
       }
       res.send(whychooseus);
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
 WhyChooseUs.findByIdAndUpdate(id, {  
    title: req.body.title,
        image: req.body.image,
        alt: req.body.alt,
        body: req.body.body,
}, {new:true})
.then((whychooseus) => {
    if (!whychooseus) {
       return res.status(404).send();
    }
    res.send(whychooseus);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  WhyChooseUs.findByIdAndRemove(id).then((whychooseus) => {
       if (!whychooseus) {
          return res.status(404).send();
       }
       res.send(whychooseus);
  }).catch((e) => {
    res.status(400).send();
  });
};