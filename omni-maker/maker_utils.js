function pp( str, pad )
{
	 var out = '' + str;
	 	 
   if ( pad < 0 )
      for ( i = 0; i < -pad - str.length; i ++ )
         out = ' ' + out;
   else      
      for ( i = 0; i < pad - str.length; i ++ )
         out += ' ';
   
   return out + ' ';
}

function dashes( num )
{
   var out = '';
   
   for( i=0; i<num; i++ )
      out += '-';
      
   return out + ' ';
}
