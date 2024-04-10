function loElem( cl, co, na, tl, rng, mass, b, h1, d1, h2, d2, d, x, cr )
{
   this.cl   = cl;
   this.co   = co
   this.na   = na
   this.tl   = tl
   this.rng  = rng
   this.kg   = mass
   this.b    = b
   this.h1   = h1
   this.d1   = d1
   this.h2   = h2
   this.d2   = d2
   this.d    = d
   this.recoil = x
   this.cr   = cr
}

function g_recalc( form )
{
   var d = lo_descriptors[ form.descriptor.selectedIndex ];
   var g = lo_melee[ form.melee.selectedIndex ];
   var b = lo_burdens[ form.burden.selectedIndex ];
   var s = lo_stages[ form.stage.selectedIndex ];

   var tl   = (parseInt(s.tl) + parseInt(b.tl) + parseInt(d.tl) + parseInt(g.tl)) + '';

   var desc = d.co;
   if ( d.na == '(blank)' ) desc = '';

//   if ( d.h1 == 'Disrupt' && g.na == 'Shotgun' ) 
//      g.na = '';
   
   var code = s.co + b.co + desc + g.co;
   var name = s.na + ' ' + b.na + ' ' + d.na + ' ' + g.na;

   code = code.replace( /None|.blank./g, '' );
   name = name.replace( /None|.blank./g, '' );
   name = name.replace( /^\s+/g, '' );
   name = name.replace( /\s\s/g, ' ' );

   var rng  = s.rng; 
   if ( d.rng > 0 ) rng = d.rng;        // --- handle designator range override

   // --- handle burden range override 
   var brng = b.rng.toString();         
   if ( brng.replace( '*', '' ) ) rng = parseInt( brng.replace( '*', '' ) );
   else rng += b.rng;

   rng += g.rng;
   rng += '';

   var kg   = parseInt(g.kg  * d.kg  * b.kg  * s.kg * 100)/100 + '';
   if ( kg == 0 ) kg = '< 1';
   var qb   = (g.b   + d.b   + b.b   + s.b) + '';
   
   var v2hits = {};
   var carry = 0;
   
   carry = addHits( v2hits, b.h1, b.d1, d.na, carry );
   carry = addHits( v2hits, b.h2, b.d2, d.na, carry );
   carry = addHits( v2hits, s.h1, s.d1, d.na, carry );
   carry = addHits( v2hits, s.h2, s.d2, d.na, carry );
   carry = addHits( v2hits, g.h1, g.d1, d.na, carry );
   carry = addHits( v2hits, g.h2, g.d2, d.na, carry );
   carry = addHits( v2hits, d.h1, d.d1, d.na, carry );
   carry = addHits( v2hits, d.h2, d.d2, d.na, carry );
   	
   var hits = printHits( v2hits ).replace( /\*-/g, '+' );
   
   var da   = (g.d   + d.d   + b.d   + s.d) + '';
   var cr   = parseInt(g.cr  * d.cr  * b.cr  * s.cr) + '';

   var displaycost = cr;

   if ( cr > 999999 )
      cr = 'MCr ' + parseInt( cr / 10000 ) / 100;
   
   else
   if ( cr > 5000 )
      cr = 'KCr ' + parseInt( cr / 100 ) / 10;      
   else
      displaycost = 'Cr ' + cr;
   
   cr = cr.replace( /(\d)(\d\d\d)$/, "$1,$2" );
   displaycost = displaycost.replace( /(\d)(\d\d\d)$/, "$1,$2" );
 
   if ( kg < 40 && (d.recoil == 'hi' || g.recoil == 'hi' || b.recoil == 'hi' ) )
   {
   	  code += 'MP';
   	  name += ' Man Portable';
   }
   else if ( kg >= 20 && kg < 200 )
   {
      code += 'C';
      name += ' Crewed';
   }
   else if ( kg >= 200 && kg < 500 )
   {
   	  code += 'T';
   	  name += ' Turret';
   }
   else if ( kg >= 500 && kg < 1000 )
   {
   	  code += 'V';
   	  name += ' Vehicle Mount';
   }
   else if ( kg >= 1000 )
   {
   	  code += 'F';
   	  name += ' Fixed';
   }
   
   code += '-' + tl;
   name += '-' + tl;
   
   form.output.value = ''
   
/*
                     + pp( code, 11 )
                     + pp( name, 47 )
                     + ' ' + hits
                     + "\n"
                     + pp( "R=" + rng, 5 )
                     + pp( cr, 12 )
                     + pp( kg, 8 );
                     
   if ( qq ) form.output.value += "Q=" + qq + ' ';
   if ( qr ) form.output.value += "R=" + qr + ' ';
   if ( qe ) form.output.value += "E=" + qe + ' ';
   if ( qb ) form.output.value += "B=" + qb + ' ';
   if ( qs ) form.output.value += "S=" + qs + ' ';
   
   form.output.value += "\n";
*/
   
                     + pp( 'Code', 11 ) 
                     + pp( 'Name', 47 ) 
                     + pp( 'Damage and Hits',    28 ) 
                     + pp( 'Mass',  5 ) 
                     + pp( 'R',     1 ) 
                     + pp( 'Bu',    2 ) 
                     + pp( 'Cost', -8 ) 
                     + "\n"
                     + dashes( 11 )
                     + dashes( 47 )
                     + dashes(  28 )
                     + dashes(  5 )
                     + dashes(  1 )
                     + dashes(  2 )
                     + dashes(  8 )
                     + "\n"
                     + pp( code,   11 ) 
                     + pp( name,   47 ) 
                     + pp( '(' + da + ') ' + hits,  28 ) 
                     + pp( kg,      5 ) 
                     + pp( rng,     1 ) 
                     + pp( qb,      2 ) 
                     + pp( cr,     -8 ) 
                     + "\n\n"
                     + "Code  : " + code + "\n"
                     + "Name  : " + name + "\n"
                     + "Range : " + rng  + "\n"
                     + "Mass  : " + kg   + " kg\n"
                     + "Burden: " + qb   + "\n"
                     + "Damage: (" + da + 'D) ' + hits + "\n"
                     + "Cost  : " + displaycost + "\n"
                     + "\n"
   
}


