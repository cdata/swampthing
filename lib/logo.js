var util = require('util');

exports.logo = function(verbose) {

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

    return function(req, res, next) { next(); };
};
