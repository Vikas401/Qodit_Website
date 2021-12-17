const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
  filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
  }
});

const uploadImg = multer({storage: storage}).single('image');


module.exports = (app) => {
    const heroBox = require('../controller/heroBox');

    app.post('/herobox', uploadImg, heroBox.create);

    app.get('/herobox', heroBox.findAll);

    app.get('/herobox/:id', heroBox.findOne);

    app.patch('/herobox/:id', heroBox.update);

    app.delete('/herobox/:id', heroBox.delete);

}