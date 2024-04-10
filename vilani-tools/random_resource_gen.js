/////////////////////////////////////////////////////
//
// Adventure Hook Material
//
/////////////////////////////////////////////////////
var advHead = new Array
(
   'This person',
   'An associate', 
   'A wealthy friend',
   'A crime boss',
   'A ship\'s owner',
   'A ship\'s captain'
)
var advBody = new Array
(
   ' is looking for',
   ' wants to locate',
   ' wants to recover',
   ' wants to \'borrow\'',
   ' wants to kill/destroy',
   ' has plans for',
   ' knows all about',
   ' has custody of',
   ' needs security for'
)
var advTail = new Array
(
   ' a weapon prototype',
   ' an engine prototype',
   ' a friend',
   ' a local official',
   ' an Imperial official',
   ' a sector crime boss',
   ' a small ship', 
   ' a corsair',
   ' an emissary',
   ' an emissary\'s ship',
   ' a liner',
   ' a mercenary group',
   ' a megacorporation'
)
/////////////////////////////////////////////////////
//
//  End (Adventure Hook Material)
//
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
//
//  The Ship's Locker
//
/////////////////////////////////////////////////////
var garage = new Array
(
   'Helicopter', 'Air Raft', 'Speeder', 'Wheeled ATV', 
   'Tracked ATV', 'Tracked AFV', 'GCarrier', 'Hovercraft',
   'Ship\'s Boat', 'Launch', 'Slow Boat', 'Pinnace', 
   'Modular Cutter', 'Gig', 'Light Fighter'
)

var protectiveGear = new Array(
	'Artificial gill-9',
	'Cold weather clothing-10',
	'Combo mask-9',
	'Desert survival suit-11',
	'Filter mask-8',
	'Goggles-8',
	'Oxy Tanks-9',
	'Respirator-8',
	'Space parka-9',
	'Survival bubble-9',
	'Vac suit-10',
	'EVA-11',
	'Diplo-11',
	'Flex-11',
	'Psi-shield helmet-12'
);

var locker      = new Array(
	'Blur',
	'Slow drug',
	'Fast drug',
	'Combat drug',
	'Medical drug',
	'Pocket lamp',
	'Imperial ID',
	'Cr10',
	'Cr100',
	'Dry rations',
	'1L water',
	'Comm relay',
	'Compass',
	'Amaze natives kit',
	'Atmosphere tester-8',
	'Backpack-11',
	'Binoculars-11',
	'Bioscanner-13',
	'Breaching charge-11',
	'Compressor-10',
	'Cutting torch-8',
	'Electonic tools-11',
	'Emergency beacon-10',
	'Entry cutter-10',
	'Flare gun-8',
	'Flashlight-11',
	'Generator-10',
	'Grapnel gun-10',
	'Inertial locator-9',
	'Intrusion tools-8',
	'Cold lantern-6',
	'Med microscan-11',
	'Med scanner-11',
	'Multiscanner-10',
	'Night glasses-9',
	'Paramedic kit-11',
	'Piton-9',
	'Personal datalog-11',
	'Radiation counter-10',
	'Retroreflector-8',
	'Rope-6',
	'Slaplock-8',
	'Sleeping bag-11',
	'Tarp-8',
	'Translator-11',
	'Wall patch-10',
	'Climbing shoes-9',
	'Hiking boots-9',
	'Combat boot-9',
	'Survival still-11',
	'Survival tent-11',
	'Water filter-7',
	'Comm'
);

var lockerWeapons  = new Array(
	'Plastique', 'Cutlass',
        'Anagathics', 'Grenade', 'Body Pistol', 'Laser Pistol',
        'Magnum Revolver', 'cP003', 'Staple Gun', 'Thud Gun',
        'Bullpup', 'Laser Rifle', 'cR776', 'pR903', 'Shotgun',
        'SMG', 'Telescopic Sight', 'Electronic Sight', 'Silencer'
);

var lockerMachines = new Array(
	'Iris valve opener-10',
	'Laser cutter-10',
	'Tent-11',
	'Portable airlock-10',
	'Grav belt-12',
	'Sursat-11',
	'Survey shield-11',
	'Parawing-10',
	'Re-entry kit-10',
	'Thruster pack-9'
);

var commercialGoods = new Array(
	'Anagathics',
	'Slow drug',
	'Fast drug',
	'Combat drug',
	'Medical drug',
	'Med microscan-11',
	'Med scanner-11',
	'Multiscanner-10',
	'Backpack-11',
	'Binoculars-11',
	'Translator-11',
	'Climbing shoes-9',
	'Hiking boots-9',
	'Stretch cloth',
	'Chameleon cloth',
	'Video cloth',
	'Flashtray',
	'Flobee',
	'Fractal heat sinks',
	'One-way',
	'Personal HUD',
	'Plascrete',
	'Cerastic',
	'Reference Comp-11',
	'Solar verifier',
	'Space watch-12',
	'Spray paint-11',
	'Structurecomp',
	'Synthetic diamond',
	'Aide',
	'Business ring',
	'Comm',	
	'Personal computer',
	'Bugs-12',
	'Vacuum unit-10'
);

/////////////////////////////////////////////////////
//
//  End (Ship's Locker)
//
/////////////////////////////////////////////////////

var career = new Array
(
   'Noble', 'Rogue', 'Scholar', 'Army', 'Marine', 'Merchant',
   'Navy', 'Scout', 'Agent'
)

