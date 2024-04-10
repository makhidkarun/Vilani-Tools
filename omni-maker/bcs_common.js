var keys = new Array( 'code      ', 
                      'type                                        ', 
                      'TL', 
                      ' Vol', 
                      'J', 
                      'M', 
                      'P', 
                      'Load', 
                      '  AV ', 
                      'Spine', 
                      ' BCr ' );

/******************************************************************

   Battle-Class Ships

******************************************************************/
var bcs_primary = new Array
(
//                         code   type          TL    Vol   J M P      Ld   AV   Sp BCr
   new El( keys, new Array( 'A', 'Auxiliary',   12,   10,   3,3,3,      3,  100, 0, 1 ) ),
   new El( keys, new Array( 'E', 'Escort',      12,   15,   3,5,5,      2,  300, 1, 2 ) ),
   new El( keys, new Array( 'D', 'Destroyer',   13,   20,   3,4,4,      3,  400, 1, 3 ) ),
   new El( keys, new Array( 'C', 'Cruiser',     12,   25,   3,5,5,      1,  500, 1, 4 ) ),
   new El( keys, new Array( 'F', 'Flagship',    13,   30,   3,3,3,      1,  600, 1, 5 ) ),
   new El( keys, new Array( 'H', 'Tender',      12,   75,   3,1,3,     10,  200, 0,12 ) ),
   new El( keys, new Array( 'M', 'Mine Layer',  12,   25,   2,2,2,      5,  200, 0, 4 ) ), 
   new El( keys, new Array( 'R', 'Rider',       11,   10,   "=0",5,5, 0.5,  500, 1, 3 ) )  
);

var bcs_secondary = new Array
(
//                         code   type          TL    Vol   J M P      Ld   AV   Sp  BCr
   new El( keys, new Array( 'A', 'Attack ',      0,    0,   0,0,0,      0,    0,  0, 0 ) ),
   new El( keys, new Array( 'B', 'Battle ',      1, 'x4',   0,1,1,    'x8', 'x2', 0,'x10') ),
   new El( keys, new Array( 'C', 'Pursuit ',     0,    0,   0,2,2,      0, -100,  0, 1 ) ),
   new El( keys, new Array( 'D', 'Defense ',     0, 'x2',  -1,0,0,      4,  500,  0, 1 ) ), 
   new El( keys, new Array( 'K', 'Commo ',       0,'x0.5',  0,0,0,      0, -100,  0,-1 ) ), 
   new El( keys, new Array( 'V', 'Ortillery ',   0,    0,   0,-1,-1,    4,  500,  0, 1 ) ), 
   new El( keys, new Array( 'W', 'Assault ',     1, 'x8',   0,-1,1,  'x15','x5',  0, 'x24' ) ) 
);

var bcs_option = new Array
(
//                         code   type          TL    Vol   J M P      Ld   AV   Sp BCr
   new El( keys, new Array( '(std)', '(std) ',    0,   0,  0,0,0,   0,    0, 0, 0 ) ), 
   new El( keys, new Array( 'S', 'Slow ',        -1,   0,  0,-1,-1, 0,    0, 0, 'x0.8' ) ), 
   new El( keys, new Array( 'F', 'Fast ',         1,   0,  0,1,1,   0,    0, 0, 'x2') ),
   new El( keys, new Array ('R', 'Far ',          0,   0,  1,0,1,'x0.9','x0.9',0,'x1.2'))   
);

var bcs_bulk = new Array
(
//                         code   type          TL    Vol   J M P      Ld   AV   Sp BCr
   new El( keys, new Array( '(m)', '(Medium)',    0,   0,  0,0,0,   0,    0, 0, 0 ) ), 
   new El( keys, new Array( 'Vl', 'Vlight ',      2,'/3',  0,1,1,'/3', '/3', 0, '/3' ) ), 
   new El( keys, new Array( 'L',  'Light ',       1,'/2',  0,1,1,'/2', '/2', 0, '/2' ) ), 
   new El( keys, new Array( 'H',  'Heavy ',       0,'x2',  0,-1,0,'x2', 'x2', 0, 'x2' ) ),
   new El( keys, new Array( 'Vh', 'Vheavy ',      0,'x3',  0,-2,0,'x3', 'x3', 0, 'x3' ) )
);

var bcs_stage = new Array
(
//                         code   type          TL    Vol   J M P      Ld      AV   Sp BCr
   new El( keys, new Array( '(std)', '(Standard) ', 0,   0,   0,0,0,      0,      0,  0, 0    )), 
   new El( keys, new Array( 'Ve',  'Vearly ',    -2,'x0.8', -1,-1,-1, 'x0.6', 'x0.6', 0, 'x1.2' )),
   new El( keys, new Array( 'Er',  'Early ',     -1,   0,  -1,0,0, 'x0.8', 'x0.8',  0, 'x1.2' )),
   new El( keys, new Array( 'Imp', 'Improved ',   1,   0,   0,1,1, 'x1.3', 'x1.3',  0, 'x1.2' )),
   new El( keys, new Array( 'Adv', 'Advanced ',  2,   0,   1,1,1,   'x2',   'x2',  0, 'x1.5' ))
);

function bcs_printOptions()
{
   document.writeln( ''
      + printOptions( 'stage',     'bcs_recalc',  bcs_stage )
      + printOptions( 'bulk',      'bcs_recalc',  bcs_bulk ) 
      + printOptions( 'option',    'bcs_recalc',  bcs_option )
      + printOptions( 'secondary', 'bcs_recalc',  bcs_secondary   )
      + printOptions( 'primary',   'bcs_recalc',  bcs_primary )
   );
}

function bcs_recalc( form )
{
   var stage   = bcs_stage[ form.stage.selectedIndex ];
   var bulk    = bcs_bulk[ form.bulk.selectedIndex ];
   var option  = bcs_option[ form.option.selectedIndex ];
   var second  = bcs_secondary[ form.secondary.selectedIndex ];
   var prime   = bcs_primary[ form.primary.selectedIndex ];

   var out = compose( new Array(prime, second, option, bulk, stage) );
   
   form.output.value = hdr(  keys, ' ' )
                     + prln( out, ' ' )
                     + "\n"
                     + prln( out, "\n", 2 );
}
