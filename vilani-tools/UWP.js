///////////////////////////////////////////////////////////
//
//   UWP Dissector
//
///////////////////////////////////////////////////////////
function starport()
{
   this.A = "High quality starport";
   this.B = "Good quality starport";
   this.C = "Routine quality starport";
   this.D = "Low quality starport"; 
   this.E = "No starport (just a marked slab of bedrock and a beacon)";
   this.X = "Interdicted world";
   
   this.F = "Good quality spaceport";
   this.G = "Poor quality spaceport";
   this.H = "Primitive spaceport";
   this.Y = "No spaceport";
}


function size()
{
   this.S  = "Small - Less than 1000 ";
   this[0] = "Asteroid Belt - 0 ";
   this[1] = "1600 ";
   this[2] = "3200 ";
   this[3] = "4800 ";
   this[4] = "6400 ";
   this[5] = "8000 ";
   this[6] = "9600 ";
   this[7] = "11200 ";
   this[8] = "12800 ";
   this[9] = "14400 ";
   this.A  = "16000 ";
   this.B  = "18000 ";
   this.C  = "20000 ";
   this.D  = "22000 ";
   this.E  = "24000 ";
   this.F  = "26000 ";
   this.G  = "28000 ";
}

function atmosphere()
{
   this[0] = "vacuum world";
   this[1] = "trace";
   this[2] = "very thin, tainted";
   this[3] = "very thin";
   this[4] = "thin, tainted";
   this[5] = "thin";
   this[6] = "standard";
   this[7] = "standard, tainted";
   this[8] = "dense";
   this[9] = "dense, tainted";
   this.A  = "exotic";
   this.B  = "corrosive";
   this.C  = "insidious";
}

function hydrographics()
{
   this[0] = "no free standing water"
   this[1] = "10% water"
   this[2] = "20% water"
   this[3] = "30% water"
   this[4] = "40% water"
   this[5] = "50% water"
   this[6] = "60% water"
   this[7] = "70% water"
   this[8] = "80% water"
   this[9] = "90% water"
   this.A  = "water world"
}

function population()
{
   this[0] = "no inhabitants"
   this[1] = "10-90"
   this[2] = "100-900"
   this[3] = "1000-9000"
   this[4] = "10,000-90,000"
   this[5] = "100,000-900,000"
   this[6] = "1 million - 9 million"
   this[7] = "10 million - 90 million"
   this[8] = "100 million - 900 million"
   this[9] = "1 billion - 9 billion"
   this.A  = "10 billion - 90 billion"
}

function government()
{
   this[0] = "No government structure."
   this[1] = "Company/Corporation."
   this[2] = "Participating Democracy."
   this[3] = "Self-Perpetuating Oligarchy."
   this[4] = "Representative Democracy."
   this[5] = "Feudal Technocracy."
   this[6] = "Captive Government."
   this[7] = "Balkanization."
   this[8] = "Civil Service Bureaucracy."
   this[9] = "Impersonal Bureaucracy."
   this.A  = "Charismatic Dictator."
   this.B  = "Non-Charismatic Leader."
   this.C  = "Charismatic Oligarchy."
   this.D  = "Religious Dictatorship."
   this.E  = 'Religious Autocracy.'
   this.F  = 'Totalitarian Oligarchy.'
   this.M  = "Military Government."
}

function law()
{
   this[0] = "No prohibitions."
   this[1] = "Body pistols, explosives, and poison gas."
   this[2] = "Portable energy weapons."
   this[3] = "Military-type weapons."
   this[4] = "Light assault weapons."
   this[5] = "Personal concealable firearms."
   this[6] = "Most firearms prohibited."
   this[7] = "Shotguns prohibited."
   this[8] = "Long bladed weapons controlled; open posession prohibited."
   this[9] = "Posession outside the home prohibited."
   this.A  = "Posession of any weapon prohibited."
   this.B  = 'Continental passports required.'
   this.C  = 'Unrestricted invasion of privacy.'
   this.D  = 'Paramilitary law enforcement.'
   this.E  = 'Full-fledged police state.'
   this.F  = 'Daily life rigidly controlled.'
   this.G  = 'Disproportionate punishments.'
   this.H  = 'Legalized oppressive practices.'
   this.J  = 'Routinely oppressive and restrictive.'
}

function tl()
{
   this[0] = "Stone age."
   this[1] = "Bronze age."
   this[2] = "Iron age to mechanical age." 
   this[3] = "Steam age."
   this[4] = "Electrical age."
   this[5] = "Flight age."
   this[6] = "Atomic age."
   this[7] = "Space age."
   this[8] = "Semiconductor age."
   this[9] = "Early interstellar"
   this.A  = "Low interstellar"
   this.B  = "Average interstellar"
   this.C  = "Average interstellar"
   this.D  = "Above-average interstellar"
   this.E  = "Above-average interstellar"
   this.F  = "M1100 maximum interstellar"
   this.G  = "Darrian or M1120 maximum interstellar"
   this.H  = "This world can take whatever it wants"
}

port = new starport();
diam = new size();
atmo = new atmosphere();
hydr = new hydrographics();
popu = new population();
govt = new government();
lawl = new law();
tech = new tl();


function h2d( num )
{
   if (num == 'A') return 10;
   return num;
}

