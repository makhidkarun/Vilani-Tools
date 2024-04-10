
function aElem( co, na, tl, mass, av, em, fl, ra, so, ps, ins, se, cr )
{
   this.co   = co
   this.na   = na
   this.tl   = tl
   this.kg   = mass

   this.av   = av
   this.aa   = new Array( em, fl, ra, so, ps, ins, se )
   this.cr   = cr
}

var a_items = new Array
(        //  code,  name,           tl, kg, av, em, fl, ra, so, ps, in, se, cr 
   new aElem( 'A', 'Armor',         8,  30, 7,  3,  3,  3,  3,  1,  3,  3,  20000 ),
   new aElem( 'D', 'Dress',        10,  40, 9,  6,  6,  6,  6,  1,  6,  6,  40000 ),
   new aElem( 'S', 'Suit',          5,  10, 2,  1,  1,  1,  1,  1,  1,  1,   1000 ),
   new aElem( 'U', 'Unit',          9, 200, 4,  2,  2,  2,  2,  1,  2,  2,  60000 ),
   new aElem( 'X', '*Exoskin',     12,   5, 4,  2,  2,  2,  2,  1,  2,  2,  15000 ),
   new aElem( 'H', '*Shimmersuit', 20,   2, 2,  10, 50, 50, 10, 0,  50, 10, 10000 ),
   new aElem( 'C', '*Cube',        25, 0.5, 5,  50, 50, 50, 50, 50, 50, 5,  40000 ),
);

// Ex    Exoskin 13  5  4  2  2  2  2  1  2  2  High Tech Unpowered Exoskeleton  15k


var a_descriptors = new Array
(        //   code,  name,          tl, kg,  av, em,fl,ra,so,ps,in,se, cr 
   new aElem( '',    '',            0,  1.0, 1,  1, 1, 1, 1, 1, 1, 1,  1 ),
   new aElem( 'Wpn', 'Carrier ',    1,  2.0, 8,  1, 1, 1, 1, 1, 1, 1,  3 ),
   new aElem( 'A',   'Assault ',    4,  1.5, 2,  2, 2, 2, 2, 2, 2, 2,  3 ),
   new aElem( 'B',   'Battle ',     3,  2.5, 5,  5, 5, 5, 5, 5, 5, 5,  5 ),
   new aElem( 'Bo',  'Boarding ',   3,  1.2, 4,  1, 4, 1, 2, 1, 1, 3,  4 ),
   new aElem( 'Co',  'Cold ',       2,  0.2, 1,  1, 1, 1, 1, 1, 6, 1,  0.2 ),
   new aElem( 'P',   'Combat ',     3,  2.0, 4,  4, 4, 4, 4, 4, 4, 4,  4 ),
   new aElem( 'C',   'Combat Env ', 7,  2.5, 7,  4, 5, 5, 5, 1, 5, 5,  6 ),
   new aElem( 'EV',  'Env Vacc/2 ', 3,  1.8, 3,  2, 2, 6, 2, 1, 7, 8,  7 ),
   new aElem( 'D',   'Drop ',       2,  3.0, 8,  1, 8, 1, 8, 1, 1, 8,  3 ),
   new aElem( 'En',  'Environ ',    2,  0.5, 4,  4, 4, 1, 4, 1, 20,10, 1.5 ),
   new aElem( 'Exp', 'Exploration ',1,  1,   5,  1, 1, 1, 5, 1, 8, 8,  7 ),
   new aElem( 'Haz', 'Hazmat ',     0,  1.3, 2,  6, 6, 6, 6, 1, 12,12, 9 ),
   new aElem( 'HE',  'Hostile Env ',1,  1.2, 8,  1, 1, 8, 1, 1, 8, 12, 8 ),
   new aElem( 'H',   'Hot ',        1,  0.3, 2,  7, 5, 5, 5, 1, 5, 5,  0.6 ),
   new aElem( 'L',   'Labor ',     -1,  0.7, 1,  1, 1, 1, 1, 1, 6, 6,  4 ),
   new aElem( 'Po',  'Police ',     0,  0.6, 3,  1, 5, 1, 1, 1, 1, 2,  1.7 ), // reduced AV mult
   new aElem( 'Pr',  'Prospector ', 2,  2,   2,  2, 1, 1, 1, 1, 3, 5,  6 ),
   new aElem( 'Pro', 'Protected ',  2,  2,   2,  2, 2, 2, 2, 1, 3, 4,  7 ),
   new aElem( 'S',   'Sapper ',     2,  1.2, 5,  6, 6, 1, 6, 1, 8, 8,  7 ),
   new aElem( 'V',   'Vacc ',       4,  1,   5,  5, 0, 1, 1, 1, 5, 5,  10 ),
   //new aElem( '2',  '*CE (Vacc) ',  9,  0.5, 5,  5, 3, 3, 3, 1, 5, 5,  5 ),
   new aElem( 'Sh',  '*Shimmer ',    19,1.0,2,1,50,50,1,0,50,10, 100 ),
   new aElem( 'Wx',  '*White Globe ',15,1.0,12,12,12,12,12,12,12,6,    120 ),
);

