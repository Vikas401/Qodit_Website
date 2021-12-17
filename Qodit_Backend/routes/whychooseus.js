module.exports = (app) => {
    const whychooseus = require('../controller/whychooseus');

    app.post('/whychooseus', whychooseus.create);

    app.get('/whychooseus', whychooseus.findAll);

    app.get('/whychooseus/:id', whychooseus.findOne);

    app.patch('/whychooseus/:id', whychooseus.update);

    app.delete('/whychooseus/:id', whychooseus.delete);

}