///////////////////////////////////////////////////////////
//
//   Calendar functions
//
///////////////////////////////////////////////////////////

var zhodaniOffset = 58993400; // + 50;
var vilaniCorrelationConstant = 3041.65; // .597;

//
//  The entry function for converting Imperial dates to
//  all other supported dates, and converting any supported
//  date to an approximate Imperial date.
//
function setDate( dateStr, textArea )
{
   textArea.value = "CALENDAR        SHORT FORM       LONG FORM\n"
   + "--------------- ---------------- -------------------------------\n";

   dateStr = dateStr.toLowerCase();
 
   if ( dateStr.match(  /(\d+)-(-?\d+)/ ) ) 
   {
      // THIS IS AN IMPERIAL DATE
      var day   = parseInt(RegExp.$1) - 1;
      var year  = parseInt(RegExp.$2);
      var impHours = ( year * 365 + day ) * 24;
      
      var longForm = "Year " + year + ", Day " + (day+1);

      textArea.value +=  "Imperial        " + dateStr.padEnd(17, ' ') + longForm + "\n";

      calcAslan( impHours, textArea );
      calcVilani( impHours, textArea );
      calcZhodani( impHours, textArea );
   }
   else
   if ( dateStr.match( /(\d+)\.(\d+)/) )
   {
      // THIS IS A VILANI DATE
      var lani    = parseInt( RegExp.$1 );
      lani -= vilaniCorrelationConstant;
      var drandir = parseInt( RegExp.$2 );
      var impHours   = (lani * 500 + (drandir / 2)) * 23.35; // so RCp45 tells me

      calcImperial( impHours, textArea );
      calcAslan( impHours, textArea );
      calcZhodani( impHours, textArea );
   }
   else
   if ( dateStr.match( /(\d+):(\d+):(\d+):(\d+)/ ) )
   {
      // THIS IS A ZHODANI DATE
      var olympiad = parseInt( RegExp.$1 );
      var year     = parseInt( RegExp.$2 ) - 1;
      var season   = parseInt( RegExp.$3 ) - 1;
      var day      = parseInt( RegExp.$4 );
      var impHours = (olympiad * 733 + year * 244 + season * 45 + day) * 27.02;
      
      impHours -= zhodaniOffset;

      calcImperial( impHours, textArea );
      calcAslan( impHours, textArea );
      calcVilani( impHours, textArea );
   }
}

function calcImperial( impHours, textArea )
{
   var days  = parseInt( impHours / 24 );
   var year  = parseInt( days / 365 );
   var day   = 1+(days % 365);
   
   var shortForm = day + "-" + year;
   var longForm  = "Year " + year + ", Day " + day;
   textArea.value += "Imperial".padEnd( 16, ' ') + shortForm.padEnd(17, ' ') + longForm + "\n";
}

function calcZhodani( impHours, textArea )
{
   impHours += zhodaniOffset;
   var days = parseInt( impHours / 27.02 );
   var olympiads  = parseInt( days / 733 );
   var oRemainder = days % 733;
   
   var year = parseInt( oRemainder / 244 ) + 1;
   var day  = oRemainder % 244;

   
   // OK.  We have the day number, but the calendar isn't QUITE 41 days per month.
   // Solution: 
   //    if we're past season 4, add a day to account for the first 'missing day'.
   //    if we're past season 5, add a day to account for the final 'missing day'.

   if ( day > 164 ) day++;
   if ( day > 204 ) day++;

   // now every month essentially has 41 days.
   
   var season = parseInt( day / 41 );
   var seasonDay = day % 41;
   
//   textArea.value += "[zhodani debug] " + days + "d : " + olympiads + "o : " + oRemainder + "r : " + year + "y : " + day + "d : " + season + "seas : " + seasonDay + "sd\n";
   
   var seasonArray = [ 'Atrint', 'Vrienstial', 'Atchafser', 'Ataniebl', 'Atshtiavl', 'Atpaipr' ];
   var holidayArray = [ 'Dranzhrin', 'Vipechaklstial', 'Dranzhrinatch', 'Kazdievlstial', 'Thequzastial' ];
   
   var doubleOlympiadDay = 'Atlthequziastial';
   
   var dayName = (seasonDay == 0)? holidayArray[ season ] : seasonArray[ season ] + "/" + seasonDay;
   
   // Check for the Olympiad leap day and Double Olympiad leap day.
   if ( year == 4 ) // the Olympiad leap day
   {
      year = 3;
      dayName = doubleOlympiadDay;
   }

   var shortForm = olympiads + ":" + year + ":" + (season+1) + ":" + seasonDay;
   var longForm  = olympiads + "." + year + " " + dayName;
   
   textArea.value += "Zhodani".padEnd(16, ' ') + shortForm.padEnd( 17, ' ' ) + longForm + "\n";

}

