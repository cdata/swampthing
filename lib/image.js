var connect = require('connect');

exports.imageOptimizer = function(verbose) {

    return connect.router(
        function(app) {
            
            app.post(
                '/image',
                function(req, res, next) {

                }
            );

            app.get(
                '/image/:url',
                function(req, res, next) {

                }
            );
        }
    );
};
