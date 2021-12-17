module.exports = (app) => {
    const services = require('../controller/services');

    app.post('/services', services.create);

    app.get('/services', services.findAll);

    app.get('/services/:id', services.findOne);

    app.patch('/services/:id', services.update);

    app.delete('/services/:id', services.delete);

}