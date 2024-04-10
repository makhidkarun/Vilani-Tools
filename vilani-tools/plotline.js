var who =
[
 'A persecuted/wronged/unlucky group'
 ,'A group protected by guardians'
 ,'A group confronting an enigmatic problem'
 ,'A group led by a madman'
 ,'A thoughtless government'
 ,'An ambitious group'
];

var goal =
[
 'seeks revenge for crimes/wrongs against them.'
 ,'is a victim of cruelty.'
 ,'is vanquished by overt power or fiat.'
 ,'conspires against a government or ruler.'
 ,'sacrifices itself for a hero, an ideal, or kinsmen.'
 ,'covets a symbol of power or wealth, and competes against others for possession of that symbol.'
];

var extra =
[
 'They ask the Imperium for help; or, an arbitrator is trying to manage things.'
 ,'They are led by a daring leader.'
 ,'They are mistaken about something, or deceived by an adversary.'
 ,'They are blocked/pursued by an adversary.'
 ,'They hate competing and possibly superior groups.'
 ,'They are imperiled by their own folly or loss.'
];

function plotline()
{
   return who[ parseInt(Math.random()*6) ] + ' '
        + goal[ parseInt(Math.random()*6) ] + ' '
		+ extra[ parseInt(Math.random()*6) ];
}