var skill = new Array
( 
   'Admin', 'Advocate', 'Animals', 'Athlete',
   'Broker', 'Bureaucrat',
   'Comms', 'Computer', 'Counsellor',
   'Designer', 'Diplomat', 'Driver',
   'Explosives', 'Fleet Tactics', 'Flyer', 'Forensics',
   'Gambler', 'High-G', 'Hostile Env', 'JOT', 
   'Language', 'Leader', 'Liaison', 'Naval Architect',
   'Seafarer', 'Stealth', 'Strategy', 'Streetwise', 'Survey', 'Survival',
   'Tactics', 'Teacher', 'Trader', 'Vacc Suit', 'Zero-G',
   'Astrogator', 'Engineer', 'Gunner', 'Medic', 'Pilot', 'Sensors', 'Steward',
   'Biologics', 'Craftsman', 'Electronics', 'Fluidics', 'Gravitics', 'Magnetics',
   'Mechanic', 'Photonics', 'Polymers', 'Programmer',
   'Actor', 'Artist', 'Author', 'Chef', 'Dancer', 'Musician',
   'Fighter', 'Forward Obs', 'Heavy Wpns', 'Navigator', 'Recon', 'Sapper'
)

function roll2D()
{
   return parseInt(Math.random() * 6 + Math.random() * 6 + 2);
}

function pickSkill(terms)
{
   var ix = parseInt( 1 + Math.random() * skill.length )
   var sk = skill[ ix-1 ]
   var levels = 1+parseInt(Math.random() * terms)
/*
   if (Math.random() > 0.7)
      sk += '-2'
   else
   if (Math.random() > 0.875)
      sk += '-3'
   else
   if (Math.random() > 0.97)
      sk += '-4'
*/
   return sk + '-' + levels
}

function d2h( d )
{
   if (d == 10) return 'A'
   if (d == 11) return 'B'
   if (d == 12) return 'C'
   if (d == 13) return 'D'
   if (d == 14) return 'E'
   if (d == 15) return 'F'
   if (d == 16) return 'G'
   if (d == 17) return 'H'
   if (d == 18) return 'I'
   if (d == 19) return 'J'
   return d
}

function character()
{
   var out = ""
   var k
   var j
   /*
   var cash = 'Cr' + parseInt( Math.random() * 100 ) // typical bum

   if ( Math.random() > 0.7 )
      cash = cash + '0'

   if ( Math.random() > 0.875 )
      cash = "K" + cash
   */
   this.age   = parseInt(18 + Math.random() * 20 + Math.random() * 20)
   this.terms = "0"
   if (this.age > 21)
      this.terms = parseInt( (this.age - 18) / 4)

   this.upp   = d2h( roll2D() ) + ''
              + d2h( roll2D() ) + ''
              + d2h( roll2D() ) + ''
              + d2h( roll2D() ) + ''
              + d2h( roll2D() ) + ''
              + d2h( roll2D() ) + ''

   out = this.upp  + " " + this.age + "  (" + this.terms + ")  : "

   for(k=0; k< parseInt( Math.random() * 6 + 1); k++)
      out += pickSkill(this.terms) + " "
 
   return out + "\n"
}

function generate( form )
{
   var i
  
   form.detail.value = "UPP    Age Terms: Partial skills list\n"
   for (i=0; i<10; i++)
   {
      form.detail.value += character()
   }
}

function hookEm( form )
{
   form.hook.value = ''
   for (i=0; i<5; i++)
   {
      var headIndex = parseInt( 1 + Math.random() * advHead.length )
      var bodyIndex = parseInt( 1 + Math.random() * advBody.length )
      var tailIndex = parseInt( 1 + Math.random() * advTail.length )

      form.hook.value += advHead[ headIndex-1 ]
      form.hook.value += advBody[ bodyIndex-1 ]
      form.hook.value += advTail[ tailIndex-1 ]
      form.hook.value += ".\n"
   }
}

function toys()
{
   var extra = ''
   var index

   index = parseInt( 1 + Math.random() * protectiveGear.length )
   if (roll2D() < 6)
      extra += roll2D() + ' x ' + protectiveGear[ index-1 ] + "\n"


   index = parseInt( 1 + Math.random() * lockerWeapons.length )
   if (roll2D() < 7)
      extra += roll2D() + ' x ' + lockerWeapons[ index-1 ] + "\n"


   index = parseInt( 1 + Math.random() * lockerMachines.length )
   if (roll2D() < 5)
      extra += '1 x ' + lockerMachines[ index-1 ] + "\n"

   return extra
}

function lockEm( form )
{
   var i
   var index
  
   form.locker1.value = ""
   form.locker2.value = ""
   form.locker3.value = ""

   var count = roll2D() - 3
   for (i=0; i<count; i++)
   {
      index = parseInt( 1 + Math.random() * locker.length )
      form.locker1.value += roll2D() + ' x ' + locker[ index-1 ] + "\n"
   }

   var count = roll2D() - 4
   for (i=0; i<count; i++)
   {
      index = parseInt( 1 + Math.random() * locker.length )
      form.locker2.value += roll2D() + ' x ' + locker[ index-1 ] + "\n"
   }
   form.locker2.value += toys()

   var count = roll2D() - 5
   for (i=0; i<count; i++)
   {
      index = parseInt( 1 + Math.random() * locker.length )
      form.locker3.value += roll2D() + ' x ' + locker[ index-1 ] + "\n"
   }
   form.locker3.value += toys() + toys()
}
