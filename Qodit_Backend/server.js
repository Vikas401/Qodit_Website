const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const authRoute = require('./controller/admin')

const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
var {db} = require("./config/db");
const multer = require('multer');

const app = express();
app.use(cors())
app.use('/uploads',express.static('uploads'))
app.use('/file',express.static('file'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api/auth', authRoute)


const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("hello world")
})
 require('./routes/navbar')(app);
 require('./routes/heroBox')(app);
 require('./routes/features')(app);
 require('./routes/aboutUs')(app);
 require('./routes/services')(app);
 require('./routes/testimonial')(app);
 require('./routes/contactUs')(app);
 require('./routes/careerform')(app);
 require('./routes/whychooseus')(app);
//  require('./routes/admin')(app);


app.listen(port, () => {
    console.log("App is running on port " + port);
});

module.exports = {app};