function analyze( name, uwp, output )
{ 
      uwp = uwp.toUpperCase()

   if (!uwp.charAt(8))
      uwp.value = '0000000-0';

      var sp  = h2d( uwp.charAt(0) )
      var sz  = h2d( uwp.charAt(1) ) 
      var at  = h2d( uwp.charAt(2) )
      var hy  = h2d( uwp.charAt(3) )
      var po  = h2d( uwp.charAt(4) )
      var go  = h2d( uwp.charAt(5) )
      var ll  = h2d( uwp.charAt(6) )
      var tl  = h2d( uwp.charAt(8) )

      var trade = ""
   
   if ( name ) 
      output.value = "World Name   : " + name + "\n";
   else
      output.value = '';
   
   output.value +=
        "UWP          : " + uwp                 + "\n"
     +  "Starport     : " + port[uwp.charAt(0)] + "\n"
     +  "world size   : " + diam[uwp.charAt(1)] + "km diameter\n"
     +  "atmosphere   : " + atmo[uwp.charAt(2)] + "\n"
     +  "hydrographics: " + hydr[uwp.charAt(3)] + "\n"
     +  "population   : " + popu[uwp.charAt(4)] + "\n"
     +  "government   : " + govt[uwp.charAt(5)] + "\n"
     +  "law level    : " + lawl[uwp.charAt(6)] + "\n\n"
     +  "tech level   : " + tech[uwp.charAt(8)] + "\n"

   if (at > 3 && at < 10 
    && hy > 3 && hy < 9 
    && po > 4 && po < 8)
      trade = "This is a breadbasket world.\n"
   else
   if (at < 4 && hy < 4 && po > 5)
      trade = "This world relies on agricultural imports.\n"

   if (  (at < 5 || at == 7 || at == 9)
      && po > 8 )   
      trade = trade 
            + "This world is an industrial center.\n"
   else
   if (po < 7)
      trade = trade
            + "This world relies on industrial imports.\n"

   if (at > 5 && at < 9 
    && po > 5 && po < 9 
    && go > 3 && go < 10)
      trade = trade + "This is a rich world.\n"
   else
   if (at > 1 && at < 6 && hy < 4)
      trade = trade + "This is a poor world.\n"

   if (sz > 0 && hy == 0 && at < 3)
      trade = trade + "This is a desert world.\n"

   if (po > 8) trade = trade 
                     + "This is a high population world.\n";
   else
   if (po == 0) trade = trade
                      + "This is a barren world.\n";

   if (at < 2 && hy > 0) trade = trade
             + "This is an ice-capped world.\n";

   output.value += "\n" + trade
   
   output.value += "\nTrade Designation:\n";
   
   if ( name ) output.value += name + ' ';
   
   output.value += codes( uwp, 0, 0 ) + "\n";
}

function codes( uwp, orbit, hz )
{
   uwp = uwp.toUpperCase();
   
   var codes = '';
   
   // planetary
   
   if ( uwp.match( /^.000/                      ) ) codes += 'As ';
   if ( uwp.match( /^..[23456789]0/             ) ) codes += 'De ';
   if ( uwp.match( /^..[ABC][123456789A]/       ) ) codes += 'Fl ';
   if ( uwp.match( /^.[678][568][567]/          ) ) codes += 'Ga ';
   if ( uwp.match( /^.[3456789A][2479ABC][012]/ ) ) codes += 'He ';
   if ( uwp.match( /^..[01][123456789A]/        ) ) codes += 'Ic ';
   if ( uwp.match( /^.[ABC].A/                  ) ) codes += 'Oc ';
   if ( uwp.match( /^.[^0]0/                    ) ) codes += 'Va ';
   if ( uwp.match( /^.[56789].A/                ) ) codes += 'Wa ';
   
   // population
   
   if ( uwp.match( /^....000-[^0]/              ) ) codes += 'Di ';
   if ( uwp.match( /^....000-0/                 ) ) codes += 'Ba ';
   if ( uwp.match( /^....[123]/                 ) ) codes += 'Lo ';
   if ( uwp.match( /^....[456]/                 ) ) codes += 'Ni ';
   if ( uwp.match( /^....8/                     ) ) codes += 'Ph ';
   if ( uwp.match( /^....[9ABC]/                ) ) codes += 'Hi ';
   
   // economic
   if ( uwp.match( /^..[456789][45678][48]/     ) ) codes += 'Pa ';
   if ( uwp.match( /^..[456789][45678][567]/    ) ) codes += 'Ag ';
   if ( uwp.match( /^..[0123][0123][6789ABC]/   ) ) codes += 'Na ';
   if ( uwp.match( /^..[012479].[78]/           ) ) codes += 'Pi ';
   if ( uwp.match( /^..[012479].[9ABC]/         ) ) codes += 'In ';
   if ( uwp.match( /^..[2345][0123]/            ) ) codes += 'Po ';
   if ( uwp.match( /^..[68].[59]/               ) ) codes += 'Pr ';
   if ( uwp.match( /^..[68].[678]/              ) ) codes += 'Ri ';
   
   // climate
   if ( orbit && hz )
   {
      var hz_offset = orbit - hz;
      
      if ( hz_offset > 1 
        && uwp.match( /^.[23456789].[123456789A]/  ) ) codes += 'Fr ';
      
      if ( hz_offset == -1 
        && uwp.match( /^.[6789][456789][34567]/    ) ) codes += 'Tr ';
        
      if ( hz_offset == 1
        && uwp.match( /^.[6789][456789][34567]/    ) ) codes += 'Tu ';
   }
      
   return codes;   
}
