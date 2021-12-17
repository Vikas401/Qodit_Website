
module.exports = (app) => {
    const features = require('../controller/features');

    app.post('/features', features.create);

    app.get('/features', features.findAll);

    app.get('/features/:id', features.findOne);

    app.patch('/features/:id', features.update);

    app.delete('/features/:id', features.delete);

}