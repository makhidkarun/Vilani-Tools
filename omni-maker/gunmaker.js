function gElem( cl, co, na, tl, rng, mass, b, h1, d1, h2, d2, d, x, cr )
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

function prettifyName( name_in )
{
   return name_in.replace( /None|.blank./g, '' )
                 .replace( /^\s+/g, '' )
                 .replace( /\s\s+/g, ' ' );
}

function g_recalc( form )
{
   var d = g_descriptors[ form.descriptor.selectedIndex ];
   var g = g_guns[ form.gun.selectedIndex ];
   var z = g_sizes[ form.size.selectedIndex ];
   var b = g_burdens[ form.burden.selectedIndex ];
   var s = g_stages[ form.stage.selectedIndex ];

   var tl   = (parseInt(s.tl) + parseInt(b.tl) + parseInt(z.tl) + parseInt(d.tl) + parseInt(g.tl)) + '';

   var gname = g.na;

   //if ( tl < 4 ) g.na = g.na.replace( /Shotgun/i, 'Musket*' );
   if ( tl == 2 ) 
   {
      gname = gname.replace( /Revolver/i, 'Wheellock Pistol*' );
      gname = gname.replace( /Shotgun/i,  'Matchlock Musket*'  );
   }
   else if ( tl == 3 )
   {
      gname = gname.replace( /Shotgun/i,  'Flintlock Musket*'  );
      gname = gname.replace( /Rifle/i,    'Flintlock Rifle*'   );
      gname = gname.replace( /Pistol/i,   'Flintlock Pistol*'  );
   }
   else if ( tl == 4 )
   {
      gname = gname.replace( /Rifle/i,    'Percussion Rifle*'   );
      gname = gname.replace( /Pistol/i,   'Percussion Pistol*'  );
   }

   var desc = d.co;
   if ( d.na == '(blank)' ) desc = '';

//   if ( d.h1 == 'Disrupt' && name == 'Shotgun' ) 
//      name = '';
   
   var code = s.co + b.co + z.co + desc + g.co;
   var name = s.na + ' ' + b.na + ' ' + z.na + ' ' + d.na;
   var shortname = z.na + ' ' + d.na;
   
   /*if ( z.na != 'Ship*' )*/ 
   name += ' ' + gname;
   shortname += ' ' + gname;

   var taxonomical_name = gname + ' ' + d.na + ' ' + z.na + ' ' + b.na + ' ' + s.na;
   
   code = code.replace( /None|.blank./g, '' );
   name = prettifyName( name );
   shortname = prettifyName(shortname); 
   taxonomical_name = prettifyName( taxonomical_name );
                        
   //
   //  Calculate range.
   //
   var rng  = g.rng;
   if ( d.rng != 0 ) rng = d.rng;        // --- handle descriptor range override

   // --- handle burden range override 
   if ( b.rng != 0 )
   {
      var brng = b.rng.toString();         
      if ( brng.includes( '=', '' ) )  // was contains()
         rng = parseInt( brng.replace( '=', '' ) );
	  else
         rng += parseInt( b.rng );
   }

   rng += s.rng;
   if ( z.co == 's' ) rng += z.rng + d.rng;
   else if ( rng < 6 ) rng += z.rng;

   if ( rng < 0 ) rng = 0; // sanity
   
   rng += '';
   //
   //  Range calculation done.
   //

   //
   //  Map to Mongoose range.
   //
   var mongoose_range = 'Short';
   if ( rng == 2 ) mongoose_range = 'Medium';
   if ( rng == 3 ) mongoose_range = 'Long';
   if ( rng == 4 ) mongoose_range = 'VLong';
   if ( rng == 5 ) mongoose_range = 'Distant';
   if ( rng == 6 ) mongoose_range = 'to 25 km';
   if ( rng == 7 ) mongoose_range = 'to 250 km';
   if ( rng == 8 ) mongoose_range = 'to 2,500 km';
   if ( rng == 9 ) mongoose_range = 'to 25,000 km';
   if ( rng >  9 ) mongoose_range = 'over 50,000 km';
   
   var kg   = parseInt(g.kg  * d.kg * z.kg * b.kg  * s.kg * 100)/100 + '';

   if ( kg == 0 ) kg = '< 1';
   	
   var qb   = (g.b   + d.b   + b.b   + s.b  + z.b) + '';
   
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
   carry = addHits( v2hits, z.h1, z.d1, d.na, carry );
   carry = addHits( v2hits, z.h2, z.d2, d.na, carry );
   	
   var hits = printHits( v2hits, z.co ).replace( /\*-/g, '+' );
   var da   = countHits( v2hits ); // (g.d   + d.d  + b.d   + s.d  + z.d);
  
   if ( z.co == 'Os' ) da *= 2;
   if ( z.co == 'T'  ) da *= 3;


   /* Mongoose Traveller damage calc */
   
   var mgt_damage = da + 'D';
   
   if ( da > 3 )
   {
      var damage_const = 2.1114; // 2.07
      var translation = parseInt( Math.sqrt( da * 3.5 ) * damage_const ) + 5;
      var whole       = parseInt( translation / 3.5 );
      var mod         = parseInt( translation % 3.5 );

      mgt_damage = whole + 'D';

      //
      // I really don't know the best way to represent Pistol and Carbine damage...
      //
      if ( gname == 'Pistol'  ) mod -= 3;
      if ( gname == 'Carbine' ) mod -= 2;
      if ( mod > 0 ) mgt_damage += '+' + mod;
      if ( mod < 0 ) mgt_damage += mod;
   }
 
   da += '';
   
   var cr   = parseInt(g.cr  * d.cr  * z.cr * b.cr  * s.cr) + '';

   cr = '' + cr;
   
   cr = cr.replace( /(\d)(\d\d\d)$/, "$1,$2" );
   cr = cr.replace( /(\d)(\d\d\d)$/, "$1,$2" );

   var displaycost = cr;

   if ( cr > 100    ) cr = parseInt( cr / 10     ) * 10;
   if ( cr > 1000   ) cr = parseInt( cr / 100    ) * 100;
   if ( cr > 10000  ) cr = parseInt( cr / 1000   ) * 1000;
   if ( cr > 100000 ) cr = parseInt( cr / 10000  ) * 10000;
   
   if ( cr > 999999 )
      cr = 'MCr ' + parseInt( cr / 10000 ) / 100;
   else
   if ( cr > 5000 )
      cr = 'KCr ' + parseInt( cr / 100 ) / 10;      
   else
      displaycost = 'Cr ' + cr;
   
//   displaycost = cr;
 
   if ( kg > 100   ) kg = parseInt( kg / 10   ) * 10;
   if ( kg > 1000  ) kg = parseInt( kg / 100  ) * 100;
   if ( kg > 10000 ) kg = parseInt( kg / 1000 ) * 1000;
   
   if ( kg < 40 && (d.recoil == 'hi' || g.recoil == 'hi' || b.recoil == 'hi' ) )
   {
   	  code += 'MP';
   	  if ( z.na != 'Ship*' ) 
   	  {
   	     name += ' Man Portable';
   	     shortname += ' Man Portable';
   	  }
   }
   else if ( kg >= 20 && kg < 200 )
   {
      code += 'C';
      if ( z.na != 'Ship*' ) 
      {
         name += ' Crewed';
         shortname += ' Crewed';
      }
   }
   else if ( kg >= 200 && kg < 500 )
   {
   	  code += 'T';
   	  if ( z.na != 'Ship*' )
   	  {
   	  	 name += ' Turret';
   	  }
   }
   else if ( kg >= 500 && kg < 1000 )
   {
   	  code += 'V';
   	  if ( z.na != 'Ship*' ) name += ' Vehicle Mount';
   }
   else if ( kg >= 1000 )
   {
   	  code += 'F';
   	  
   	  if ( z.na != 'Ship*' ) name += ' Fixed';
   	  
   	  if ( kg > 1500 )
   	  {
   	  	 //alert( kg );
   	     kg = parseInt( kg/100 ) / 10;
   	     kg += 't';
   	  }
   }
   
   code += '-' + tl;
   name += '-' + tl;
   taxonomical_name += '-' + tl + ".yml.txt";

   name = name.replace( /Disintegrator Projector/, 'Disintegrator Wand' );
   name = name.replace( /Relativity Projector/, 'Relativity Wand' );
/*
   if ( code == 'PLtXS-2' ) name = 'Arquebus';
   else if ( code == 'LtXM-2' ) name = 'Wheellock pistol';
   if ( code == 'XLtM-2' )     name = 'Wheellock pistol';
   else if ( code == 'EM-3' )  name = 'Flintlock smoothbore pistol';
   else if ( code == 'ER-3' )  name = 'Flintlock rifled pistol';
   else if ( code == 'XHS-2' )  name = 'Matchlock musket'; // heavier than Arquebus
   else if ( code == 'XLtS-2' ) name = 'Arquebus';
   else if ( code == 'ES-3' )  name = 'Flintlock musket';
   else if ( code == 'XR-3' )  name = 'Flintlock rifle';
   else if ( code == 'XVhSMP-2' ) name = 'Hand cannon';
*/

   var mass = kg + " kg";
   mass = mass.replace( /t kg/, 't' );
   
   // equipment list format, T5
   form.output.value = name + ", " + mass + ", R=" + rng + ", B=" + qb + ", " + hits + ", " + displaycost;
                     + "\n" //   TL" + tl + ", B=" + qb + ", " + hits
					 + "\n\n"
					 ;
   					 
   // expanded format
   form.output.value += "\n\n"
                     + "Taxonomy: " + taxonomical_name + "\n"
                     + "Code  : " + code + "\n"
                     + "Name  : " + name + "\n"
                     + "Range : " + rng  + "\n"
                     + "Damage: (" + da + 'D) ' + hits + "\n"
					 + "MgT R : " + mongoose_range + "\n"
					 + "MgT D : " + mgt_damage + "\n"
                     + "Mass  : " + mass + "\n"
                     + "Burden: " + qb   + "\n"
                     + "Cost  : " + displaycost + "\n"
                     + "--\n\n";
					 
   // wide single-line format
   if ( tl < 5 )
   {
      form.output.value += "\n"
                     + pp( 'Code', 7 ) 
                     + pp( 'Name', 27 ) 
                     + pp( 'Damage', 13 ) 
                     + pp( 'Mass',  5 ) 
                     + pp( 'R',     1 ) 
                     + pp( 'Bu',    2 ) 
                     + pp( 'Cost', -6 ) 
                     + "\n"
                     + dashes( 7 )
                     + dashes( 27 )
                     + dashes( 13 )
                     + dashes(  5 )
                     + dashes(  1 )
                     + dashes(  2 )
                     + dashes(  6 )
                     + "\n"
                     + pp( code,   7 ) 
                     + pp( name,   27 ) 
                     + pp( '(' + da + ') ' + hits,  13 ) 
                     + pp( kg,      5 ) 
                     + pp( rng,     1 ) 
                     + pp( qb,      2 ) 
                     + pp( cr,     -6 ) 
                     + "\n";
   }
   else
   {
   	  form.output.value += ''                 
                     + pp( 'Code', 11 ) 
                     + pp( 'Name', 44 ) 
                     + pp( 'Damage and Hits',    28 ) 
                     + pp( 'Mass',  5 ) 
                     + pp( 'R',     1 ) 
                     + pp( 'Bu',    2 ) 
                     + pp( 'Cost', -8 ) 
                     + "\n"
                     + dashes( 11 )
                     + dashes( 44 )
                     + dashes(  28 )
                     + dashes(  5 )
                     + dashes(  1 )
                     + dashes(  2 )
                     + dashes(  8 )
                     + "\n"
                     + pp( code,   11 ) 
                     + pp( name,   44 ) 
                     + pp( '(' + da + ') ' + hits,  28 ) 
                     + pp( kg,      5 ) 
                     + pp( rng,     1 ) 
                     + pp( qb,      2 ) 
                     + pp( cr,     -8 ) 
                     + "\n";
   }
   
   // short single-line format
   form.output.value += "\n"
                     + pp( 'Code', 11 ) 
                     + pp( 'Name', 25 ) 
                     + pp( 'Damage and Hits',    20 ) 
                     + pp( 'Mass',  5 ) 
                     + pp( 'R',     1 ) 
                     + pp( 'Bu',    2 ) 
                     + pp( 'Cost', -8 ) 
                     + "\n"
                     + dashes( 11 )
                     + dashes( 25 )
                     + dashes(  20 )
                     + dashes(  5 )
                     + dashes(  1 )
                     + dashes(  2 )
                     + dashes(  8 )
                     + "\n"
                     + pp( code,   11 ) 
                     + pp( shortname,   25 ) 
                     + pp( '(' + da + ') ' + hits,  20 ) 
                     + pp( kg,      5 ) 
                     + pp( rng,     1 ) 
                     + pp( qb,      2 ) 
                     + pp( cr,     -8 ) 
                     + "\n\n";

   // mongoose list format
   form.output.value += "[MgT]\n" + name + ", " + mass + ", R=" + mongoose_range + ", B=" + qb + ", " + mgt_damage + ", " + displaycost
//                     + "\n   TL" + tl + ", B=" + qb + ", Dmg=" + mgt_damage
					 + "\n"
					 ;
					 
}