var a_burdens = new Array
(        //   code,  name,          tl, kg,  av, em,fl,ra,so,ps,in,se,   cr 
   new aElem( '',    '',             0, 1.0,  0,  0, 0, 0, 0, 0, 0, 0,   1 ),
   new aElem( 'D',   'Disposable ',  3, 0.9, -5, -5,-5,-5,-5, 0, 5,-5,   0.5 ),
   new aElem( 'H',   'Heavy ',       1, 1.3,  8, 10,10,10,10, 0,15,10,   2 ),
   new aElem( 'Lt',  'Light ',       0, 0.7, -3, -3,-3,-3,-3, 0, 5,-3,   1.1 ),
   new aElem( 'M',   'Medium ',      0, 1,    0,  0, 0, 0, 0, 0,10, 0,   1 ),
   new aElem( 'S',   'Small ',       0, 0.5,  0,  0, 0, 0, 0, 0, 5, 0,   0.5 ),
   new aElem( 'Vl',  'Vlight ',      1, 0.6, -5, -5,-5,-5,-5, 0,-2,-5,   2 ),
   new aElem( 'Os',  'Oversize ',    1, 8,   12, 8,8,8,8,0,8,8,  10 ),
   new aElem( 'T',   'Titan ',       3, 27,  16, 8,8,8,8,0,8,8,  30  )
);

/*
var a_sizes   = new Array
(
   new aElem( '',    '',            0, 1.0,  0, 0,0,0,0,0,0,0,  1 ),
   new aElem( 'Os',  'Oversize ',   1, 8,   12, 8,8,8,8,0,8,8,  10 ),
   new aElem( 'T',   'Titan ',      3, 27,  16, 8,8,8,8,0,8,8,  30  )
);
*/

var a_stages = new Array
(
   new aElem( '',    '',            0, 1.0,  0,  0,  0,  0,  0, 0, 0, 0,  1 ),
   new aElem( 'St',  'Standard ',   1, 1,    0,  0,  0,  0,  0, 0, 0, 0,  1 ),
   new aElem( 'A',   'Advanced ',   3, 0.8, 10, 10, 10, 10, 10, 3,30,10,  2 ),
   new aElem( 'Alt', 'Alternate',   1, 1.1,  5,  5,  5,  5,  5, 0,15, 5,  1.1 ),
   new aElem( 'B',   'Basic ',      0, 1.3, -5, -5, -5, -5, -5, 0,-5,-5,  0.7 ),
   new aElem( 'E',   'Early ',     -1, 1.7, -2, -2, -2, -2, -2, 0,-2,-2,  1.2 ),
   new aElem( 'En',  'Enhanced ',   1, 2,    3,  3,  3,  3,  3, 0, 9, 3,  4 ),
   new aElem( 'X',   'Experim. ',  -2, 2,   -8, -8, -8, -8, -8, 0,-8,-8,  4 ),
   new aElem( 'Im',  'Improved ',   1, 1,    6,  6,  6,  6,  6, 0,18, 6,  1.1 ),
   new aElem( 'Mod', 'Modified ',   2, 0.9,  3,  3,  3,  3,  3, 0, 9, 3,  1.2 ),
   new aElem( 'Ob',  'Obsolete ',   4, 0.7,  3,  3,  3,  3,  3, 0, 9, 3,  0.5 ),   
   new aElem( 'P',   'Prototype ', -1, 1.9,  -4, -4,-4, -4, -4, 0,-4,-4,  3 ),
   new aElem( 'Re',  'Remote ',     2, 1.5,  0,  0,  0,  0,  0, 0, 0, 0,  4 ),
   new aElem( 'Sl',  'Slaved ',     2, 1.5,  0,  0,  0,  0,  0, 0, 0, 0,  4 ),
   //new aElem( 'U',   'Ludicrous* ', 7, 0.7, 12, 12, 12, 12, 12, 5,35,12,  1 ),
);


function a_printOptions( array )
{
   for ( var i in array )
   {
   	  var e = array[i];
      document.writeln( '<option value="' + e.co + '">' + e.na + '</option>' );
   }
}

function calc_protections( ia, da, ba, sa ) //, size_code )
{
   var out = new Array
   (
      ia[0] * da[0] + ba[0] + sa[0],
      ia[1] * da[1] + ba[1] + sa[1],
      ia[2] * da[2] + ba[2] + sa[2],
      ia[3] * da[3] + ba[3] + sa[3],
      ia[4] * da[4] + ba[4] + sa[4],
      ia[5] * da[5] + ba[5] + sa[5],
      ia[6] * da[6] + ba[6] + sa[6]
   );
   
/*
   if ( size_code == 'Os' )
      for ( var i = 0; i<=6; i++ )
         out[i] *= 2;
   
   if ( size_code == 'T' )
      for ( var i = 0; i<=6; i++ )
         out[i] *= 3;
*/
         
   return out;
}

