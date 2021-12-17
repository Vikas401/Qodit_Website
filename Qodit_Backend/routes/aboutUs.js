const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
    },
  filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const uploadImg = multer({storage: storage}).single('image');
module.exports = (app) => {
    const aboutUs = require('../controller/aboutUs');

    app.post('/aboutus',uploadImg, aboutUs.create);

    app.get('/aboutus', aboutUs.findAll);

    app.get('/aboutus/:id', aboutUs.findOne);

    app.patch('/aboutus/:id', aboutUs.update);

    app.delete('/aboutus/:id', aboutUs.delete);

}