function addHits( myhash, h, d, d_name, carry )
{  
   if ( d == 0 ) return carry;
   if ( h == '*' ) return d + carry;
	 //alert( "h = " + h + ", d = " + d + ", d_name = " + d_name + ", carry = " + carry );
	 var prefix = d_name.substring( 5, 0 );
	 
	 if ( prefix == 'Disru' ) h = 'Disrupt';
	 
   if ( h == 'Bullet' && ( prefix == 'Laser' || prefix == 'Plasm' || prefix == 'Fusio' ) ) 
      return d + carry;
   
   if ( myhash[h] ) myhash[h] += d + carry;
   else myhash[h] = d + carry;
   return 0;
}

function printHits( myhash )
{
	var out = '';
	for (var n in myhash)
	{
	   out += n + '-' + myhash[n] + ' ';
	}
	return out;
}

function lo_printOptions( array )
{
   for ( var i in array )
   {
   	  var e = array[i];
      document.writeln( '<option value="' + e.co + '">' + e.na + '</option>' );
   }
}

function lo_printSpecificOptions( array )
{
   for ( var i in array )
   {
      var e = array[i];
      document.writeln( '<option value="' + e.co + '">' + e.cl + ': ' + e.na + '</option>' );
   }
}

var lo_melee = new Array
(
   new gElem(      'Cudgel',      'G',           'Gun', 6, 4,   9,-1,     '*', 2,     '*', 0, 2,'hi',  5000),
   new gElem(       'Blade'     'Ga',       'Gatling', 7, 4,  40,-2,     '*', 3,     '*', 0, 2,'hi',  8000),
   new gElem(         'Gun',      'C',        'Cannon', 6, 6, 200,-4,     '*', 4,     '*', 0, 2,'hi', 10000),
   new gElem(         'Gun',     'aC',    'Autocannon', 8, 6, 300,-4,     '*', 5,     '*', 0, 3,'hi', 30000),
   new gElem(       'Rifle',      'R',         'Rifle', 5, 5,   4, 0,'Bullet', 2,     '*', 0, 2,'x',   500),
   new gElem(       'Rifle',      'C',       'Carbine', 5, 4,   3, 1,'Bullet', 1,     '*', 0, 1,'x',   400),
   new gElem(      'Pistol',      'P',        'Pistol', 5, 2, 1.1, 0,'Bullet', 1,     '*', 0, 1,'x',   150),
   new gElem(      'Pistol',      'R',      'Revolver', 4, 2,1.25, 0,'Bullet', 1,     '*', 0, 1,'x',   100),
   new gElem(     'Shotgun',      'S',       'Shotgun', 4, 2,   4, 0,'Bullet', 2,     '*', 0, 2,'x',   300),
   new gElem(  'Machinegun',     'Mg',    'Machinegun', 6, 5,   8,-1,'Bullet', 4,     '*', 0, 4,'x',  3000),
   new gElem(  'Designator',     'Pj',     'Projector', 9, 0,   1, 0,     '*', 1,     '*', 0, 1,'x',   300),
   new gElem(  'Designator',      'D',    'Designator', 7, 5,  10,-1,     '*', 1,     '*', 0, 1,'x',  2000),
   new gElem(    'Launcher',      'L',      'Launcher', 6, 3,  10,-1,     '*', 1,     '*', 0, 0,'x',  1000),
   new gElem(    'Launcher',     'mL',   'MultiLaunch', 8, 5,   8,-1,     '*', 1,     '*', 0, 0,'x',  3000)
);