function addHits( myhash, h, d, d_name, carry )
{  
   if ( d == 0 ) return carry;
   if ( h == '*' ) return d + carry;
	 //alert( "h = " + h + ", d = " + d + ", d_name = " + d_name + ", carry = " + carry );
	 var prefix = d_name.substring( 5, 0 );
	 
	 if ( prefix == 'Disru' ) h = 'Disrupt';
	 
	 if ( h == 'Penx' )
	 {
	 	  if ( myhash[ 'Pen' ] )
	 	   	 myhash[ 'Pen' ] *= d;
	 	  else carry += d;
	 	  	
	    return carry;
	 }
	 
   if ( h == 'Bullet' && ( prefix == 'Laser' || prefix == 'Plasm' || prefix == 'Fusio' || prefix == 'Disru' || prefix == 'Relat' || d_name == 'Stun' || prefix == 'Poiso') ) 
      return d + carry;
   
   if ( myhash[h] ) myhash[h] += d + carry;
   else myhash[h] = d + carry;
   return 0;
}

function countHits( myhash )
{
	var out = 0;
	for (var n in myhash)
	   out += myhash[n];
	return out;
}

function printHits( myhash, size_code )
{
	var out = '';
	for (var n in myhash)
	{
		 var v = myhash[n];
		 if ( size_code == 'Os' ) v *= 2;
		 if ( size_code == 'T'  ) v *= 3;
		 
	   out += n + '-' + v + ' ';
	}
	return out;
}

