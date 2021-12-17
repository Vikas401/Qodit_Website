const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './file/');
    },
  filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-')  + file.originalname);
  }

});


const uploadfile = multer({
    storage: storage,
}).single('upload');

module.exports = (app) => {
    const CareerForm = require('../controller/careerform');

    app.post('/careerform',uploadfile,CareerForm.create);

    app.get('/careerform',CareerForm.findAll);

    app.get('/careerform/:id', CareerForm.findOne);

    app.delete('/careerform/:id', CareerForm.delete);

}