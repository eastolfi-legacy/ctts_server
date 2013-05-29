module.exports = function(app) {
    var Discos = require('../models/discos');

    app.get('/', function(req, res){
        res.render('index', { title: 'Express' });
    });

    app.get('/discos', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin: *');
        Discos.find(function(error, discos) {
            if (!error) res.send(discos);
        });
    });

    app.get('/disco/:title', function(req, res) {
        Discos.findOne({tituloDisco : req.params.title}, function(error, disco) {
            if (!error) res.send(disco);
        });
    });
};