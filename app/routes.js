'use strict'
const config = require('./config/enviroment');
const path = require('path');

module.exports = function(app) {

    app.use('/api/enviarcorreo', require('./services'));

    app.route('/').get(function(req, res) {
        res.sendFile(path.join(config.root, '/public/index.html'));
    });
}
