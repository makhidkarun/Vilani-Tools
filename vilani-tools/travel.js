///////////////////////////////////////////////////////////
//
//   Time, Distance, Acceleration Calculator
//
///////////////////////////////////////////////////////////
var seconds;
var km;
var accel;
var velocity;

//
//  s, m, h, d
//
function convertTimeToSeconds( t )
{
   if ( t.match( /s/ ) ) // secs
   {
      t = t.substring( 0, t.indexOf( "s" ) );
   }
   else if ( t.match( /m/ ) ) // mins
   {
      t = t.substring( 0, t.indexOf( "m" ) );
      t *= 60;
   }
   else if ( t.match( /h/ ) ) // hrs
   { 
      t = t.substring( 0, t.indexOf( "h" ) );
      t *= 3600;
   }
   else if ( t.match( /d/ ) ) // days
   {
      t = t.substring( 0, t.indexOf( "d" ) );
      t *= 3600 * 24;
   }
   seconds = t;
}

function convertDistToKm( d )
{
   if ( d.indexOf( "k" ) > -1 ) 
   {
      d = d.substring( 0, d.indexOf( "k" ) );
   }
   else if ( d.indexOf( "a" ) > -1 ) // astronomical units
   {
      d = d.substring( 0, d.indexOf( "a" ) );
      d *= 150000000;
   }
   else if ( d.indexOf( "ls" ) > -1 ) // light-seconds
   {
      d = d.substring( 0, d.indexOf( "ls" ) );
      d *= 300000;
   }
   else if ( d.indexOf( "lm" ) > -1 ) // light-minutes
   {
      d = d.substring( 0, d.indexOf( "lm" ) );
      d *= 18000000;
   }
   km = d;
}

function calc( timev, distv, accelv, output )
{
   output.value = "";
   
   if ( timev )
      convertTimeToSeconds( timev );
      
   if ( distv )
      convertDistToKm( distv );
   
   if ( accelv )
   {
      accelv = accelv.replace( /[Gg]/, "" );
      accel = accelv * 10.0 / 1000.0; // km/s/s
   }
      
   calcTime( distv, accelv, output );
   calcDist( timev, accelv, output );
   calcAccel( timev, distv, output );
}

function calcTime( distv, accelv, output )
{
   if ( distv && accelv )
   {
     if ( accelv == 1 )
     {
        output.value =  "G     Time to travel " + distv + "\n";
        output.value += "----  -------------------------------\n";
//        output.value = "0.1G, 1G, 2G, 3G, 4G, 5G, 6G, 7G, 8G, 9G:\n";
        output.value += '0.1   ' + cTime( distv, 1.0/1000.0 ) + "\n\n"; // 0.1 G
        for( accelv=1; accelv<=12; accelv++ )
        {
           accel = accelv * 10.0 / 1000.0;
           output.value += accelv + '.0  ';
           if (accelv < 10) output.value += ' ';
           output.value += cTime( distv, accel ) + "\n";
           if (accelv % 3 == 0) output.value += "\n";
        }
     }
     else
        output.value = cTime( distv, accel );
   }
}

function cTime( distv, accel )
{
   var m = Math.round( 2 * Math.sqrt( km / accel ) / 60 );
   var h = parseInt( m / 60 );
   var d = parseInt( h / 24 );
   
   m = m % 60;
   h = h % 24;

   var out = '';

   if ( d < 10 ) out += ' ';
   if ( d > 0 ) out += d + 'd ';

   if ( h < 10 ) out += ' ';
   if ( h > 0 ) out += h + 'h ';

   if ( m < 10 ) out += ' ';
   out += m + 'm ';
 
   return out;
}

function calcDist( timev, accelv, output )
{
   if ( timev && accelv )
   {
      var d2  = accel * seconds * seconds / 4;
      var d   = accel * seconds * seconds / 2;
      var au2 = Math.round( d2/15000000 )/10;
      var au  = Math.round( d/15000000 )/10;
      
      velocity = 60 * 60 * accel * seconds;
      var va  = Math.round( 24 * 7 * velocity/15000000 )/10;
      
      output.value = "With deceleration:\n"
                   + " Distance: " + d2 + " km (" + au2 + " AU)\n\n"
                   + "No deceleration:\n"
                   + " Distance: " + d + " km (" + au + " AU)\n"                    
                   + " Velocity: " + velocity + " km/hr (" + va + " AU/week)";      
   }
}

function calcAccel( timev, distv, output )
{
   if ( timev && distv )
   {
      var a = 4 * km / ( seconds * seconds );
      output.value =  "Accel = " + Math.round(a*1000)/10 + "G"; 
   }
}