function a_recalc( form )
{   
   var i = a_items[ form.item.selectedIndex ];
   var d = a_descriptors[ form.descriptor.selectedIndex ];
//  var z = a_sizes[ form.size.selectedIndex ];
   var b = a_burdens[ form.burden.selectedIndex ];
   var s = a_stages[ form.stage.selectedIndex ];
   
   //var mass = '' + parseInt(i.kg * d.kg * z.kg * b.kg * s.kg);
   var mass = '' + parseInt(i.kg * d.kg * b.kg * s.kg);
   var av   = '' + (i.av * d.av + b.av + s.av);
   
   //if ( z.co == 'Os' ) av *= 2;
   //if ( z.co == 'T'  ) av *= 3;

   var mav  = av;
   var constant = 2.1114; // was 2.07
   if ( av > 10 )
//        mav  = parseInt( 1.7 * Math.sqrt( av - 10 ) ) + 10;
      mav  = parseInt( Math.sqrt( av ) * constant + 5 );
   
   
   var tl   = (i.tl + d.tl + /*z.tl +*/ b.tl + s.tl);
   var kcr  = '' + parseInt(i.cr * d.cr * /*z.cr **/ b.cr * s.cr / 1000);
   var prot = calc_protections( i.aa, d.aa, b.aa, s.aa );  //  , z.co );

   var code = s.co + b.co + /*z.co +*/ d.co + i.co  + '-' + tl;
   var name = s.na + b.na + /*z.na +*/ d.na + i.na  + '-' + tl;
   
    form.output.value = ''
	                 + code + ', ' + name + ', ' + mass + ' kg, KCr ' + kcr + "\n"
					 
                     // em, fl, ra, so, ps, ins, se
					 + ' AV ' + av + "\n"
					 + ' MgT ' + mav + "\n"
                     + '      EMCage: ' + prot[0] + "\n"
                     + '  Flashproof: ' + prot[1] + "\n"
                     + '    Radproof: ' + prot[2] + "\n"
                     + '  Soundproof: ' + prot[3] + "\n"
                     + '   Psishield: ' + prot[4] + "\n"
                     + '   Insulated: ' + prot[5] + "\n"
                     + '      Sealed: ' + prot[6] + "\n"
                     + "\n";
					 
   
   form.output.value += "\n"
   /*
                     + pp( code, 12 )
                     + pp( name, 47 )
                     + ' ' + av + ' [' + prot + ']'
                     + "\n"
                     + pp( "KCr " + kcr, 12 )
                     + pp( mass + ' kg ', 8 );
                     
   if ( qq ) form.output.value += "Q=" + qq + ' ';
   if ( qr ) form.output.value += "R=" + qr + ' ';
   if ( qe ) form.output.value += "E=" + qe + ' ';
   if ( qb ) form.output.value += "B=" + qb + ' ';
   if ( qs ) form.output.value += "S=" + qs + ' ';
   
   form.output.value += "\n";
   */

                     + pp( 'Code',  12 ) 
                     + pp( 'Name',  42 ) 
                     + pp( 'AV and Protection',    30 ) 
                     + pp( 'Mass',  -4 ) 
                     + pp( 'KCr',   -4 ) 
                     + "\n"
                     + dashes( 12 )
                     + dashes( 42 )
                     + dashes( 30 )
                     + dashes( 4 )
                     + dashes( 4 )
                     + "\n"
                     + pp( code,  12 ) 
                     + pp( name,  42 ) 
                     + pp( av + ' [' + prot + ']',    30 ) 
                     + pp( mass,  -4 )   
                     + pp( kcr,   -4 )  
                     + "\n\n"
                     + 'Code: ' + code  + "\n"
                     + 'Name: ' + name  + "\n"
                     + 'Mass: ' + mass  + " kg\n"
                     + '  AV: ' + av  + "\n"
                     + ' MgT: ' + mav + "\n"
                     // em, fl, ra, so, ps, ins, se
                     + '      EMCage: ' + prot[0] + "\n"
                     + '  Flashproof: ' + prot[1] + "\n"
                     + '    Radproof: ' + prot[2] + "\n"
                     + '  Soundproof: ' + prot[3] + "\n"
                     + '   Psishield: ' + prot[4] + "\n"
                     + '   Insulated: ' + prot[5] + "\n"
                     + '      Sealed: ' + prot[6] + "\n"
                     + "\n"
                     + 'Cost: ' +  'KCr ' + kcr + "\n";
        
    form.output.value += "\n";

}
