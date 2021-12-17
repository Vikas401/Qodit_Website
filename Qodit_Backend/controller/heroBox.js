const HeroBox = require("../models/heroBox");
var { ObjectID } = require('mongodb');



var url= `https://qoditdev.herokuapp.com/`
exports.create = (req, res) => {
    var heroBox = new HeroBox({
        title: req.body.title,
        image: `${url}${req.file.path}`,
        alt: req.body.alt,
        body: req.body.body,
        buttonText: req.body.buttonText
      });  
         
      heroBox.save().then((doc) => { 
       (doc.isNew === false)  
      res.status(400).send(doc);  
    }, (e) => {   
      res.status(400).json({success: false, message:e.message})
    });
};

exports.findAll = (req, res) => {
    HeroBox.find()
  .then((herobox) => {
    
     res.send(herobox);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  HeroBox.findById(id)
  .then((herobox) => {
       if (!herobox) {
           return res.status(404).send();
       }
       res.send(herobox);
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
 HeroBox.findByIdAndUpdate(id, {  
    title: req.body.title,
    image: req.body.image,
    alt: req.body.alt,
    body: req.body.body,
    buttonText: req.body.buttonText
}, {new:true})
.then((herobox) => {
    if (!herobox) {
       return res.status(404).send();
    }
    res.send(herobox);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  HeroBox.findByIdAndRemove(id).then((herobox) => {
       if (!herobox) {
          return res.status(404).send();
       }
       res.send(herobox);
  }).catch((e) => {
    res.status(400).send();
  });
};