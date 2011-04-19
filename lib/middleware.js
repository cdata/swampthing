var util = require('util'),
    connect = require('connect'),
    uglify = require('uglify-js'),
    parser = uglify.parser,
    uglifier = uglify.uglify,
    cleancss = require('clean-css');

exports.middleware = function(verbose) {

    util.puts('\n\
\n\
 @@@@@@   @@@  @@@  @@@   @@@@@@   @@@@@@@@@@   @@@@@@@\n\
@@@@@@@   @@@  @@@  @@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@\n\
!@@       @@!  @@!  @@!  @@!  @@@  @@! @@! @@!  @@!  @@@\n\
!@!       !@!  !@!  !@!  !@!  @!@  !@! !@! !@!  !@!  @!@\n\
!!@@!!    @!!  !!@  @!@  @!@!@!@!  @!! !!@ @!@  @!@@!@!\n\
 !!@!!!   !@!  !!!  !@!  !!!@!!!!  !@!   ! !@!  !!@!!!\n\
     !:!  !!:  !!:  !!:  !!:  !!!  !!:     !!:  !!:\n\
    !:!   :!:  :!:  :!:  :!:  !:!  :!:     :!:  :!:\n\
:::: ::    :::: :: :::   ::   :::  :::     ::    ::\n\
:: : :      :: :  : :     :   : :   :      :     :\n\
\n\
\n\
    @@@@@@@  @@@  @@@  @@@  @@@  @@@   @@@@@@@@\n\
    @@@@@@@  @@@  @@@  @@@  @@@@ @@@  @@@@@@@@@\n\
      @@!    @@!  @@@  @@!  @@!@!@@@  !@@\n\
      !@!    !@!  @!@  !@!  !@!!@!@!  !@!\n\
      @!!    @!@!@!@!  !!@  @!@ !!@!  !@! @!@!@\n\
      !!!    !!!@!!!!  !!!  !@!  !!!  !!! !!@!!\n\
      !!:    !!:  !!!  !!:  !!:  !!!  :!!   !!:\n\
      :!:    :!:  !:!  :!:  :!:  !:!  :!:   !::\n\
       ::    ::   :::   ::   ::   ::   ::: ::::\n\
       :      :   : :  :    ::    :    :: :: :\n\
\n\
          Rising from the depths,\n\
                  ruthlessly optimizing,\n\
              he counts every bit.\n'
    );

    return connect.router(
        function(app) {
            
            app.post(
                '/minify/:type',
                function(req, res) {

                    var content = '',
                        type = req.params.type,
                        minified;

                    req.on(
                        'data',
                        function(chunk) {

                            content += chunk.toString();
                        }
                    );

                    req.on(
                        'end',
                        function() {

                            if(content !== '') {

                                if(type === 'js') {

                                    try {
                                        minified = uglifier.gen_code(uglifier.ast_squeeze(uglifier.ast_mangle(parser.parse(content))));
                                    } catch(e) {
                                        util.log('Error while compiling JavaScript: ' + e.message);
                                    }
                                } else {

                                    try {
                                        minified = cleancss.process(content);
                                    } catch(e) {
                                        util.log('Error while compiling CSS: ' + e.message);
                                    }
                                }
                            }

                            if(minified) {

                                res.writeHead(200);
                                res.write(minified);
                            } else {

                                res.writeHead(204);
                            }

                            res.end();
                        }
                    );
                }
            );
        }
    );
};