function g_printOptions( array )
{
   for ( var i in array )
   {
   	  var e = array[i];
      document.writeln( '<option value="' + e.co + '">' + e.na + '</option>' );
   }
}

function g_printSpecificOptions( array )
{
   for ( var i in array )
   {
      var e = array[i];
      document.writeln( '<option value="' + e.co + '">' + e.cl + ': ' + e.na + '</option>' );
   }
}

var g_guns = new Array
(           //     category,     code,           name, tl, R,  Kg, B, h1,     d1,     h2, d2, D, x,    cr )
   new gElem(         'Gun',      'G',           'Gun', 6, 4,   9,-1,     '*', 2,     '*', 0, 2,'hi',  5000),
   new gElem(         'Gun',     'Ga',       'Gatling', 7, 4,  40,-2,     '*', 3,     '*', 0, 2,'hi',  8000),
   new gElem(         'Gun',      'C',        'Cannon', 6, 6, 200,-4,     '*', 4,     '*', 0, 2,'hi',  10000),
   new gElem(         'Gun',     'aC',    'Autocannon', 8, 6, 300,-4,     '*', 5,     '*', 0, 3,'hi',  30000),
   new gElem(       'Rifle',      'R',         'Rifle', 5, 5,   4, 0,'Bullet', 2,     '*', 0, 2,'x',   500),
   new gElem(       'Rifle',      'C',       'Carbine', 5, 4,   3, 1,'Bullet', 1,     '*', 0, 1,'x',   400),
   new gElem(      'Pistol',      'P',        'Pistol', 5, 2, 1.1, 0,'Bullet', 1,     '*', 0, 1,'x',   150),
   new gElem(      'Pistol',      'R',      'Revolver', 4, 2,1.25, 0,'Bullet', 1,     '*', 0, 1,'x',   100),
   new gElem(    'Matchlock',     'M',    'Matchlock*', 2, 1,   1, 1,'Bullet', 1,     '*', 0, 1,'x',   100),
   new gElem(    'Flintlock',     'F',    'Flintlock*', 3, 1,   1, 1,'Bullet', 1,     '*', 0, 1,'x',   100),
   new gElem(    'Percussion',    'P',   'Percussion*', 4, 1,   1, 1,'Bullet', 1,     '*', 0, 1,'x',   100),
//   new gElem(      'Pistol',      'M',     'Miquelet*', 3, 1,   2, 0,'Bullet', 1,     '*', 0, 1,'x',   500),
   new gElem(     'Shotgun',      'S',       'Shotgun', 4, 2,   4, 0,'Bullet', 2,     '*', 0, 2,'x',   300),
   new gElem(  'Machinegun',     'Mg',    'Machinegun', 6, 5,   8,-1,'Bullet', 4,     '*', 0, 4,'x',  3000),
   new gElem(  'Designator',     'Pj',     'Projector', 9, 0,   1, 0,     '*', 1,     '*', 0, 1,'x',   300),
   new gElem(  'Designator',      'D',    'Designator', 7, 5,  10,-1,     '*', 1,     '*', 0, 1,'x',  2000),
   new gElem(    'Launcher',      'L',      'Launcher', 6, 3,  10,-1,     '*', 1,     '*', 0, 0,'x',  1000), 
   new gElem(    'Launcher',     'mL',   'MultiLaunch', 8, 5,   8,-1,     '*', 1,     '*', 0, 0,'x',  3000), 
   new gElem(    'Launcher',     'PL',   '*Plasma Launcher', 16, 5, 8, 0,  'Burn', 2,     'Pen', 1, 3,'x',  2000),
   new gElem(    'Launcher',     'uL',   '*Meson Launcher',  17, 5, 8, 0,  'Pen', 2,     '*', 0, 2,'x',  2000)
//   new gElem(    'Launcher',      'L',      'Launcher', 6, 3,  10,-1,     '*', 2,     '*', 0, 0,'x',  1000), // modified
//   new gElem(    'Launcher',     'mL',   'MultiLaunch', 8, 5,   8,-1,     '*', 3,     '*', 0, 0,'x',  3000)  // modified
);