var lo_descriptors = new Array
(
   new gElem(         'Gun',     'aF',    'Anti-Flyer', 4, 6, 6.0, 0,  'Frag', 1, 'Blast', 3, 4,'x',     3),
   new gElem(         'Gun',     'aT',      'AntiTank', 0, 5, 8.0, 0,   'Pen', 3, 'Blast', 3, 6,'x',     2),
   new gElem(         'Gun',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',   1.5),
   new gElem(         'Gun',      'F',        'Fusion', 8, 4, 2.3, 0,   'Pen', 4,  'Burn', 4, 8,'hi',     6),
   new gElem(         'Gun',      'G',         'Gauss', 7, 4, 0.9, 0,'Bullet', 2,     '*', 0, 2,'x',     2),
   new gElem(         'Gun',      'P',        'Plasma', 7, 4, 2.5, 0,   'Pen', 3,  'Burn', 3, 6,'hi',     4),
   new gElem(         'Gun',      'd',    'Disruptor*',10, 4, 1.5, 0,'Disrupt',5,     '*', 0, 0,'x',   150),

   new gElem(       'Rifle',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(       'Rifle',     'Ac',   'Accelerator', 4, 0, 0.6, 0,'Bullet', 2,     '*', 0, 2,'x',     3),
   new gElem(       'Rifle',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',   1.5),
   new gElem(       'Rifle',      'B',        'Battle', 1, 5, 1.0, 1,'Bullet', 1,     '*', 0, 1,'x',   0.8),
   new gElem(       'Rifle',      'C',        'Combat', 2, 3, 0.9, 0,  'Frag', 2,     '*', 0, 2,'x',   1.5),
   new gElem(       'Rifle',      'D',          'Dart', 1, 4, 0.6, 0, 'Tranq', 3,     '*', 0, 3,'x',   0.9),
   new gElem(       'Rifle',      'P',   'Poison_Dart', 1, 4, 1.0, 0,'Poison', 3,     '*', 0, 3,'x',   0.9),
   new gElem(       'Rifle',      'G',         'Gauss', 7, 0, 0.9, 0,'Bullet', 2,     '*', 0, 2,'x',     2),
   new gElem(       'Rifle',      'H',       'Hunting', 0, 3, 0.9,-1,'Bullet', 1,     '*', 0, 1,'x',   1.2),
   new gElem(       'Rifle',      'L',         'Laser', 5, 0, 1.2, 0,  'Burn', 2,   'Pen', 2, 4,'x',     6),
   new gElem(       'Rifle',     'Sp',         'Splat', 2, 4, 1.3, 1,'Bullet', 1,     '*', 0, 1,'x',   2.4),
   new gElem(       'Rifle',      'S',      'Survival', 0, 2, 0.5, 0,'Bullet', 1,     '*', 0, 1,'x',   1.2),

   new gElem(      'Pistol',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(      'Pistol',     'Ac',   'Accelerator', 4, 0, 0.6, 0,'Bullet', 2,     '*', 0, 2,'x',     3),
   new gElem(      'Pistol',      'L',         'Laser', 5, 4, 1.2, 0,  'Burn', 2,   'Pen', 2, 4,'x',     2),
   new gElem(      'Pistol',      'P',       'Plasma*', 12,1, 2.5, 0,   'Pen', 1,  'Burn', 1, 1,'x',    10),
   new gElem(      'Pistol',      'F',       'Fusion*', 13,1, 2.3, 0,   'Pen', 2,  'Burn', 2, 3,'x',    15),

   new gElem(     'Shotgun',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(     'Shotgun',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',     2),
   new gElem(     'Shotgun',      'H',       'Hunting', 0, 3, 0.9, 0,'Bullet', 1,     '*', 0, 1,'x',   1.2),
   new gElem(     'Shotgun',      'd',    'Disruptor*',15, 1,   1, 0,'Disrupt', 0,     '*', 0, 0,'x',    15),

   new gElem(  'Machinegun',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(  'Machinegun',     'aF',    'Anti-Flyer', 4, 6, 6.0, 0,  'Frag', 1, 'Blast', 3, 4,'x',     3),
   new gElem(  'Machinegun',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',   1.5),
   new gElem(  'Machinegun',      'S',           'Sub',-1, 2, 0.3, 0,'Bullet',-1,     '*', 0,-1,'x',   0.9),

   new gElem(  'Designator',      'A',          'Acid', 0, 3, 1.0, 1,  'Acid', 2,     '*', 0, 4,'x',     3),
   new gElem(  'Designator',      'H',          'Fire', 0, 1, 0.9, 0,  'Burn', 3,   'Pen', 3, 6,'x',     2),
   new gElem(  'Designator',      'P',    'Poison_Gas', 0, 2, 1.0, 0,   'Gas', 3,'Poison', 3, 6,'x',     3),
   new gElem(  'Designator',      'S',        'Stench', 3, 2, 0.4, 0,'Stench', 3,     '*', 0, 3,'x',   1.2),
   new gElem(  'Designator',    'Emp',           'EMP', 1, 3, 1.0, 0,   'EMP', 3,     '*', 0, 1,'x',     4),
   new gElem(  'Designator',      'F',         'Flash',-1, 2, 0.5, 0, 'Flash', 3,     '*', 0, 2,'x',   1.5),
   new gElem(  'Designator',      'C',        'Freeze', 1, 3, 1.0, 1,  'Cold', 3,     '*', 0, 2,'x',     3),
   new gElem(  'Designator',      'G',          'Grav', 5, 2, 3.0, 0,  'Grav', 3,     '*', 0, 3,'x',    20),
   new gElem(  'Designator',      'L',         'Laser*','5', 0, 1.2, 0,  'Burn', 3,   'Pen', 3, 6,'x',     6),
   new gElem(  'Designator',      'M',           'Mag', 4, 1, 2.0, 0,   'EMP', 3,   'Mag', 3, 6,'x',    15),
   new gElem(  'Designator',    'Psi',       'Psi_Amp', 4, 2, 1.0, 0,   'Psi', 3,     '*', 0, 3,'x',     9),
   new gElem(  'Designator',      'R',           'Rad', 1, 4, 1.0, 2,   'Rad', 3,     '*', 0, 3,'x',     8),
   new gElem(  'Designator',     'Sh',         'Shock', 0, 2, 0.5, 0,  'Elec', 3,  'Pain', 3, 6,'x',     2),
   new gElem(  'Designator',      'S',         'Sonic', 3, 2, 0.6, 0, 'Sound', 3,  'Bang', 3, 6,'x',   1.1),
 
   new gElem(    'Launcher',     'aF',    'AF_Missile', 4, 7, 4.0, 0,  'Frag', 2, 'Blast', 3, 5,'x',     3),
   new gElem(    'Launcher',     'aT',    'AT_Missile', 3, 4, 1.0, 1,  'Frag', 2,   'Pen', 3, 5,'x',     2),
   new gElem(    'Launcher',     'Gr',       'Grenade', 1, 4, 0.8, 0,  'Frag', 2, 'Blast', 2, 4,'x',     1),
   new gElem(    'Launcher',      'M',       'Missile', 1, 6, 2.2, 0,  'Frag', 2,   'Pen', 2, 4,'x',     5),
   new gElem(    'Launcher',    'RAM',   'RAM_Grenade', 2, 6, 1.0, 0,  'Frag', 2, 'Blast', 2, 4,'x',     3),
   new gElem(    'Launcher',      'R',        'Rocket',-1, 5, 3.0, 0,  'Frag', 2,   'Pen', 2, 4,'x',     1)
);
 
var lo_burdens = new Array
(
   new gElem(      'Burden',   'None',       '(blank)', 0, 0, 1.0, 0,    '*',      0,     '*', 0, 0,'x',   1.0),
   new gElem(      'Burden',     'aD',    'Anti-Desig',3, 1, 3.0, 3,    '*',      1,     '*', 0, 1,'x',   3.0),
   new gElem(      'Burden',      'B',          'Body', 2,'*1', 0.5,-4,  '*',     -1,     '*', 0,-1,'x',   3.0),
   new gElem(      'Burden',      'D',    'Disposable', 3, 0, 0.9,-1,    '*',      0,     '*', 0, 0,'x',   0.5),
   new gElem(      'Burden',      'H',         'Heavy', 0, 1, 1.3, 3,    '*',      1,     '*', 0, 1,'x',   2.0),
   new gElem(      'Burden',     'Lt',         'Light', 0,-1, 0.7,-1,    '*',     -1,     '*', 0,-1,'x',   1.1),
   new gElem(      'Burden',      'M',        'Magnum', 1, 1, 1.1, 1,    '*',      1,     '*', 0, 1,'x',   1.1),
   new gElem(      'Burden',      'M',        'Medium', 0, 0, 1.0, 0,    '*',      0,     '*', 0, 0,'x',   1.0),
   new gElem(      'Burden',      'R',    'Recoilless', 1,-1, 1.2, 0,    '*',      1,     '*', 0, 1,'x',   3.0),
   new gElem(      'Burden',     'Sn',          'Snub', 1,'*2',0.7,-3,   '*',      1,     '*', 0, 1,'x',   1.5),
   new gElem(      'Burden',     'Vh',        'Vheavy', 0,'*5',4.0,4,    '*',      5,     '*', 0, 5,'hi',   5.0),
   new gElem(      'Burden',     'Vl',        'Vlight', 1,-2, 0.6,-2,    '*',     -1,     '*', 0,-1,'x',   2.0),
   new gElem(      'Burden',    'Vrf',           'VRF', 2, 0,  14, 5,    '*',      1,     '*', 0, 1,'hi',   9.0)
);

var lo_stages = new Array
( 
   new gElem(        'Stage',   'None',       '(blank)', 0, 0, 1.0, 0,    '*',     0,     '*', 0, 0,'x',   1.0),
   new gElem(        'Stage',      'A',      'Advanced', 3, 0, 0.8,-2,    '*',     2,     '*', 0, 2,'x',   2.0),
   new gElem(        'Stage',    'Alt',     'Alternate', 1, 1, 1.1, 0,    '*',     2,     '*', 0, 2,'x',   1.1),
   new gElem(        'Stage',      'B',         'Basic', 0, 0, 1.3, 0,    '*',     0,     '*', 0, 0,'x',   0.7),
   new gElem(        'Stage',      'E',         'Early',-1,-1, 1.7, 1,    '*',     0,     '*', 0, 0,'x',   1.2),
   new gElem(        'Stage',      'X',      'Experim.',-2,-1,   2, 3,    '*',     0,     '*', 0, 0,'x',   4.0),
   new gElem(        'Stage',     'Im',      'Improved', 1, 0,   1, 0,    '*',     1,     '*', 0, 1,'x',   1.1),
   new gElem(        'Stage',    'Mod',      'Modified', 2, 0, 0.9, 0,    '*',     1,     '*', 0, 1,'x',   1.2),
   new gElem(        'Stage',     'Ob',      'Obsolete', 4, 0, 0.7,-2,    '*',     1,     '*', 0, 1,'x',   0.5),
   new gElem(        'Stage',     'Pr',     'Precision', 6, 3,   4, 2,    '*',     0,     '*', 0, 0,'x',   5.0),
   new gElem(        'Stage',      'P',     'Prototype',-1,-1, 1.9, 2,    '*',     0,     '*', 0, 0,'x',   3.0),
   new gElem(        'Stage',      'R',        'Remote', 1, 0,   1, 0,    '*',     0,     '*', 0, 0,'x',   7.0),
   new gElem(        'Stage',     'Sn',        'Sniper', 1, 1, 1.1, 1,    '*',     0,     '*', 0, 0,'X',   2.0),
   new gElem(        'Stage',     'St',      'Standard', 1, 0,   1, 0,    '*',     1,     '*', 0, 1,'x',   1.0),
   new gElem(        'Stage',      'T',        'Target', 0, 0, 1.1, 1,    '*',     0,     '*', 0, 0,'x',   1.5)
);
