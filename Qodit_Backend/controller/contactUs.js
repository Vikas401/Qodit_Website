const ContactUs = require("../models/contactUs");
var { ObjectID } = require('mongodb');
const multiparty = require("multiparty");


exports.create = (req, res) => {
  const contactus = new ContactUs({
    email: req.body.email,
    message: req.body.message,
    name: req.body.name


  })
  contactus.save().then(docs => {
    
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", //replace with your email provider
      port: 587,
      auth: {
        user: 'Qodit.sales@gmail.com',
        pass: '#Hireqodit2021'
      }

    });
    var mailOptions = {
      from: docs.email,
      to: 'qodit.sales@gmail.com',
      subject: 'Website Enquiry',
      text:"Name:-"+ docs.name + "\n Email:- " + docs.email + "\n Message:-" + docs.message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.send('Email not sent');

      } else {
        res.send('Email sent successfully');
      }
    });
  })
  var nodemailer = require('nodemailer');

 
};


exports.findAll = (req, res) => {
    ContactUs.find()
  .then((contactUs) => {
    
     res.send(contactUs);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  ContactUs.findById(id)
  .then((contactUs) => {
       if (!contactUs) {
           return res.status(404).send();
       }
       res.send(contactUs);
  }).catch((e) => {
     res.status(400).send();
  });
};


exports.update = (req, res) => {
  var id = req.params.id;
 
 if (!ObjectID.isValid(id)) {
    return res.status(404).send();
 }
 ContactUs.findByIdAndUpdate(id, { 
    message: req.body.message,
    email: req.body.email,
    name: req.body.name
 }, {new:true})
.then((contactUs) => {
    console.log(contactUs)
    if (!contactUs) {
       return res.status(404).send();
    }
    res.send(contactUs);
}).catch((e) => {
       res.status(400).send();
})
};

exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  ContactUs.findByIdAndRemove(id).then((contactUs) => {
       if (!contactUs) {
          return res.status(404).send();
       }
       res.send(contactUs);
  }).catch((e) => {
    res.status(400).send();
  });
};