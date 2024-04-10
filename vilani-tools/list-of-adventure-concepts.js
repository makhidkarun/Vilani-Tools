
var plots = new Array
(
   'Any Old Port in a Storm'
   ,'Better Late Than Never (chase the bad guys)'
   ,'Blackmail'
   ,'Breaking and Entering'
   ,'Capture the Flag (Secure a military target)'
   ,'Clearing The Hex'
   ,'Delver\'s Delight'
   ,'Don\'t Eat The Purple Ones'
   ,'Elementary, My Dear Watson'
   ,'Escort Service'
   ,'Good Housekeeping (making a thing work despite themselves)'
   ,'Help is on the Way (rescue)'
   ,'Hidden Base'
   ,'How Much For Just The Dingus? (get the thing before the others do)'
   ,'I Beg Your Pardon?'
   ,'Long Or Short Fork When Dining On Elf? (diplomacy)'
   ,'Look, Don\'t Touch (survey/surveillance mission)'
   ,'Manhunt'
   ,'Missing Memories'
   ,'Most Peculiar, Momma'
   ,'No One Has Soiled The Bridge (guard the spot)'
   ,'Not In Kansas (transported to a strange place)'
   ,'Ounces of Prevention (act to prevent badness)'
   ,'Pandora\'s Box'
   ,'Quest For the Sparkly Hoozits'
   ,'Recent Ruins'
   ,'Running the Gauntlet'
   ,'Safari'
   ,'Score One for the Home Team (race, hunt, contest, tournament)'
   ,'Stalag 23'
   ,'Take Us To Memphis And Don\'t Slow Down (hijacking)'
   ,'Troublemakers'
   ,'Uncharted Waters (something\'s out there)'
);


//   1. Randomly select two plots from above.
//   2. Possibly invert one or both 
//      (i.e. reverse the roles of PCs with antagonists)
//   3. Take one of these actions:
//      a. make first plot the hook, and the second the meat.
//      b. make first plot physical (setting) 
//         and second plot personal (applies to a PC or NPC)

var plot_name;

function setHook()
{
   if ( Math.random() > 0.5 )
      plot_name  = new Array( 'Setting plot', 'Personal plot' );
   else
      plot_name = new Array( 'Facade/hook plot', 'Real plot' );
}

function getPlot()
{
   var out = ':';
   if ( Math.random() > 0.5 )
      out += ' [inverted]';
   return out + ' ' + plots[ parseInt(Math.random() * plots.length) ];
}

function getAdventure()
{
   setHook();
   return "\n"
        + plot_name[0] + getPlot()   + "\n"
        + plot_name[1] + getPlot() + "\n";
}