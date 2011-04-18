 @@@@@@   @@@  @@@  @@@   @@@@@@   @@@@@@@@@@   @@@@@@@
@@@@@@@   @@@  @@@  @@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@
!@@       @@!  @@!  @@!  @@!  @@@  @@! @@! @@!  @@!  @@@
!@!       !@!  !@!  !@!  !@!  @!@  !@! !@! !@!  !@!  @!@
!!@@!!    @!!  !!@  @!@  @!@!@!@!  @!! !!@ @!@  @!@@!@!
 !!@!!!   !@!  !!!  !@!  !!!@!!!!  !@!   ! !@!  !!@!!!
     !:!  !!:  !!:  !!:  !!:  !!!  !!:     !!:  !!:
    !:!   :!:  :!:  :!:  :!:  !:!  :!:     :!:  :!:
:::: ::    :::: :: :::   ::   :::  :::     ::    ::
:: : :      :: :  : :     :   : :   :      :     :


@@@@@@@  @@@  @@@  @@@  @@@  @@@   @@@@@@@@
@@@@@@@  @@@  @@@  @@@  @@@@ @@@  @@@@@@@@@
  @@!    @@!  @@@  @@!  @@!@!@@@  !@@
  !@!    !@!  @!@  !@!  !@!!@!@!  !@!
  @!!    @!@!@!@!  !!@  @!@ !!@!  !@! @!@!@
  !!!    !!!@!!!!  !!!  !@!  !!!  !!! !!@!!
  !!:    !!:  !!!  !!:  !!:  !!!  :!!   !!:
  :!:    :!:  !:!  :!:  :!:  !:!  :!:   !::
   ::    ::   :::   ::   ::   ::   ::: ::::
   :      :   : :  :    ::    :    :: :: :


# Swamp Thing

Swamp Thing is a basic http server that takes in JavaScript and CSS and spits
out minified equivalents to the input.

## API

### POST /minify/:type

POST to the service with the content you wish to minify as the POST body. Type
should be either 'js' or 'css.'

## The future

Things I'm planning to add:

 - Return minified content based on a provided file path.
 - ???

