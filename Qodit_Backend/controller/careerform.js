const url =require('url')
const ContactUs = require("../models/contactUs");
var { ObjectID } = require('mongodb');
const multiparty = require("multiparty");
const CareerForm = require("../models/careerform");
const { parse } = require("dotenv");
var request = require('request').defaults({encoding:null})

var urls= `https://qoditdev.herokuapp.com/`
exports.create = (req, res) => {
  const careerform = new CareerForm({
    name: req.body.name,
    message: req.body.message,
    email: req.body.email,
    phone_number:req.body.phone_number,
    upload:`${urls}${req.file.path}`

  })
  careerform.save().then(docs => {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: 'Qodit.sales@gmail.com',
        pass: '#Hireqodit2021'
      }
    });
    var url=new URL(`https://qoditdev.herokuapp.com/${docs.upload}`) 
    var mailOptions = {
      from: docs.email,
      to: 'qodit.sales@gmail.com',
      subject: 'Website Enquiry',
      text: "Hello! I'm "+ docs.name + "\n I would like to talk about "+ docs.message + "\n You Can reach me at " + docs.email + "\n and " + docs.phone_number + "\n to chat and discuss next steps."+
     "\n I have an attachment and would love for you to take a look at it \n" + "RESUME =\n"+ `${url}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.send('Email sent: ' + info.response);
      }
    });
  })
  var nodemailer = require('nodemailer');

 
};


exports.findAll = (req, res) => {
    CareerForm.find()
  .then((careerform) => {
    
     res.send(careerform);
    }, (e) => {
      res.status(400).send(e);
    })
};

exports.findOne = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }
  CareerForm.findById(id)
  .then((careerform) => {
       if (!careerform) {
           return res.status(404).send();
       }
       res.send(careerform);
  }).catch((e) => {
     res.status(400).send();
  });
};


exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
 CareerForm.findByIdAndRemove(id).then((careerform) => {
       if (!careerform) {
          return res.status(404).send();
       }
       res.send(careerform);
  }).catch((e) => {
    res.status(400).send();
  });
};