/*
   Aslan Tests:

Aslan	 Imp.	Event	
-123	-2190	First World War
-88	-2160	Second World War (nuclear)
-60	-2136	TL 7
-22	-2102	Orbital bases
-18	-2098	Third World War
  0	-2083	Tlaukhu formed
 94	-1999	TL 9; Jump drive invented
117	-1980	First contact with Humaniti
1100	-1118	Border Wars begin
1185	-1044	Great Rift crossed
2810	380	Peace of Ftahalr; Border wars end
2902	461	First contact with Zhodani
3077	614	Yerlyaruiwo-Tralyeaeawi War
3120	652	Hlyueawi clan joins Tlaukhu
3167	693	Yerlyaruiwo-T. War ends
3644	1111	Golden era of Third Imperium

*/
function calcAslan( impHours, textArea  )
{
   var aslanCorrelationConsant = 762150; // +300;

   var idn = impHours / 24.0;
   idn += aslanCorrelationConsant;

   var aslanDayCount = idn * 9/13.6;

   var fiveYears    = aslanDayCount / 1061;
   var fiveFraction = aslanDayCount % 1061;
   var singleYears  = fiveFraction  / 212;
   var days         = fiveFraction  % 212;
  
   var years = fiveYears * 5 + singleYears;

   if (days < 1)
      days = 212 + days;

   var shortForm = parseInt(years) + "/" + parseInt(days);
   var longForm = "Ftahea " + parseInt(years) + " Eakhu " + parseInt(days);

   textArea.value += "Aslan".padEnd( 16, ' ' ) + shortForm.padEnd( 17, ' ' ) + longForm + "\n";
}

//
//  This algorithm follows Referee's Companion p45.
//
function calcVilani( impHours, textArea)
{
   var drandir = impHours / 23.35; // drandir since Imperial 001-0001.

   drandir += (vilaniCorrelationConstant * 500); // offset from Lani 1 Drandir 1.

   var lani = parseInt(drandir / 500);
   drandir  = parseInt(drandir % 500) * 2 + 1;

   if (drandir < 10)       drandir = "00" + drandir;
   else if (drandir < 100) drandir = "0"  + drandir;

   var shortForm = lani + "." + drandir;
   var longForm  = "Lani " + lani + " Drandir " + drandir;

   textArea.value += "Vilani (RC)".padEnd( 16, ' ') + shortForm.padEnd( 17, ' ' ) + longForm + "\n";
}

function calcVilaniDGP( impHours, textArea )
{
   var vilaniCorrelationConstant = 1449500 + 17388 + 9435;

   var idn = impHours / 24.0;
   idn += vilaniCorrelationConstant;

   var drandir = idn / 1.325;
    
   var kargurkalaCount = 0;
   var gurkalaCount = 0;
   var kidashCount = 0;
   var drandirCount = 1;

   // every ten Vilani years, the calendar adds 13 drandir.
   // every fifty Vilani years, the calendar adds 12 drandir instead of 13. 
   // so in 50 years, there are (360*50) + (5*13) - 1 drandir.
   var fiftyYearDrandir = 50 * 360 + 5 * 13 - 1;

   var fiftyYearCount = drandir / fiftyYearDrandir;
   var fiftyRemainder = drandir % fiftyYearDrandir;

   kargurkalaCount += fiftyYearCount * 5;

   // the fifty remainder is a fraction of 50 years.
   // each decade of those years has (10 * 360) + 13 days.
   var decadeDrandir = 10 * 360 + 13;
    
   var decadeCount     = fiftyRemainder / decadeDrandir;
   var decadeRemainder = fiftyRemainder % decadeDrandir;

   // the decade remainder is a fraction of 10 years.
   // each year has 360 days exactly.

   kargurkalaCount += decadeCount;

   var singleYearCount = decadeRemainder / 360;
   var singleRemainder = decadeRemainder % 360;

   if ( singleYearCount == 10 ) // i.e. leap year detected
   {
       singleYearCount--;
       drandirCount += 360 + singleRemainder;
   }
   else
   {
       drandirCount += singleRemainder;        
   }
   // And now we have our date.

   gurkalaCount += singleYearCount;
    
   if ( drandirCount < 1 )
       drandirCount = 360 + drandirCount;

   kidashCount  = drandirCount / 36;
   drandirCount = drandirCount % 36;

   kidashCount += 1;
   drandirCount += 1;

   var abbreviated = " (" + parseInt(kargurkalaCount) + "." 
   + parseInt(gurkalaCount) + "."
//   + parseInt(kidashCount) + ":"
   + parseInt(drandirCount) + ")";

   textArea.value += "Vilani:  Kargurkala " + parseInt(kargurkalaCount) 
                           + ", Gurkala "    + parseInt(gurkalaCount) 
                           + ", (Kidash "     + parseInt(kidashCount)
                           + "), Drandir "    + parseInt(drandirCount) 
                           + abbreviated + "\n\n"
}