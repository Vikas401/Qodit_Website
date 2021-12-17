
module.exports = (app) => {
    const navbar = require('../controller/navbar');

    app.post('/navbar', navbar.create);

    app.get('/navbar', navbar.findAll);

    app.get('/navbar/:id', navbar.findOne);

    app.patch('/navbar/:id', navbar.update);

    app.delete('/navbar/:id', navbar.delete);

}