//                  cl,           co,           na,    tl, rng, mass, b, h1, d1, h2, d2, d, x,   cr 
var g_descriptors = new Array
(
//   new gElem(      'Archaic',     't',       'Crude*', -2, -2,  1.0,  4, '*', 0, '*', 0, 0,'x',  0.2),
//   new gElem(      'Archaic',     'm',   'Matchlock*', -2, -2,  1.0,  3, '*', 0, '*', 0, 0,'x',  0.4),
//   new gElem(      'Archaic',     'f',   'Flintlock*', -1, -2,  1.0,  2, '*', 0, '*', 0, 0,'x',  0.6),
//   new gElem(      'Archaic',     'p',  'Percussion*',  0, -2,  1.0,  1, '*', 0, '*', 0, 0,'x',  0.8),

   new gElem(         'Gun',     'aF',    'Anti-Flyer', 4, 6, 6.0, 0,  'Frag', 1, 'Blast', 3, 4,'x',     3),
   new gElem(         'Gun',     'aT',      'AntiTank', 0, 5, 8.0, 0,   'Pen', 3, 'Blast', 3, 6,'x',     2),
   new gElem(         'Gun',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',   1.5),
   new gElem(         'Gun',      'F',        'Fusion', 7, 4, 2.3, 0,   'Pen', 4, 'Burn',  4, 8,'hi',    6),
   new gElem(         'Gun',      'G',         'Gauss', 7, 4, 0.9, 0,'Bullet', 3, '*',     0, 3,'x',     2),  
   new gElem(         'Gun',      'G',     'Gauss(CT)', 3, 4, 0.9, 0,'Bullet', 3, '*',     0, 3,'x',     2),  
   new gElem(         'Gun',      'P',        'Plasma', 5, 4, 2.5, 0,   'Pen', 3, 'Burn',  3, 6,'hi',    2),
//   new gElem(         'Gun',      'U',         'Meson', 8, 2, 9.0, 1, 'Blast', 3, 'Rad',   3, 6,'hi',    5),

   new gElem(       'Rifle',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(       'Rifle',     'Ac',   'Accelerator', 4, 0, 0.6, 0,'Bullet', 2,     '*', 0, 2,'x',     3),
   new gElem(       'Rifle',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',   1.5),
   new gElem(       'Rifle',      'B',        'Battle', 1, 5, 1.0, 1,'Bullet', 1,     '*', 0, 1,'x',   0.8),
   new gElem(       'Rifle',      'C',        'Combat', 2, 3, 0.9, 0,  'Frag', 2,     '*', 0, 2,'x',   1.5),
   new gElem(       'Rifle',      'D',          'Dart', 1, 4, 0.6, 0, 'Tranq', 3,     '*', 0, 3,'x',   0.9),
   new gElem(       'Rifle',      'P',   'Poison_Dart', 1, 4, 1.0, 0,'Poison', 3,     '*', 0, 3,'x',   0.9),
   new gElem(       'Rifle',      'G',         'Gauss', 7, 0, 0.9, 0,'Bullet', 3,     '*', 0, 3,'x',     2),
   new gElem(       'Rifle',      'H',       'Hunting', 0, 3, 0.9,-1,'Bullet', 1,     '*', 0, 1,'x',   1.2),
   new gElem(       'Rifle',      'L',         'Laser', 5, 0, 1.2, 0, 'Burn',  2,   'Pen', 2, 4,'x',     6), // old: swap Pen/Burn
   new gElem(       'Rifle',     'Sp',         'Splat', 2, 4, 1.3, 1,'Bullet', 1,     '*', 0, 1,'x',   2.4),
   new gElem(       'Rifle',      'S',      'Survival', 0, 2, 0.5, 0,'Bullet', 1,     '*', 0, 1,'x',   1.2),
   new gElem(       'Rifle',      'F',        '*Fusion', 11,4, 1.2, 0,   'Pen', 2,  'Burn', 4, 6,'x',    50),
   new gElem(       'Rifle',    'Psi',        '*Neural', 13,2, 1.0, 0,   'Psi', 3,     '*', 0, 3,'x',     9),
   new gElem(       'Rifle',      'X', '*Disintegrator', 14,4, 1.0, 1, 'Disrupt', 3,     '*', 0, 3,'x',    10),
   new gElem(       'Rifle',     'Rl',    '*Relativity', 15,4, 1.1, 1, 'Relat', 2,     '*', 0, 2,'x',    10),

   new gElem(      'Pistol',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(      'Pistol',     'Ac',   'Accelerator', 4, 0, 0.6, 0,'Bullet', 2,     '*', 0, 2,'x',     3),
   new gElem(      'Pistol',      'G',        '*Gauss', 7, 0, 0.6, 0,'Bullet', 2,     '*', 0, 3, 'x',    4),
   new gElem(      'Pistol',      'L',         'Laser', 5, 4, 1.2, 0,  'Burn', 2,   'Pen', 2, 4,'x',     2),
   new gElem(      'Pistol',      'M',       'Machine', 0, 3, 1.2, 0,'Bullet', 2,     '*', 0, 0,'x',    1.5),  
   new gElem(      'Pistol',     'St',          'Stun', 6,-1, 0.5, 0,  'Stun', 2,       '*', 0, 2,'x',    1),
   new gElem(      'Pistol',      'P',        '*Plasma', 12,3, 1.2, 1,   'Pen', 3,  'Burn', 4, 7,'x',    20),  
   new gElem(      'Pistol',    'Psi',        '*Neural', 13,2, 1.0, 0,   'Psi', 3,     '*', 0, 3,'x',     9),
   new gElem(      'Pistol',      'X', '*Disintegrator', 14,3, 1.0, 1, 'Disrupt', 3,     '*', 0, 3,'x',    10), 
   new gElem(      'Pistol',     'Rl',    '*Relativity', 15,3, 1.1, 1, 'Relat', 2,     '*', 0, 2,'x',    10),
   
   new gElem(     'Shotgun',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(     'Shotgun',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',     2),
   new gElem(     'Shotgun',      'H',       'Hunting', 0, 3, 0.9, 0,'Bullet', 1,     '*', 0, 1,'x',   1.2),

   new gElem(  'Machinegun',  'Basic',       '(blank)', 0, 0, 1.0, 0,     '*', 0,     '*', 0, 0,'x',     1),
   new gElem(  'Machinegun',     'aF',    'Anti-Flyer', 4, 6, 6.0, 0,  'Frag', 1, 'Blast', 3, 4,'x',     3),
   new gElem(  'Machinegun',      'A',       'Assault', 2, 4, 0.8, 0,  'Bang', 1, 'Blast', 2, 3,'x',   1.5),
   new gElem(  'Machinegun',      'S',           'Sub',-1, 2, 0.3, 0,'Bullet',-1,     '*', 0,-1,'x',   0.9),

   new gElem(  'Designator',      'A',          'Acid', 0, 3, 1.0, 1,  'Acid', 2,   'Pen', 2, 4,'x',     3),
   new gElem(  'Designator',      'H',          'Fire', 0, 1, 0.9, 0,  'Burn', 3,   'Pen', 3, 6,'x',     2),
   new gElem(  'Designator',      'P',    'Poison_Gas', 0, 2, 1.0, 0,   'Gas', 3,'Poison', 3, 6,'x',     3),
   new gElem(  'Designator',      'S',        'Stench', 3, 2, 0.4, 0,'Stench', 3,     '*', 0, 3,'x',   1.2),
   
   new gElem(  'Designator',    'Emp',           'EMP', 1, 3, 1.0, 0,   'EMP', 3,     '*', 0, 3,'x',     4),
   new gElem(  'Designator',      'F',         'Flash',-1, 2, 0.5, 0, 'Flash', 3,     '*', 0, 3,'x',   1.5),
   new gElem(  'Designator',      'C',        'Freeze', 1, 3, 1.0, 1,  'Cold', 3,     '*', 0, 3,'x',     3),
   new gElem(  'Designator',      'G',          'Grav', 5, 2, 3.0, 0,  'Grav', 3,     '*', 0, 3,'x',    20),
   new gElem(  'Designator',      'L',         'Laser','5',0, 1.2, 0,  'Burn', 3,   'Pen', 3, 6,'x',     6),
   new gElem(  'Designator',      'M',           'Mag', 4, 1, 2.0, 0,   'EMP', 3,   'Mag', 3, 6,'x',    15),
   new gElem(  'Designator',    'Psi',       'Psi_Amp', 4, 2, 1.0, 0,   'Psi', 3,     '*', 0, 3,'x',     9),
   new gElem(  'Designator',      'R',           'Rad', 1, 4, 1.0, 2,   'Rad', 3,     '*', 0, 3,'x',     8),
   new gElem(  'Designator',     'Sh',         'Shock', 0, 2, 0.5, 0,  'Elec', 3,  'Pain', 3, 6,'x',     2),
   new gElem(  'Designator',      'S',         'Sonic', 3, 2, 0.6, 0, 'Sound', 3,  'Bang', 3, 6,'x',   1.1),

   new gElem(  'Designator',      'X', '*Disintegrator', 11,4, 1.0, 1, 'Disrupt', 2,     '*', 0, 2,'x',    10),
   new gElem(  'Designator',     'Rl',    '*Relativity', 12,4, 1.1, 1, 'Relat',   2,     '*', 0, 2,'x',    10),   
 
   new gElem(    'Launcher',     'aF',    'AF_Missile', 4, 7, 4.0, 0,  'Frag', 2, 'Blast', 3, 5,'x',     3), 
   new gElem(    'Launcher',     'aT',    'AT_Missile', 3, 4, 1.0, 1,  'Frag', 2,   'Pen', 3, 5,'x',     2),
   new gElem(    'Launcher',     'Gr',       'Grenade', 1, 4, 0.8, 0,  'Frag', 2, 'Blast', 2, 4,'x',     1), 
   new gElem(    'Launcher',      'M',       'Missile', 1, 6, 2.2, 0,  'Frag', 2,   'Pen', 2, 4,'x',     5),
   new gElem(    'Launcher',    'RAM',   'RAM_Grenade', 2, 6, 1.0, 0,  'Frag', 2, 'Blast', 2, 4,'x',     3), 
   new gElem(    'Launcher',      'R',        'Rocket',-1, 5, 3.0, 0,  'Frag', 2,   'Pen', 2, 4,'x',     1)
);
 
var g_sizes   = new Array
(
   new gElem(    'Size',       'None',       '(blank)', 0, 0, 1.0, 0,      '', 0,      '', 0, 0,'x',     1 ),
   new gElem(    'Size',         'Os',            'Os', 1, 1, 8.0, 0,      '', 0,      '', 0, 0,'x',     2 ), 
   new gElem(    'Size',          'T',            'Ti', 2, 1, 27.0, 0,      '', 0,      '', 0, 0,'x',     3 )
//   new gElem(    'Size',          's',         'Ship*',-1,-2,60.0, 7,  'Penx', 3,      '', 0, 0,'x',    50 )
);

var g_burdens = new Array
(
   new gElem(      'Burden',   'None',       '(blank)', 0, 0,  1.0,  0,  '*',      0,     '*', 0, 0,'x',   1.0),
   new gElem(      'Burden',     'aD',    'Anti-Desig', 3, 1,  3.0,  3,  '*',      1,     '*', 0, 1,'x',   3.0),
   new gElem(      'Burden',      'B',          'Body', 2,'=1',0.5, -4,  '*',     -1,     '*', 0,-1,'x',   3.0),
   new gElem(      'Burden',      'D',          'Disp', 3, 0,  0.9, -1,  '*',      0,     '*', 0, 0,'x',   0.5),
   new gElem(      'Burden',      'H',         'Heavy', 0, 1,  1.3,  3,  '*',      1,     '*', 0, 1,'x',   2.0),
   new gElem(      'Burden',     'Lt',            'Lt', 0,-1,  0.7, -1,  '*',     -1,     '*', 0,-1,'x',   1.1),
   new gElem(      'Burden',      'M',           'Mag', 1, 1,  1.1,  1,  '*',      1,     '*', 0, 1,'x',   1.1),
   new gElem(      'Burden',      'M',           'Med', 0, 0,  1.0,  0,  '*',      0,     '*', 0, 0,'x',   1.0),
   new gElem(      'Burden',      'R',    'Recoilless', 1,-1,  1.2,  0,  '*',      1,     '*', 0, 1,'x',   3.0),
   new gElem(      'Burden',     'Sn',          'Snub', 1,'=2',0.7, -3,  '*',      1,     '*', 0, 1,'x',   1.5),
   new gElem(      'Burden',     'Vh',            'Vh', 0,'=5',4.0,  4,  '*',      5,     '*', 0, 5,'hi',  5.0), // my D was 2
   new gElem(      'Burden',     'Vl',            'Vl', 1,-2,  0.6, -2,  '*',     -1,     '*', 0,-1,'x',   2.0),
   new gElem(      'Burden',    'Vrf',           'VRF', 2, 0,  14.0, 5,  '*',      1,     '*', 0, 1,'hi',  9.0), 
   new gElem(      'Burden',    'Vrf',       'VRF(CT)', 2, 0,   7.0, 5,  '*',      3,     '*', 0, 1,'hi',  9.0)  
);

var g_stages = new Array
( 
//                   cl,           co,           na,    tl, rng, mass, b, h1, d1, h2, d2, d, x,   cr 
   new gElem(        'Stage',   'None',       '(blank)', 0, 0, 1.0, 0,    '*',     0,     '*', 0, 0,'x',   1.0),
   new gElem(        'Stage',      'A',           'Adv', 3, 0, 0.8,-2,    '*',     2,     '*', 0, 2,'x',   2.0),
   new gElem(        'Stage',    'Alt',           'Alt', 1, 1, 1.1, 0,    '*',     2,     '*', 0, 2,'x',   1.1),
   new gElem(        'Stage',      'B',         'Basic', 0, 0, 1.3, 0,    '*',     0,     '*', 0, 0,'x',   0.7),
   new gElem(        'Stage',      'E',         'Early',-1,-1, 1.7, 1,    '*',     0,     '*', 0, 0,'x',   1.2),
   new gElem(        'Stage',      'X',          'Exp.',-2,-1,   2, 3,    '*',     0,     '*', 0, 0,'x',   4.0),
   new gElem(        'Stage',      'a',          'Arch',-2,-2,   2, 3,    '*',     0,     '*', 0, 0,'x',   1.1),  // Archaic
   new gElem(        'Stage',     'Im',          'Impv', 1, 0,   1, 0,    '*',     1,     '*', 0, 1,'x',   1.1),
   new gElem(        'Stage',    'Mod',           'Mod', 2, 0, 0.9, 0,    '*',     1,     '*', 0, 1,'x',   1.2),
   new gElem(        'Stage',     'Pr',          'Prec', 6, 3,   4, 2,    '*',     0,     '*', 0, 0,'x',   5.0),
   new gElem(        'Stage',      'P',         'Proto',-1,-1, 1.9, 2,    '*',     0,     '*', 0, 0,'x',   3.0),
   new gElem(        'Stage',      'R',        'Remote', 1, 0,   1, 0,    '*',     0,     '*', 0, 0,'x',   7.0),
   new gElem(        'Stage',     'Sn',        'Sniper', 1, 1, 1.1, 1,    '*',     0,     '*', 0, 0,'X',   2.0),
   new gElem(        'Stage',     'St',           'Std', 1, 0,   1, 0,    '*',     1,     '*', 0, 1,'x',   1.0),
   new gElem(        'Stage',      'T',        'Target', 0, 0, 1.1, 1,    '*',     0,     '*', 0, 0,'x',   1.5),
   new gElem(        'Stage',     'Ul',           'Ult', 4, 0, 0.7,-2,    '*',     2,     '*', 0, 2,'x',   1.4)
);
