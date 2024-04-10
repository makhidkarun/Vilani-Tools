function LanguageTable()
{
   this.Basic     = new Array(36); 
   this.Alternate = new Array(36); 
   this.Initial   = new Array(216);
   this.Vowel     = new Array(216);
   this.Ending    = new Array(216);

   this.Basic.top = 0;
   this.Alternate.top = 0;
   this.Initial.top = 0;
   this.Vowel.top = 0;
   this.Ending.top = 0;

   this.Basic.push     = push;
   this.Alternate.push = push; 
   this.Initial.push   = push;
   this.Vowel.push     = push;
   this.Ending.push    = push; 
   
   return this;
}

function push( upTo, value )
{
      var i

   for (i=this.top; i<upTo; i++)
   {
      this[i] = value;
   }
   this.top = upTo;
}

var amindii = new LanguageTable();
amindii.Basic.push( 12, 'VC' );
amindii.Basic.push( 24, 'CV' );
amindii.Basic.push( 36, 'V' );

amindii.Alternate.push( 12,  'VC' );
amindii.Alternate.push( 24, 'CV' );
amindii.Alternate.push( 36, 'CVC' );

amindii.Initial.push( 40,   'b' );
amindii.Initial.push( 80,   'd' );
amindii.Initial.push( 84,   'j' );
amindii.Initial.push( 124,  'kr' );
amindii.Initial.push( 126,  'kt' );
amindii.Initial.push( 156,  'm' );
amindii.Initial.push( 204,  's' );
amindii.Initial.push( 216,  't' );

amindii.Vowel.push( 102,     'a' );
amindii.Vowel.push( 114,     'o' );
amindii.Vowel.push( 216,     'i' );

amindii.Ending.push( 30,    '*'  );
amindii.Ending.push( 50 ,   'mb' );
amindii.Ending.push( 80 ,   'm' );
amindii.Ending.push( 132,   'n' );
amindii.Ending.push( 180,   'nd' );
amindii.Ending.push( 200,   'k' );
amindii.Ending.push( 216,   'nk' );

var batrachian = new LanguageTable();
batrachian.Basic.push( 6, 'V' );
batrachian.Basic.push( 12, 'VC' );
batrachian.Basic.push( 18, 'CV' );
batrachian.Basic.push( 36, 'CVC' );

batrachian.Alternate.push( 36, 'CV' );

batrachian.Initial.push( 18, 'b' );
batrachian.Initial.push( 36, 'd' );
batrachian.Initial.push( 54, 'k' );
batrachian.Initial.push( 72, 'l' );
batrachian.Initial.push( 90, 'm' );
batrachian.Initial.push( 108, 'p' );
batrachian.Initial.push( 126, 'r' );
batrachian.Initial.push( 144, 't' );
batrachian.Initial.push( 162, 'v' );
batrachian.Initial.push( 180, '3' );
batrachian.Initial.push( 198, '%' );
batrachian.Initial.push( 216, '!' );

batrachian.Vowel.push( 70, 'a'   );
batrachian.Vowel.push( 108, 'e'  );
batrachian.Vowel.push( 172, 'i'  );
batrachian.Vowel.push( 192, 'o'  );
batrachian.Vowel.push( 216, 'oo' );

batrachian.Ending.push( 18, 'lk' );
batrachian.Ending.push( 36, 'lm' );
batrachian.Ending.push( 54, 'nk' );
batrachian.Ending.push( 72, 'ng' );
batrachian.Ending.push( 90, 'nl' );
batrachian.Ending.push( 108, 'rd' );
batrachian.Ending.push( 126, 'rm' );
batrachian.Ending.push( 144, 'rn' );
batrachian.Ending.push( 162, 'wl' );
batrachian.Ending.push( 180, 'wr' );
batrachian.Ending.push( 198, '@' );
batrachian.Ending.push( 216, '*' );

var yali = new LanguageTable();
yali.Basic.push( 75, 'CVC' );
yali.Basic.push( 180, 'CV' );
yali.Basic.push( 216, 'V' );

yali.Alternate.push( 105, 'CVC' );
yali.Alternate.push( 180, 'CV' );
yali.Alternate.push( 216, 'V' );

yali.Initial.push(  28, 'm' );
yali.Initial.push(  44, 'k' );
yali.Initial.push(  76, 'l' );
yali.Initial.push(  86, 'p' );
yali.Initial.push( 105, 'w' );
yali.Initial.push( 125, 'g' );
yali.Initial.push( 149, 'n' );
yali.Initial.push( 161, 'd' );
yali.Initial.push( 172, 'h' );
yali.Initial.push( 184, 'y' );
yali.Initial.push( 195, 'b' );
yali.Initial.push( 206, 'r' );
yali.Initial.push( 211, 's' );
yali.Initial.push( 216, 't' );

yali.Vowel.push(  61, 'a' ); 
yali.Vowel.push(  96, 'e' );
yali.Vowel.push( 140, 'i' );
yali.Vowel.push( 170, 'o' );
yali.Vowel.push( 201, 'u' );
yali.Vowel.push( 207, 'ai' );
yali.Vowel.push( 213, 'ia' );
yali.Vowel.push( 216, 'ah' );

yali.Ending.push(   4, 'y' );
yali.Ending.push(  36, 'n' );
yali.Ending.push(  52, 'l' );
yali.Ending.push( 120, 'k' );
yali.Ending.push( 126, 'ng' );
yali.Ending.push( 136, 's' );
yali.Ending.push( 170, 'm' );
yali.Ending.push( 188, 't' );
yali.Ending.push( 194, 'd' );
yali.Ending.push( 200, 'r' );
yali.Ending.push( 206, 'p' );
yali.Ending.push( 216, 'g' );


var anglic = new LanguageTable();

anglic.Basic.push( 90,  'CV' )
anglic.Basic.push( 174, 'CVC' )
anglic.Basic.push( 208,  'VC' )
anglic.Basic.push( 216, 'CVC' )

anglic.Alternate.push( 90,  'CV' )
anglic.Alternate.push( 174, 'CVC' )
anglic.Alternate.push( 208,  'VC' )
anglic.Alternate.push( 216, 'CVC' )

anglic.Initial.push(   5, 'b' )
anglic.Initial.push(  15, 'c' )
anglic.Initial.push(  18, 'ch' )
anglic.Initial.push(  23, 'd' )
anglic.Initial.push(  33, 'f' )
anglic.Initial.push(  36, 'fr' )
anglic.Initial.push(  48, 'g' )
anglic.Initial.push(  51, 'gh' )
anglic.Initial.push(  59, 'h' )
anglic.Initial.push(  64, 'j' )
anglic.Initial.push(  69, 'k' )
anglic.Initial.push(  72, 'kn' )
anglic.Initial.push(  80, 'l' )
anglic.Initial.push(  92, 'm' )
anglic.Initial.push( 107, 'n' )
anglic.Initial.push( 120, 'p' )
anglic.Initial.push( 121, 'phl' )
anglic.Initial.push( 125, 'q' )
anglic.Initial.push( 140, 'r' )
anglic.Initial.push( 152, 's' )
anglic.Initial.push( 155, 'sh' )
anglic.Initial.push( 158, 'st' )
anglic.Initial.push( 176, 't' )
anglic.Initial.push( 184, 'th' )
anglic.Initial.push( 187, 'tr' )
anglic.Initial.push( 192, 'v' )
anglic.Initial.push( 200, 'w' )
anglic.Initial.push( 203, 'wh' )
anglic.Initial.push( 211, 'y' )
anglic.Initial.push( 216, 'z' )

anglic.Vowel.push(  38, 'a' )
anglic.Vowel.push(  41, 'ae' )
anglic.Vowel.push( 111, 'e' )
anglic.Vowel.push( 145, 'i' )
anglic.Vowel.push( 148, 'ie' )
anglic.Vowel.push( 151, 'io' )
anglic.Vowel.push( 187, 'o' )
anglic.Vowel.push( 194, 'ou' )
anglic.Vowel.push( 206, 'u' )
anglic.Vowel.push( 209, 'ua' )
anglic.Vowel.push( 216, 'y' )

anglic.Ending.push(  10, 'c' )
anglic.Ending.push(  15, 'ch' )
anglic.Ending.push(  29, 'd' )
anglic.Ending.push(  34, 'k' )
anglic.Ending.push(  66, 'l' )
anglic.Ending.push(  70, 'll' )
anglic.Ending.push(  80, 'm' )
anglic.Ending.push( 138, 'n' )
anglic.Ending.push( 142, 'nd' )
anglic.Ending.push( 151, 'p' )
anglic.Ending.push( 178, 'r' )
anglic.Ending.push( 182, 'rb' )
anglic.Ending.push( 186, 'rs' )
anglic.Ending.push( 190, 'rt' )
anglic.Ending.push( 200, 's' )
anglic.Ending.push( 205, 'st' )
anglic.Ending.push( 209, 'tw' )
anglic.Ending.push( 213, 'v' )
anglic.Ending.push( 216, 'z' )

var vil = new LanguageTable();

vil.Basic.push( 6,    'V' )
vil.Basic.push( 21,  'CV' )
vil.Basic.push( 29,  'VC' )
vil.Basic.push( 36, 'CVC' )
vil.Alternate.push( 21,  'CV' )
vil.Alternate.push( 36, 'CVC' )
vil.Initial.push(  39, 'k' )
vil.Initial.push(  78, 'g' )
vil.Initial.push(  99, 'm' )
vil.Initial.push( 120, 'd' )
vil.Initial.push( 141, 'l' )
vil.Initial.push( 162, 'sh' )
vil.Initial.push( 180, 'kh' )
vil.Initial.push( 190, 'n' )
vil.Initial.push( 200, 's' )
vil.Initial.push( 204, 'p' )
vil.Initial.push( 208, 'b' )
vil.Initial.push( 212, 'z' )
vil.Initial.push( 216, 'r' )
vil.Vowel.push(  67, 'a' )
vil.Vowel.push(  84, 'e' )
vil.Vowel.push( 143, 'i' )
vil.Vowel.push( 184, 'u' )
vil.Vowel.push( 192, 'aa' )
vil.Vowel.push( 208, 'ii' )
vil.Vowel.push( 216, 'uu' )
vil.Ending.push(  76, 'r' )
vil.Ending.push( 101, 'n' )
vil.Ending.push( 139, 'm' )
vil.Ending.push( 165, 'sh' )
vil.Ending.push( 180, 'g' )
vil.Ending.push( 191, 's' )
vil.Ending.push( 216, 'k' )

var ael = new LanguageTable();

ael.Basic.push( 3, 'VC' );
ael.Basic.push( 30, 'CV' );
ael.Basic.push( 36, 'CVC' );
ael.Alternate.push( 36, 'CV' );
/*
ael.Initial.push( 54, 'h' );
ael.Initial.push( 72, 'j' );
ael.Initial.push( 90, 'l' );
ael.Initial.push( 216, 'y' );
*/
ael.Initial.push( 15, 'ch' );
ael.Initial.push( 59, 'h' );
ael.Initial.push( 76, 'j' );
ael.Initial.push( 93, 'l' );
ael.Initial.push( 107, 'm' );
ael.Initial.push( 216, 'y' );

ael.Vowel.push( 66, 'ae' );
ael.Vowel.push( 116, 'a' );
ael.Vowel.push( 166, 'e' );
ael.Vowel.push( 200, 'i' );
ael.Vowel.push( 216, 'u' );
ael.Ending.push( 216, 'l' );

var aslan = new LanguageTable();

aslan.Basic.push( 13,   'V' )
aslan.Basic.push( 22,  'CV' )
aslan.Basic.push( 30,  'VC' )
aslan.Basic.push( 36, 'CVC' )
aslan.Alternate.push( 15,  'V' )
aslan.Alternate.push( 36, 'VC' )
aslan.Initial.push(  12, 'f' )
aslan.Initial.push(  22, 'ft' )
aslan.Initial.push(  40, 'h' )
aslan.Initial.push(  45, 'hf' )
aslan.Initial.push(  57, 'hk' )
aslan.Initial.push(  65, 'hl' )
aslan.Initial.push(  72, 'hr' )
aslan.Initial.push(  84, 'ht' )
aslan.Initial.push(  89, 'hw' )
aslan.Initial.push( 106, 'k' )
aslan.Initial.push( 121, 'kh' )
aslan.Initial.push( 132, 'kht' )
aslan.Initial.push( 142, 'kt' )
aslan.Initial.push( 147, 'l' );
aslan.Initial.push( 154, 'r' );
aslan.Initial.push( 164, 's' );
aslan.Initial.push( 171, 'st' );
aslan.Initial.push( 191, 't' );
aslan.Initial.push( 196, 'tl' );
aslan.Initial.push( 201, 'tr' );
aslan.Initial.push( 216, 'w' );
aslan.Vowel.push( 41, 'a' );
aslan.Vowel.push( 52, 'ai' );
aslan.Vowel.push( 60, 'ao' );
aslan.Vowel.push( 64, 'au' );
aslan.Vowel.push( 90, 'e' );
aslan.Vowel.push( 114, 'ea' );
aslan.Vowel.push( 127, 'ei' );
aslan.Vowel.push( 143, 'i' );
aslan.Vowel.push( 155, 'iy' );
aslan.Vowel.push( 163, 'o' );
aslan.Vowel.push( 167, 'oa' );
aslan.Vowel.push( 175, 'oi' );
aslan.Vowel.push( 180, 'ou' );
aslan.Vowel.push( 184, 'u' );
aslan.Vowel.push( 188, 'ua' );
aslan.Vowel.push( 195, 'ui' );
aslan.Vowel.push( 200, 'ya' );
aslan.Vowel.push( 208, 'ye' );
aslan.Vowel.push( 212, 'yo' );
aslan.Vowel.push( 216, 'yu' );
aslan.Ending.push( 46, 'h' );
aslan.Ending.push( 64, 'kh' );
aslan.Ending.push( 96, 'l' );
aslan.Ending.push( 110, 'lr' );
aslan.Ending.push( 133, 'r' );
aslan.Ending.push( 151, 'rl' );
aslan.Ending.push( 175, 's' );
aslan.Ending.push( 199, 'w' );
aslan.Ending.push( 216, "\'" );

var bwap = new LanguageTable();

bwap.Basic.push( 13, 'CV' );
bwap.Basic.push( 25, 'CVC' );
bwap.Basic.push( 34, 'VC' );
bwap.Basic.push( 36, 'V' );
bwap.Alternate.push( 13, 'CV' );
bwap.Alternate.push( 25, 'CVC' );
bwap.Alternate.push( 34, 'VC' );
bwap.Alternate.push( 36, 'V' );
bwap.Initial.push( 40, 'p' );
bwap.Initial.push( 45, 'pw' );
bwap.Initial.push( 98, 'w' );
bwap.Initial.push( 108, 'bw' );
bwap.Initial.push( 132, 's' );
bwap.Initial.push( 156, 't' );
bwap.Initial.push( 162, 'd' );
bwap.Initial.push( 192, 'k' );
bwap.Initial.push( 207, 'b' );
bwap.Initial.push( 216, 'f' );
bwap.Vowel.push( 132, 'a' );
bwap.Vowel.push( 204, 'e' );
bwap.Vowel.push( 216, 'o' );
bwap.Ending.push( 72, '-' );
bwap.Ending.push( 150, 'b' );
bwap.Ending.push( 174, 's' );
bwap.Ending.push( 186, 't' );
bwap.Ending.push( 198, 'th' );
bwap.Ending.push( 204, 'k' );
bwap.Ending.push( 210, 'r' );
bwap.Ending.push( 216, 'p' );

var chaldean = new LanguageTable();

chaldean.Basic.push( 7,  'V'   );
chaldean.Basic.push( 24, 'CV'  );
chaldean.Basic.push( 26, 'VC'  );
chaldean.Basic.push( 36, 'CVC' );
chaldean.Alternate.push( 2, 'V'    );          
chaldean.Alternate.push( 16, 'CV'   );
chaldean.Alternate.push( 18, 'VC'   );      
chaldean.Alternate.push( 36, 'CVC' );
chaldean.Initial.push( 31, 'n'   );
chaldean.Initial.push( 56,  'b'   );
chaldean.Initial.push( 69,  'ch'  );
chaldean.Initial.push( 87,  'z'   );
chaldean.Initial.push( 93,  'p'   );
chaldean.Initial.push( 102,  't'   );
chaldean.Initial.push( 135, 'sh'  );
chaldean.Initial.push( 150,  'r'   );
chaldean.Initial.push( 167,  'm'   );
chaldean.Initial.push( 172,  'g'   );
chaldean.Initial.push( 178,  'd'   );
chaldean.Initial.push( 198,  's'   );
chaldean.Initial.push( 208,  'l'   );
chaldean.Initial.push( 212,  'h'   );
chaldean.Initial.push( 216,  'k'   );
chaldean.Vowel.push( 60, 'e'  );
chaldean.Vowel.push( 84,  'u'  );
chaldean.Vowel.push( 180, 'a'  );
chaldean.Vowel.push( 204,  'i'  );
chaldean.Vowel.push( 216,  'o'  );
chaldean.Ending.push( 9,  'd'  );
chaldean.Ending.push( 27,  'z'  );
chaldean.Ending.push( 99, 'r'  );
chaldean.Ending.push( 104,  'sh' );
chaldean.Ending.push( 122,  'l'  );
chaldean.Ending.push( 145,  'ch' );
chaldean.Ending.push( 163,  'n'  );
chaldean.Ending.push( 174,  'm'  );
chaldean.Ending.push( 185,  'b'  );
chaldean.Ending.push( 195,  's'  );
chaldean.Ending.push( 208,  'g'  );
chaldean.Ending.push( 212,  'h'  );
chaldean.Ending.push( 216,  'k'  );

var darmine = new LanguageTable();

darmine.Basic.push( 2, 'V' );
darmine.Basic.push( 12, 'CV' );
darmine.Basic.push( 24, 'VC' );
darmine.Basic.push( 36, 'CVC' );
darmine.Alternate.push( 1, 'V' );
darmine.Alternate.push( 25, 'CV' );
darmine.Alternate.push( 34, 'VC' );
darmine.Alternate.push( 36, 'CVC' );
darmine.Initial.push( 21, 'd' );
darmine.Initial.push( 27, 'dr' );
darmine.Initial.push( 31, 'g' );
darmine.Initial.push( 35, 'gn' );
darmine.Initial.push( 41, 'h' );
darmine.Initial.push( 45, 'hr' );
darmine.Initial.push( 66, 'k' );
darmine.Initial.push( 70, 'kn' );
darmine.Initial.push( 109, 'l' );
darmine.Initial.push( 148, 'm' );
darmine.Initial.push( 169, 'n' );
darmine.Initial.push( 181, 'r' );
darmine.Initial.push( 191, 's' );
darmine.Initial.push( 212, 'sh' );
darmine.Initial.push( 216, 'z' );
darmine.Vowel.push( 52, 'a' );
darmine.Vowel.push( 60, 'aa' );
darmine.Vowel.push( 68, 'ai' );
darmine.Vowel.push( 104, 'e' );
darmine.Vowel.push( 112, 'ee' );
darmine.Vowel.push( 171, 'i' );
darmine.Vowel.push( 186, 'ia' );
darmine.Vowel.push( 194, 'ii' );
darmine.Vowel.push( 208, 'u' );
darmine.Vowel.push( 216, 'uu' );
darmine.Ending.push( 86, 'd' );
darmine.Ending.push( 101, 'g' );
darmine.Ending.push( 115, 'n' );
darmine.Ending.push( 122, 'ng' );
darmine.Ending.push( 137, 'p' );
darmine.Ending.push( 144, 'pr' );
darmine.Ending.push( 174, 'r' );
darmine.Ending.push( 202, 's' );
darmine.Ending.push( 216, 'sh' );

var darrian = new LanguageTable();

darrian.Basic.push( 27, 'CVC' );
darrian.Basic.push( 36, 'CV' );
darrian.Alternate.push( 27, 'VC' );
darrian.Alternate.push( 36, 'V' );
darrian.Initial.push( 17, 'b' );
darrian.Initial.push( 39, 'd' );
darrian.Initial.push( 46, 'g' );
darrian.Initial.push( 58, 'p' );
darrian.Initial.push( 66, 't' );
darrian.Initial.push( 73, 'th' );
darrian.Initial.push( 78, 'k' );
darrian.Initial.push( 88, 'm' );
darrian.Initial.push( 110, 'n' );
darrian.Initial.push( 132, 'z' );
darrian.Initial.push( 142, 'l' );
darrian.Initial.push( 156, 'r' );
darrian.Initial.push( 162, 'y' );
darrian.Initial.push( 166, 'zb' );
darrian.Initial.push( 171, 'zd' );
darrian.Initial.push( 174, 'zg' );
darrian.Initial.push( 177, 'zl' );
darrian.Initial.push( 182, 'mb' );
darrian.Initial.push( 187, 'nd' );
darrian.Initial.push( 190, 'ngg' );
darrian.Initial.push( 195, 'ry' );
darrian.Initial.push( 198, 'ly' );
darrian.Initial.push( 204, 'ny' );
darrian.Initial.push( 209, 'lz' );
darrian.Initial.push( 216, 'ld' );
darrian.Vowel.push( 47, 'a' );
darrian.Vowel.push( 94, 'e' );
darrian.Vowel.push( 123, 'eh' );
darrian.Vowel.push( 152, 'i' );
darrian.Vowel.push( 175, 'ih' );
darrian.Vowel.push( 204, 'o' );
darrian.Vowel.push( 216, 'u' );
darrian.Ending.push( 9, 'bh' );
darrian.Ending.push( 18, 'dh' );
darrian.Ending.push( 24, 'gh' );
darrian.Ending.push( 30, 'p' );
darrian.Ending.push( 36, 't' );
darrian.Ending.push( 45, 'k' );
darrian.Ending.push( 66, 'n' );
darrian.Ending.push( 78, 'ng' );
darrian.Ending.push( 109, 'l' );
darrian.Ending.push( 138, 'r' );
darrian.Ending.push( 156, 's' );
darrian.Ending.push( 171, 'm' );
darrian.Ending.push( 177, 'mb' );
darrian.Ending.push( 183, 'nd' );
darrian.Ending.push( 186, 'ngg' );
darrian.Ending.push( 192, 'yr' );
darrian.Ending.push( 195, 'ly' );
darrian.Ending.push( 198, 'ny' );
darrian.Ending.push( 201, 'lbh' );
darrian.Ending.push( 207, 'lz' );
darrian.Ending.push( 216, 'ld' );

var droyne = new LanguageTable();

droyne.Basic.push( 7, 'V' );
droyne.Basic.push( 18, 'CV' );
droyne.Basic.push( 29, 'VC' );
droyne.Basic.push( 36, 'CVC' );
droyne.Alternate.push( 6, 'V' );
droyne.Alternate.push( 12, 'CV' );
droyne.Alternate.push( 18, 'VC' );
droyne.Alternate.push( 36, 'CVC' );
droyne.Initial.push( 8, 'b' );
droyne.Initial.push( 12, 'br' );
droyne.Initial.push( 24, 'd' );
droyne.Initial.push( 29, 'dr' );
droyne.Initial.push( 42, 'f' );
droyne.Initial.push( 55, 'h' );
droyne.Initial.push( 68, 'k' );
droyne.Initial.push( 71, 'kr' );
droyne.Initial.push( 80, 'l' );
droyne.Initial.push( 94, 'm' );
droyne.Initial.push( 108, 'n' );
droyne.Initial.push( 120, 'p' );
droyne.Initial.push( 122, 'pr' );
droyne.Initial.push( 133, 'r' );
droyne.Initial.push( 157, 's' );
droyne.Initial.push( 167, 'ss' );
droyne.Initial.push( 170, 'st' );
droyne.Initial.push( 180, 't' );
droyne.Initial.push( 186, 'th' );
droyne.Initial.push( 189, 'tr' );
droyne.Initial.push( 198, 'ts' );
droyne.Initial.push( 207, 'tw' );
droyne.Initial.push( 216, 'v' );
droyne.Vowel.push( 24, 'a' );
droyne.Vowel.push( 42, 'ay' );
droyne.Vowel.push( 84, 'e' );
droyne.Vowel.push( 114, 'i' );
droyne.Vowel.push( 138, 'o' );
droyne.Vowel.push( 150, 'oy' );
droyne.Vowel.push( 189, 'u' );
droyne.Vowel.push( 198, 'ya' );
droyne.Vowel.push( 205, 'yo' );
droyne.Vowel.push( 216, 'yu' );
droyne.Ending.push( 6, 'b' );
droyne.Ending.push( 17, 'd' );
droyne.Ending.push( 22, 'f' );
droyne.Ending.push( 28, 'h' );
droyne.Ending.push( 36, 'k' );
droyne.Ending.push( 40, 'l' );
droyne.Ending.push( 42, 'lb' );
droyne.Ending.push( 49, 'ld' );
droyne.Ending.push( 53, 'lk' );
droyne.Ending.push( 56, 'lm' );
droyne.Ending.push( 57, 'ln' );
droyne.Ending.push( 58, 'lp' );
droyne.Ending.push( 60, 'ls' );
droyne.Ending.push( 62, 'lt' );
droyne.Ending.push( 73, 'm' );
droyne.Ending.push( 80, 'n' );
droyne.Ending.push( 92, 'p' );
droyne.Ending.push( 101, 'r' );
droyne.Ending.push( 104, 'rd' );
droyne.Ending.push( 106, 'rf' );
droyne.Ending.push( 111, 'rk' );
droyne.Ending.push( 115, 'rm' );
droyne.Ending.push( 118, 'rn' );
droyne.Ending.push( 119, 'rp' );
droyne.Ending.push( 123, 'rs' );
droyne.Ending.push( 128, 'rt' );
droyne.Ending.push( 130, 'rv' );
droyne.Ending.push( 153, 's' );
droyne.Ending.push( 160, 'sk' );
droyne.Ending.push( 167, 'ss' );
droyne.Ending.push( 172, 'st' );
droyne.Ending.push( 184, 't' );
droyne.Ending.push( 190, 'th' );
droyne.Ending.push( 200, 'ts' );
droyne.Ending.push( 204, 'v' );
droyne.Ending.push( 216, 'x' );

var gut = new LanguageTable();
gut.Basic.push( 8, 'CV' );
gut.Basic.push( 24, 'VC' );
gut.Basic.push( 36, 'CVC' );
gut.Alternate.push( 8, 'CV' );
gut.Alternate.push( 24, 'VC' );
gut.Alternate.push( 36, 'CVC' );
gut.Initial.push( 20, 'b'  );
gut.Initial.push( 40, 'g'  );
gut.Initial.push( 60, 'h'  );
gut.Initial.push( 80, 'j'  );
gut.Initial.push( 100, 'l'  );
gut.Initial.push( 120, 'm'  );
gut.Initial.push( 140, 'n'  );
gut.Initial.push( 160, 'q'  );
gut.Initial.push( 180, 'r'  );
gut.Initial.push( 200, 'w'  );
gut.Initial.push( 210, 'y'  );
gut.Initial.push( 216, 'dj' );
gut.Vowel.push( 70,  "a" );
gut.Vowel.push( 140, "e" );
gut.Vowel.push( 216, "@" );
gut.Ending.push( 10, 'b' );
gut.Ending.push( 40, 'g' );
gut.Ending.push( 50, 'h' );
gut.Ending.push( 90, 'j' );
gut.Ending.push( 110, 'l' );
gut.Ending.push( 140, 'm' );
gut.Ending.push( 170, 'n' );
gut.Ending.push( 180, 'q' );
gut.Ending.push( 190, 'r' );
gut.Ending.push( 200, 'w' );
gut.Ending.push( 210, 'y' );
gut.Ending.push( 216, 'dj' );

var gurvin = new LanguageTable();

gurvin.Basic.push( 12, 'CV' );
gurvin.Basic.push( 24, 'V' );
gurvin.Basic.push( 36, 'CVC' );
gurvin.Alternate.push( 8, 'CV' );
gurvin.Alternate.push( 22, 'VC' );
gurvin.Alternate.push( 36, 'CVC' );
gurvin.Initial.push( 6, 'bl' );
gurvin.Initial.push( 12, 'c' );
gurvin.Initial.push( 24, 'd' );
gurvin.Initial.push( 30, 'dr' );
gurvin.Initial.push( 36, 'f' );
gurvin.Initial.push( 54, 'g' );
gurvin.Initial.push( 58, 'gl' );
//gurvin.Initial.push( 62, 'h' );
gurvin.Initial.push( 86, 'k' );
gurvin.Initial.push( 90, 'kl' );
gurvin.Initial.push( 102, 'l' );
//gurvin.Initial.push( 105, 'ld' );
//gurvin.Initial.push( 108, 'ly' );
gurvin.Initial.push( 116, 'm' );
gurvin.Initial.push( 138, 'n' );
gurvin.Initial.push( 150, 'p' );
//gurvin.Initial.push( 158, 'phl' );
gurvin.Initial.push( 162, 'q' );
gurvin.Initial.push( 171, 'r' );
gurvin.Initial.push( 174, 's' );
gurvin.Initial.push( 180, 'sl' );
gurvin.Initial.push( 186, 'sp' );
gurvin.Initial.push( 192, 't' );
gurvin.Initial.push( 195, 'th' );
gurvin.Initial.push( 202, 'tr' );
gurvin.Initial.push( 206, 'v' );
gurvin.Initial.push( 208, 'w' );
gurvin.Initial.push( 214, 'wr' );
gurvin.Initial.push( 216, 'z' );
gurvin.Vowel.push( 72, 'a' );
gurvin.Vowel.push( 108, 'e' );
gurvin.Vowel.push( 138, 'i' );
gurvin.Vowel.push( 168, 'o' );
//gurvin.Vowel.push( 180, 'oo' );
gurvin.Vowel.push( 204, 'u' );
gurvin.Vowel.push( 212, 'ua' );
gurvin.Vowel.push( 216, 'y' );
gurvin.Ending.push( 12, 'c' );
gurvin.Ending.push( 18, 'ck' );
gurvin.Ending.push( 21, 'd' );
gurvin.Ending.push( 27, 'f' );
// gurvin.Ending.push( 30, 'ft' );
// gurvin.Ending.push( 33, 'g' );
gurvin.Ending.push( 36, 'h' );
gurvin.Ending.push( 39, 'k' );
gurvin.Ending.push( 57, 'l' );
// gurvin.Ending.push( 60, 'ld' );
gurvin.Ending.push( 66, 'm' );
gurvin.Ending.push( 102, 'n' );
gurvin.Ending.push( 105, 'nsk' );
gurvin.Ending.push( 108, 'nt' );
gurvin.Ending.push( 114, 'p' );
gurvin.Ending.push( 117, 'phl' );
// gurvin.Ending.push( 126, 'q' );
gurvin.Ending.push( 149, 'r' );
gurvin.Ending.push( 151, 'rk' );
gurvin.Ending.push( 157, 'rn' );
// gurvin.Ending.push( 159, 'rt' );
gurvin.Ending.push( 162, 's' );
gurvin.Ending.push( 174, 'sk' );
gurvin.Ending.push( 177, 'st' );
gurvin.Ending.push( 192, 't' );
//gurvin.Ending.push( 195, 'th' );
gurvin.Ending.push( 216, 'th' );
// gurvin.Ending.push( 198, 'v' );
// gurvin.Ending.push( 216, 'x' );


var horn = new LanguageTable();
horn.Basic.push( 12, 'CV'  );
horn.Basic.push( 14, 'V'   );
horn.Basic.push( 16, 'VC'  );
horn.Basic.push( 36, 'CVC' );
horn.Alternate.push( 12, 'CV'  );
horn.Alternate.push( 14, 'V'   );
horn.Alternate.push( 16, 'VC'  );
horn.Alternate.push( 36, 'CVC' );
horn.Initial.push( 42, 'n' );
horn.Initial.push( 54, 'sh' );
horn.Initial.push( 60, 'j' );
horn.Initial.push( 72, 'k' );
horn.Initial.push( 84, 'f' );
horn.Initial.push( 90, 'm' );
horn.Initial.push( 96, 'p' );
horn.Initial.push( 102, 'h' );
horn.Initial.push( 108, 't' );
horn.Initial.push( 138, 'l' );
horn.Initial.push( 144, 'w' );
horn.Initial.push( 168, 's' );
horn.Initial.push( 180, 'th' );
horn.Initial.push( 204, 'r' );
horn.Initial.push( 210, 'd' );
horn.Initial.push( 216, 'y' );
horn.Vowel.push( 66, 'a' );
horn.Vowel.push( 72, 'u' );
horn.Vowel.push( 126, 'i' );
horn.Vowel.push( 144, 'o' );
horn.Vowel.push( 156, 'ee' );
horn.Vowel.push( 168, 'y' );
horn.Vowel.push( 216, 'e' );
horn.Ending.push( 24, 'h' );
horn.Ending.push( 36, 'rt' );
horn.Ending.push( 66, 'n' );
horn.Ending.push( 72, 'b' );
horn.Ending.push( 102, 'f' );
horn.Ending.push( 108, 'k' );
horn.Ending.push( 126, 'sht' );
horn.Ending.push( 132, 'st' );
horn.Ending.push( 138, 'ns' );
horn.Ending.push( 144, 'sk' );
horn.Ending.push( 168, 'r' );
horn.Ending.push( 174, 'nsk' );
horn.Ending.push( 180, 'fr' );
horn.Ending.push( 204, 'fr' );
horn.Ending.push( 210, 'fr' );
horn.Ending.push( 216, 'fr' );

var ithklur = new LanguageTable();

ithklur.Basic.push( 36, 'CV' );
ithklur.Alternate.push( 36, 'CV' );
ithklur.Initial.push( 12, 'd' );
ithklur.Initial.push( 24, 'f' );
ithklur.Initial.push( 30, 'g' );
ithklur.Initial.push( 36, 'gh' );
ithklur.Initial.push( 42, 'h' );
ithklur.Initial.push( 48, 'hz' );
ithklur.Initial.push( 54, 'j' );
ithklur.Initial.push( 60, 'jj' );
ithklur.Initial.push( 66, 'jz' );
ithklur.Initial.push( 75, 'k' );
ithklur.Initial.push( 80, 'kk' );
ithklur.Initial.push( 85, 'kl' );
ithklur.Initial.push( 90, 'ks' );
ithklur.Initial.push( 95, 'kz' );
ithklur.Initial.push( 102, 'l' );
ithklur.Initial.push( 105, 'll' );
ithklur.Initial.push( 111, 'mm' );
ithklur.Initial.push( 117, 'n' );
ithklur.Initial.push( 126, 'q' );
ithklur.Initial.push( 130, 'r' );
ithklur.Initial.push( 136, 'rr' );
ithklur.Initial.push( 139, 'rs' );
ithklur.Initial.push( 142, 'rz' );
ithklur.Initial.push( 148, 's' );
ithklur.Initial.push( 156, 'ss' );
ithklur.Initial.push( 165, 'th' );
ithklur.Initial.push( 170, 'tr' );
ithklur.Initial.push( 183, 'x' );
ithklur.Initial.push( 195, 'xx' );
ithklur.Initial.push( 201, 'z' );
ithklur.Initial.push( 207, 'zz' );
ithklur.Initial.push( 216, '\'' );
ithklur.Vowel.push( 30, 'a' );
ithklur.Vowel.push( 36, 'aa' );
ithklur.Vowel.push( 42, 'ae' );
ithklur.Vowel.push( 66, 'e' );
ithklur.Vowel.push( 72, 'ee' );
ithklur.Vowel.push( 102, 'i' );
ithklur.Vowel.push( 117, 'ii' );
ithklur.Vowel.push( 144, 'o' );
ithklur.Vowel.push( 150, 'ou' );
ithklur.Vowel.push( 174, 'u' );
ithklur.Vowel.push( 186, 'ue' );
ithklur.Vowel.push( 196, 'uu' );
ithklur.Vowel.push( 201, 'y' );
ithklur.Vowel.push( 204, 'yu' );
ithklur.Vowel.push( 207, 'yy' );
ithklur.Vowel.push( 216, '\'t\'' );
ithklur.Ending.push( 15, 'd' );
ithklur.Ending.push( 24, 'f' );
ithklur.Ending.push( 30, 'g' );
ithklur.Ending.push( 42, 'gh' );
ithklur.Ending.push( 48, 'h' );
ithklur.Ending.push( 54, 'hz' );
ithklur.Ending.push( 60, 'j' );
ithklur.Ending.push( 63, 'jj' );
ithklur.Ending.push( 69, 'jz' );
ithklur.Ending.push( 81, 'k' );
ithklur.Ending.push( 90, 'kk' );
ithklur.Ending.push( 99, 'ks' );
ithklur.Ending.push( 108, 'kz' );
ithklur.Ending.push( 116, 'l' );
ithklur.Ending.push( 120, 'll' );
ithklur.Ending.push( 126, 'm' );
ithklur.Ending.push( 132, 'n' );
ithklur.Ending.push( 141, 'q' );
ithklur.Ending.push( 150, 'r' );
ithklur.Ending.push( 156, 'rr' );
ithklur.Ending.push( 162, 'rs' );
ithklur.Ending.push( 168, 'rz' );
ithklur.Ending.push( 180, 'ss' );
ithklur.Ending.push( 186, 'th' );
ithklur.Ending.push( 192, 'x' );
ithklur.Ending.push( 198, 'xx' );
ithklur.Ending.push( 207, 'z' );
ithklur.Ending.push( 216, 'zz' );

var kkree = new LanguageTable();

kkree.Basic.push( 6, 'V' );
kkree.Basic.push( 21, 'CV' );
kkree.Basic.push( 27, 'VC' );
kkree.Basic.push( 36, 'CVC' );
kkree.Alternate.push( 18, 'CV' );
kkree.Alternate.push( 23, 'VC' );
kkree.Alternate.push( 36, 'CVC' );
kkree.Initial.push( 2, 'b' );
kkree.Initial.push( 10, 'g' );
kkree.Initial.push( 24, 'gh' );
kkree.Initial.push( 33, 'gn' );
kkree.Initial.push( 37, 'gr' );
kkree.Initial.push( 39, 'gz' );
kkree.Initial.push( 43, 'hk' );
kkree.Initial.push( 96, 'k' );
kkree.Initial.push( 118, 'kr' );
kkree.Initial.push( 120, 'kt' );
kkree.Initial.push( 131, 'l' );
kkree.Initial.push( 135, 'm' );
kkree.Initial.push( 137, 'mb' );
kkree.Initial.push( 147, 'n' );
kkree.Initial.push( 149, 'p' );
kkree.Initial.push( 175, 'r' );
kkree.Initial.push( 182, 'rr' );
kkree.Initial.push( 197, 't' );
kkree.Initial.push( 201, 'tr' );
kkree.Initial.push( 210, 'x' );
kkree.Initial.push( 212, 'xk' );
kkree.Initial.push( 214, 'xr' );
kkree.Initial.push( 216, 'xt' );
kkree.Vowel.push( 68, 'a' );
kkree.Vowel.push( 75, 'aa' );
kkree.Vowel.push( 86, 'e' );
kkree.Vowel.push( 100, 'ee' );
kkree.Vowel.push( 122, 'i' );
kkree.Vowel.push( 129, 'ii' );
kkree.Vowel.push( 133, 'o' );
kkree.Vowel.push( 140, 'oo' );
kkree.Vowel.push( 162, 'u' );
kkree.Vowel.push( 169, 'uu' );
kkree.Vowel.push( 197, '\'' );
kkree.Vowel.push( 208, '!' );
kkree.Vowel.push( 212, '!!' );
kkree.Vowel.push( 216, '!\'' );
kkree.Ending.push( 5, 'b' );
kkree.Ending.push( 11, 'g' );
kkree.Ending.push( 15, 'd' );
kkree.Ending.push( 20, 'gh' );
kkree.Ending.push( 25, 'gr' );
kkree.Ending.push( 57, 'k' );
kkree.Ending.push( 72, 'kr' );
kkree.Ending.push( 82, 'l' );
kkree.Ending.push( 87, 'm' );
kkree.Ending.push( 97, 'n' );
kkree.Ending.push( 112, 'ng' );
kkree.Ending.push( 117, 'p' );
kkree.Ending.push( 159, 'r' );
kkree.Ending.push( 181, 'rr' );
kkree.Ending.push( 196, 't' );
kkree.Ending.push( 211, 'x' );
kkree.Ending.push( 216, 'xk' );

var kursae = new LanguageTable();
kursae.Basic.push( 18, 'CV' );
kursae.Basic.push( 36, 'CVC' );
kursae.Alternate.push( 18, 'CV' );
kursae.Alternate.push( 36, 'CVC' );

kursae.Initial.push(  15, 'f' );
kursae.Initial.push(  45, 'j' );
kursae.Initial.push(  60, 'k' );
kursae.Initial.push(  75, 'l' );
kursae.Initial.push( 105, 'm' );
kursae.Initial.push( 120, 'n' );
kursae.Initial.push( 150, 'p' );
kursae.Initial.push( 165, 's' );
kursae.Initial.push( 195, 't' );
kursae.Initial.push( 205, 'v' );
kursae.Initial.push( 212, 'ch' );
kursae.Initial.push( 216, 'th' );
kursae.Vowel.push( 75,  'a'  );
kursae.Vowel.push( 120, 'e'  );
kursae.Vowel.push( 150, 'i'  );
kursae.Vowel.push( 180, 'o'  );
kursae.Vowel.push( 216, 'ae' );
kursae.Ending.push(  15, 'j' );
kursae.Ending.push(  30, 'k' );
kursae.Ending.push(  45, 'l' );
kursae.Ending.push(  60, 'm' );
kursae.Ending.push(  90, 'n' );
kursae.Ending.push( 105, 'p' );
kursae.Ending.push( 120, 'q' );
kursae.Ending.push( 135, 'r' );
kursae.Ending.push( 150, 's' );
kursae.Ending.push( 165, 't' );
kursae.Ending.push( 180, 'v' );
kursae.Ending.push( 195, 'ch' );
kursae.Ending.push( 210, 'th' );
kursae.Ending.push( 213, 'jr' );
kursae.Ending.push( 216, 'nr' );

var laowon = new LanguageTable();
laowon.Basic.push( 21, 'CVC' );
laowon.Basic.push( 32, 'CV' );
laowon.Basic.push( 36, 'VC' );
laowon.Alternate.push( 20, 'CVC' );
laowon.Alternate.push( 30, 'CV'  );
laowon.Alternate.push( 34, 'VC'  );
laowon.Alternate.push( 36, 'V'   );

laowon.Initial.push( 12, 'b' );
laowon.Initial.push( 14, 'bl' );
laowon.Initial.push( 18, 'c' );
laowon.Initial.push( 22, 'ch' );
laowon.Initial.push( 24, 'cl' );
laowon.Initial.push( 26, 'd' );
laowon.Initial.push( 36, 'f' );
laowon.Initial.push( 38, 'fl' );
laowon.Initial.push( 58, 'g' );
laowon.Initial.push( 62, 'gl' );
laowon.Initial.push( 64, 'gn' );
laowon.Initial.push( 66, 'gr' );
laowon.Initial.push( 70, 'j' );
laowon.Initial.push( 78, 'k' );
laowon.Initial.push( 80, 'kb' );
laowon.Initial.push( 86, 'kl' );
laowon.Initial.push( 102, 'l' );
laowon.Initial.push( 126, 'm' );
laowon.Initial.push( 134, 'n' );
laowon.Initial.push( 144, 'p' );
laowon.Initial.push( 152, 'r' );
laowon.Initial.push( 162, 's' );
laowon.Initial.push( 166, 'sh' );
laowon.Initial.push( 178, 't' );
laowon.Initial.push( 184, 'tr' );
laowon.Initial.push( 186, 'th' );
laowon.Initial.push( 188, 'v' );
laowon.Initial.push( 198, 'w' );
laowon.Initial.push( 200, 'y' );
laowon.Initial.push( 202, 'h' );
laowon.Initial.push( 206, 'pl' );
laowon.Initial.push( 208, 'ts' );
laowon.Initial.push( 210, 'tw' );
laowon.Initial.push( 214, 'sn' );
laowon.Initial.push( 216, 'shg' );
laowon.Vowel.push( 70, 'a' );
laowon.Vowel.push( 72, 'ah' );
laowon.Vowel.push( 78, 'aa' );
laowon.Vowel.push( 108, 'e' );
laowon.Vowel.push( 116, 'ee' );
laowon.Vowel.push( 152, 'i' );
laowon.Vowel.push( 156, 'ii' );
laowon.Vowel.push( 176, 'o' );
laowon.Vowel.push( 186, 'oo' );
laowon.Vowel.push( 204, 'u' );
laowon.Vowel.push( 208, 'ao' );
laowon.Vowel.push( 212, 'ia' );
laowon.Vowel.push( 214, 'ie' );
laowon.Vowel.push( 216, 'ey' );
laowon.Ending.push( 6, 'b' );
laowon.Ending.push( 9, 'ck' );
laowon.Ending.push( 12, 'd' );
laowon.Ending.push( 15, 'dzn' );
laowon.Ending.push( 18, 'fk' );
laowon.Ending.push( 21, 'g' );
laowon.Ending.push( 24, 'gn' );
laowon.Ending.push( 27, 'gr' );
laowon.Ending.push( 30, 'j' );
laowon.Ending.push( 33, 'k' );
laowon.Ending.push( 39, 'll' );
laowon.Ending.push( 42, 'lg' );
laowon.Ending.push( 45, 'rsk' );
laowon.Ending.push( 48, 'mb' );
laowon.Ending.push( 66, 'l' );
laowon.Ending.push( 81, 'm' );
laowon.Ending.push( 117, 'n' );
laowon.Ending.push( 120, 'ng' );
laowon.Ending.push( 123, 'nks' );
laowon.Ending.push( 129, 'rk' );
laowon.Ending.push( 132, 's' );
laowon.Ending.push( 150, 'r' );
laowon.Ending.push( 171, 'sh' );
laowon.Ending.push( 174, 't' );
laowon.Ending.push( 180, 'ss' );
laowon.Ending.push( 183, 'rg' );
laowon.Ending.push( 186, 'th' );
laowon.Ending.push( 189, 'nk' );
laowon.Ending.push( 192, 'x' );
laowon.Ending.push( 198, 'rs' );
laowon.Ending.push( 210, 'z' );
laowon.Ending.push( 213, 'wl' );
laowon.Ending.push( 216, 'rxsh' );

var llell = new LanguageTable();

/*  5/36
l    o   l
ll   o   l
ll   e   w

   17/36
ll   e 
h    ou
clhh o
ll   o
ll   u
c    yuo
ll   o
c    y
c    yuo
ll   o
h    o

c     = 3/14
clhh  = 1/14
h     = 2/14
l     = 1/14
ll    = 7/14
*/

llell.Basic.push( 5, 'CVC' );
llell.Basic.push( 22, 'CV' );
llell.Basic.push( 29, 'VC' );
llell.Basic.push( 36, 'V'  );

llell.Alternate.push( 4, 'CVC' );
llell.Alternate.push( 18, 'CV' );
llell.Alternate.push( 27, 'VC' );
llell.Alternate.push( 36, 'V'  );

llell.Initial.push( 46, 'c' );
llell.Initial.push( 61, 'clhh' );
llell.Initial.push( 92, 'h' );
llell.Initial.push( 108, 'l' );
llell.Initial.push( 216, 'll' );

llell.Vowel.push( 90,  'o' );
llell.Vowel.push( 108, 'e' );
llell.Vowel.push( 126, 'ou' );
llell.Vowel.push( 153, 'u' );
llell.Vowel.push( 171, 'yuo' );
llell.Vowel.push( 207, 'y' );
llell.Vowel.push( 216, 'oi' );

llell.Ending.push( 54, 'l' );
llell.Ending.push( 81, 'w' );
llell.Ending.push( 216, 'll' );

var mayan = new LanguageTable();

mayan.Basic.push( 14, 'CVC' );
mayan.Basic.push( 23, 'VC'  );
mayan.Basic.push( 31, 'CV'  );
mayan.Basic.push( 36, 'V'   );
mayan.Alternate = mayan.Basic;

mayan.Initial.push( 100, 'k' );
mayan.Initial.push( 120, 't' );
mayan.Initial.push( 140, 'p' );
mayan.Initial.push( 150, 'q' );
mayan.Initial.push( 160, 'y' );
mayan.Initial.push( 190, 'ch' );
mayan.Initial.push( 210, 'h' );
mayan.Initial.push( 216, 'w' );

mayan.Vowel.push( 126, 'a' );
mayan.Vowel.push( 140, 'o' );
mayan.Vowel.push( 154, 'e' );
mayan.Vowel.push( 189, 'u' );
mayan.Vowel.push( 209, 'i' );
mayan.Vowel.push( 216, 'ai' );

mayan.Ending.push( 65, 'l' );
mayan.Ending.push( 160, 'n' );
mayan.Ending.push( 172, 'r' );
mayan.Ending.push( 183, 'm' );
mayan.Ending.push( 205, 'ch' );
mayan.Ending.push( 216, 'x' );

var yiira = new LanguageTable();

yiira.Basic.push( 36, 'CV' );
yiira.Alternate = yiira.Basic;

yiira.Initial.push( 12,  'b'   );
yiira.Initial.push( 25,  'br'  );
yiira.Initial.push( 30,  'bv'  );
yiira.Initial.push( 40,  'bvr' );
yiira.Initial.push( 47,  'h'   );
yiira.Initial.push( 60,  'k'   );
yiira.Initial.push( 68,  'kh'  );
yiira.Initial.push( 80,  'khr' );
yiira.Initial.push( 85,  'kv'  );
yiira.Initial.push( 95,  'kvr' );
yiira.Initial.push( 103, 'r'   );
yiira.Initial.push( 115, 'rh'  );
yiira.Initial.push( 120, 'rv'  );
yiira.Initial.push( 129, 's'   );
yiira.Initial.push( 137, 'sh'  );
yiira.Initial.push( 145, 'shr' );
yiira.Initial.push( 150, 'shv' );
yiira.Initial.push( 160, 'shvr');
yiira.Initial.push( 165, 'sv'  );
yiira.Initial.push( 173, 'svr' );
yiira.Initial.push( 185, 'v'   );
yiira.Initial.push( 197, 'vh'  );
yiira.Initial.push( 202, 'w'   );
yiira.Initial.push( 210, 'wh'  );
yiira.Initial.push( 216, 'y'   );
yiira.Vowel.push(  36, 'a' );
yiira.Vowel.push(  72, 'aa' );
yiira.Vowel.push( 108, 'e' );
yiira.Vowel.push( 144, 'ee' );
yiira.Vowel.push( 180, 'i' );
yiira.Vowel.push( 216, 'ii' );

var chamax = new LanguageTable();

chamax.Basic.push( 34, 'CV' );
chamax.Basic.push( 36, 'V'  );
chamax.Alternate = chamax.Basic;

chamax.Initial.push( 12,  'm'   );
chamax.Initial.push( 25,  'mr'  );
chamax.Initial.push( 30,  'mv'  );
chamax.Initial.push( 40,  'mvr' );
chamax.Initial.push( 47,  'h'   );
chamax.Initial.push( 60,  'k'   );
chamax.Initial.push( 68,  'kh'  );
chamax.Initial.push( 80,  'khr' );
chamax.Initial.push( 90,  'kv'  );
chamax.Initial.push( 103, 'r'   );
chamax.Initial.push( 115, 'rh'  );
chamax.Initial.push( 120, 'rv'  );
chamax.Initial.push( 129, 's'   );
chamax.Initial.push( 137, 'ch'  );
chamax.Initial.push( 145, 'chr' );
chamax.Initial.push( 150, 'chv' );
chamax.Initial.push( 165, 'sv'  );
chamax.Initial.push( 185, 'x'   );
chamax.Initial.push( 197, 'xh'  );
chamax.Initial.push( 202, 'w'   );
chamax.Initial.push( 210, 'wh'  );
chamax.Initial.push( 216, 'y'   );
chamax.Vowel.push(  36, 'a' );
chamax.Vowel.push(  72, 'aa' );
chamax.Vowel.push( 108, 'e' );
chamax.Vowel.push( 144, 'ee' );
chamax.Vowel.push( 180, 'i' );
chamax.Vowel.push( 216, 'ii' );

var suerrat = new LanguageTable();
suerrat.Basic.push(  3, 'V'   );
suerrat.Basic.push( 10, 'VC'  );
suerrat.Basic.push( 28, 'CV'  );
suerrat.Basic.push( 36, 'CVC' );
suerrat.Alternate.push( 1, 'V'    );
suerrat.Alternate.push( 13, 'VC'  );
suerrat.Alternate.push( 29, 'CV'  );
suerrat.Alternate.push( 36, 'CVC' );

suerrat.Initial.push(   9, 'h'  );
suerrat.Initial.push(  53, 'k'  );
suerrat.Initial.push(  56, 'kr' );
suerrat.Initial.push(  84, 'l'  );
suerrat.Initial.push(  95, 'm'  );
suerrat.Initial.push( 120, 'n'  );
suerrat.Initial.push( 129, 'p'  );
suerrat.Initial.push( 146, 'r'  );
suerrat.Initial.push( 171, 's'  );
suerrat.Initial.push( 208, 't'  );
suerrat.Initial.push( 213, 'tr' );
suerrat.Initial.push( 216, 'ch' );

suerrat.Vowel.push(  60, 'a'   );
suerrat.Vowel.push(  62, "a'a" );
suerrat.Vowel.push(  64, "a'e" );
suerrat.Vowel.push(  66, "a'i" );
suerrat.Vowel.push(  68, "a'o" );
suerrat.Vowel.push(  70, "a'u" );
suerrat.Vowel.push(  73, 'au'  );
suerrat.Vowel.push( 111, 'e'   );
suerrat.Vowel.push( 119, "e'a" );
suerrat.Vowel.push( 121, "e'i" );
suerrat.Vowel.push( 123, "e'o" );
suerrat.Vowel.push( 125, "e'u" );
suerrat.Vowel.push( 152, 'i'   );
suerrat.Vowel.push( 162, "i'a" );
suerrat.Vowel.push( 164, "i'e" );
suerrat.Vowel.push( 166, "i'o" );
suerrat.Vowel.push( 170, "i'u" );
suerrat.Vowel.push( 174, "ii"  );
suerrat.Vowel.push( 188, "o"   );
suerrat.Vowel.push( 190, "o'i" );
suerrat.Vowel.push( 206, 'u'   );
suerrat.Vowel.push( 212, "u'i" );
suerrat.Vowel.push( 216, "u'o" ); 

suerrat.Ending.push(   4, 'd' );
suerrat.Ending.push(   8, 'h' );
suerrat.Ending.push(  21, 'k' );
suerrat.Ending.push(  68, 'l' );
suerrat.Ending.push(  90, 'm' );
suerrat.Ending.push( 124, 'n' );
suerrat.Ending.push( 128, 'ns');
suerrat.Ending.push( 137, 'p' );
suerrat.Ending.push( 176, 'r' );
suerrat.Ending.push( 194, 's' );
suerrat.Ending.push( 216, 't' );

var swordy = new LanguageTable();

swordy.Basic.push( 1, 'V' );
swordy.Basic.push( 6, 'VC' );
swordy.Basic.push( 14, 'CV' );
swordy.Basic.push( 36, 'CVC' );
swordy.Alternate.push( 3, 'VC' );
swordy.Alternate.push( 14, 'CV' );
swordy.Alternate.push( 36, 'CVC' );
swordy.Initial.push( 12, 'b' );
swordy.Initial.push( 14, 'bl' );
swordy.Initial.push( 16, 'br' );
swordy.Initial.push( 31, 'd' );
swordy.Initial.push( 45, 'f' );
swordy.Initial.push( 46, 'fl' );
swordy.Initial.push( 47, 'fr' );
swordy.Initial.push( 51, 'g' );
swordy.Initial.push( 52, 'gj' );
swordy.Initial.push( 54, 'gr' );
swordy.Initial.push( 61, 'h' );
swordy.Initial.push( 67, 'j' );
swordy.Initial.push( 78, 'k' );
swordy.Initial.push( 79, 'kj' );
swordy.Initial.push( 81, 'kl' );
swordy.Initial.push( 97, 'l' );
swordy.Initial.push( 108, 'm' );
swordy.Initial.push( 120, 'n' );
swordy.Initial.push( 128, 'p' );
swordy.Initial.push( 129, 'pr' );
swordy.Initial.push( 145, 'r' );
swordy.Initial.push( 160, 's' );
swordy.Initial.push( 161, 'sj' );
swordy.Initial.push( 164, 'sk' );
swordy.Initial.push( 166, 'sl' );
swordy.Initial.push( 167, 'sm' );
swordy.Initial.push( 168, 'sn' );
swordy.Initial.push( 170, 'sp' );
swordy.Initial.push( 175, 'st' );
swordy.Initial.push( 177, 'sv' );
swordy.Initial.push( 196, 't' );
swordy.Initial.push( 200, 'tr' );
swordy.Initial.push( 216, 'v' );
swordy.Vowel.push( 1, 'au' );
swordy.Vowel.push( 2, 'ie' );
swordy.Vowel.push( 4, '�' );
swordy.Vowel.push( 11, '�' );
swordy.Vowel.push( 13, '�' );
swordy.Vowel.push( 18, '�' );
swordy.Vowel.push( 60, 'a' );
swordy.Vowel.push( 126, 'e' );
swordy.Vowel.push( 168, 'i' );
swordy.Vowel.push( 193, 'o' );
swordy.Vowel.push( 207, 'u' );
swordy.Vowel.push( 216, 'y' );
swordy.Ending.push( 3, 'b' );
swordy.Ending.push( 12, 'd' );
swordy.Ending.push( 13, 'dd' );
swordy.Ending.push( 15, 'f' );
swordy.Ending.push( 27, 'g' );
swordy.Ending.push( 29, 'gg' );
swordy.Ending.push( 30, 'gn' );
swordy.Ending.push( 31, 'gs' );
swordy.Ending.push( 32, 'gt' );
swordy.Ending.push( 44, 'k' );
swordy.Ending.push( 49, 'kk' );
swordy.Ending.push( 50, 'ks' );
swordy.Ending.push( 51, 'kt' );
swordy.Ending.push( 72, 'l' );
swordy.Ending.push( 73, 'ld' );
swordy.Ending.push( 74, 'll' );
swordy.Ending.push( 75, 'lm' );
swordy.Ending.push( 76, 'lp' );
swordy.Ending.push( 78, 'lt' );
swordy.Ending.push( 79, 'lv' );
swordy.Ending.push( 85, 'm' );
swordy.Ending.push( 110, 'n' );
swordy.Ending.push( 112, 'nd' );
swordy.Ending.push( 113, 'ndt' );
swordy.Ending.push( 126, 'ng' );
swordy.Ending.push( 131, 'nn' );
swordy.Ending.push( 132, 'nsk' );
swordy.Ending.push( 134, 'nt' );
swordy.Ending.push( 139, 'p' );
swordy.Ending.push( 140, 'psk' );
swordy.Ending.push( 170, 'r' );
swordy.Ending.push( 173, 'rd' );
swordy.Ending.push( 174, 'rk' );
swordy.Ending.push( 175, 'rsk' );
swordy.Ending.push( 177, 'rt' );
swordy.Ending.push( 178, 'rv' );
swordy.Ending.push( 182, 's' );
swordy.Ending.push( 184, 'sk' );
swordy.Ending.push( 185, 'sp' );
swordy.Ending.push( 187, 'st' );
swordy.Ending.push( 210, 't' );
swordy.Ending.push( 215, 'tt' );
swordy.Ending.push( 216, 'v' );

var sylean = new LanguageTable();

sylean.Basic.push( 9,   'CV' )
sylean.Basic.push( 30,  'CVC' )
sylean.Basic.push( 35,  'VC' )
sylean.Basic.push( 36,  'V' )
sylean.Alternate.push( 8,  'CV' )
sylean.Alternate.push( 28, 'CVC' )
sylean.Alternate.push( 33, 'VC' )
sylean.Alternate.push( 36, 'V' )
sylean.Initial.push(  34, 'm' )
sylean.Initial.push(  66, 'k' )
sylean.Initial.push(  90, 'd' )
sylean.Initial.push( 110, 's' )
sylean.Initial.push( 136, 'x' )
sylean.Initial.push( 154, 'l' )
sylean.Initial.push( 168, 'sh' )
sylean.Initial.push( 178, 'kh' )
sylean.Initial.push( 184, 'n' )
sylean.Initial.push( 190, 'v' )
sylean.Initial.push( 196, 'z' )
sylean.Initial.push( 200, 'g' )
sylean.Initial.push( 204, 'h' )
sylean.Initial.push( 208, 'j' )
sylean.Initial.push( 210, 'rh' )
sylean.Initial.push( 212, 'p' )
sylean.Initial.push( 214, 'b' )
sylean.Initial.push( 216, 't' )
sylean.Vowel.push(  55, 'a'  )
sylean.Vowel.push(  90, 'ii' )
sylean.Vowel.push( 121, 'e'  )
sylean.Vowel.push( 150, 'i'  )
sylean.Vowel.push( 170, 'o'  )
sylean.Vowel.push( 182, 'aa' )
sylean.Vowel.push( 190, 'ea' )
sylean.Vowel.push( 196, 'u'  )
sylean.Vowel.push( 202, 'ia' )
sylean.Vowel.push( 206, 'ua' )
sylean.Vowel.push( 211, 'uu' )
sylean.Vowel.push( 214, 'ij' )
sylean.Vowel.push( 216, 'ou' )
sylean.Ending.push(  52, 'n' )
sylean.Ending.push(  82, 'h' )
sylean.Ending.push( 104, 'k' )
sylean.Ending.push( 126, 'l' )
sylean.Ending.push( 148, 'm' )
sylean.Ending.push( 164, 'g' )
sylean.Ending.push( 178, 's' )
sylean.Ending.push( 188, 'r' )
sylean.Ending.push( 196, 'v' )
sylean.Ending.push( 204, 'x' )
sylean.Ending.push( 209, 'd' )
sylean.Ending.push( 214, 'p' )
sylean.Ending.push( 216, 'z' )


// aekhu vargr
var aekhu = new LanguageTable();

aekhu.Basic.push( 4, 'V' );
aekhu.Basic.push( 18, 'VC' );
aekhu.Basic.push( 22, 'CV' );
aekhu.Basic.push( 36, 'CVC' );
aekhu.Alternate.push( 18, 'CV' );
aekhu.Alternate.push( 36, 'CVC' );

aekhu.Initial.push( 9, 'd' );
aekhu.Initial.push( 16, 'dh' );
aekhu.Initial.push( 21, 'dz' );
aekhu.Initial.push( 29, 'f' );
aekhu.Initial.push( 51, 'g' );
aekhu.Initial.push( 57, 'gh' );
aekhu.Initial.push( 60, 'gn' );
aekhu.Initial.push( 61, 'gr' );
aekhu.Initial.push( 64, 'gv' );
aekhu.Initial.push( 69, 'gz' );
aekhu.Initial.push( 73, 'h' );
aekhu.Initial.push( 95, 'k' );
aekhu.Initial.push( 99, 'kf' );
aekhu.Initial.push( 108, 'kh' );
aekhu.Initial.push( 109, 'kk' );
aekhu.Initial.push( 110, 'kl' );
aekhu.Initial.push( 114, 'kn' );
aekhu.Initial.push( 119, 'ks' );
aekhu.Initial.push( 120, 'kv' );
aekhu.Initial.push( 121, 'kz' );
aekhu.Initial.push( 126, 'l' );
aekhu.Initial.push( 133, 'll' );
aekhu.Initial.push( 143, 'n' );
aekhu.Initial.push( 145, 'ng' );
aekhu.Initial.push( 153, 'r' );
aekhu.Initial.push( 159, 'rr' );
aekhu.Initial.push( 171, 's' );
aekhu.Initial.push( 182, 't' );
aekhu.Initial.push( 192, 'th' );
aekhu.Initial.push( 193, 'ts' );
aekhu.Initial.push( 204, 'v' );
aekhu.Initial.push( 205, 'w' );
aekhu.Initial.push( 216, 'z' );

aekhu.Vowel.push( 42, 'a' );
aekhu.Vowel.push( 43, 'aa' );
aekhu.Vowel.push( 76, 'ae' );
aekhu.Vowel.push( 77, 'au' );
aekhu.Vowel.push( 94, 'e' );
aekhu.Vowel.push( 108, 'i' );
aekhu.Vowel.push( 109, 'ie' );
aekhu.Vowel.push( 143, 'o' );
aekhu.Vowel.push( 158, 'oe' );
aekhu.Vowel.push( 172, 'ou' );
aekhu.Vowel.push( 196, 'u' );
aekhu.Vowel.push( 216, 'ue' );

aekhu.Ending.push( 2, 'd' );
aekhu.Ending.push( 3, 'dh' );
aekhu.Ending.push( 4, 'dhn' );
aekhu.Ending.push( 5, 'dt' );
aekhu.Ending.push( 9, 'dz' );
aekhu.Ending.push( 10, 'dzn' );
aekhu.Ending.push( 11, 'f' );
aekhu.Ending.push( 22, 'g' );
aekhu.Ending.push( 23, 'gg' );
aekhu.Ending.push( 31, 'gh' );
aekhu.Ending.push( 32, 'ghd' );
aekhu.Ending.push( 35, 'ghz' );
aekhu.Ending.push( 36, 'gn' );
aekhu.Ending.push( 37, 'gr' );
aekhu.Ending.push( 40, 'gz' );
aekhu.Ending.push( 41, 'gzk' );
aekhu.Ending.push( 42, 'hrr' );
aekhu.Ending.push( 60, 'k' );
aekhu.Ending.push( 67, 'kh' );
aekhu.Ending.push( 70, 'khs' );
aekhu.Ending.push( 71, 'khsk' );
aekhu.Ending.push( 72, 'khsn' );
aekhu.Ending.push( 74, 'ks' );
aekhu.Ending.push( 75, 'ksk' );
aekhu.Ending.push( 86, 'l' );
aekhu.Ending.push( 87, 'lg' );
aekhu.Ending.push( 88, 'lk' );
aekhu.Ending.push( 92, 'll' );
aekhu.Ending.push( 93, 'lt' );
aekhu.Ending.push( 113, 'n' );
aekhu.Ending.push( 128, 'ng' );
aekhu.Ending.push( 129, 'ngd' );
aekhu.Ending.push( 130, 'ngg' );
aekhu.Ending.push( 131, 'nghk' );
aekhu.Ending.push( 132, 'ngk' );
aekhu.Ending.push( 133, 'ngn' );
aekhu.Ending.push( 134, 'nz' );
aekhu.Ending.push( 152, 'r' );
aekhu.Ending.push( 153, 'rdh' );
aekhu.Ending.push( 154, 'rds' );
aekhu.Ending.push( 156, 'rg' );
aekhu.Ending.push( 160, 'rgh' );
aekhu.Ending.push( 161, 'rghg' );
aekhu.Ending.push( 162, 'rk' );
aekhu.Ending.push( 163, 'rngz' );
aekhu.Ending.push( 172, 'rr' );
aekhu.Ending.push( 175, 'rrg' );
aekhu.Ending.push( 176, 'rrgh' );
aekhu.Ending.push( 177, 'rrs' );
aekhu.Ending.push( 182, 'rs' );
aekhu.Ending.push( 190, 'rz' );
aekhu.Ending.push( 191, 'rzn' );
aekhu.Ending.push( 196, 's' );
aekhu.Ending.push( 197, 't' );
aekhu.Ending.push( 204, 'th' );
aekhu.Ending.push( 205, 'ts' );
aekhu.Ending.push( 206, 'v' );
aekhu.Ending.push( 214, 'z' );
aekhu.Ending.push( 215, 'zg' );
aekhu.Ending.push( 216, 'zn' );



// gvegh vargr
var vargr = new LanguageTable();

vargr.Basic.push( 4, 'V' );
vargr.Basic.push( 18, 'VC' );
vargr.Basic.push( 22, 'CV' );
vargr.Basic.push( 36, 'CVC' );
vargr.Alternate.push( 18, 'CV' );
vargr.Alternate.push( 36, 'CVC' );
vargr.Initial.push( 9, 'd' );
vargr.Initial.push( 18, 'dh' );
vargr.Initial.push( 23, 'dz' );
vargr.Initial.push( 30, 'f' );
vargr.Initial.push( 48, 'g' );
vargr.Initial.push( 59, 'gh' );
vargr.Initial.push( 62, 'gn' );
vargr.Initial.push( 69, 'gv' );
vargr.Initial.push( 73, 'gz' );
vargr.Initial.push( 91, 'k' );
vargr.Initial.push( 96, 'kf' );
vargr.Initial.push( 107, 'kh' );
vargr.Initial.push( 113, 'kn' );
vargr.Initial.push( 120, 'ks' );
vargr.Initial.push( 124, 'l' );
vargr.Initial.push( 132, 'll' );
vargr.Initial.push( 139, 'n' );
vargr.Initial.push( 144, 'ng' );
vargr.Initial.push( 155, 'r' );
vargr.Initial.push( 163, 'rr' );
vargr.Initial.push( 174, 's' );
vargr.Initial.push( 181, 't' );
vargr.Initial.push( 190, 'th' );
vargr.Initial.push( 194, 'ts' );
vargr.Initial.push( 204, 'v' );
vargr.Initial.push( 216, 'z' );
vargr.Vowel.push( 42, 'a' );
vargr.Vowel.push( 76, 'ae' );
vargr.Vowel.push( 92, 'e' );
vargr.Vowel.push( 102, 'i' );
vargr.Vowel.push( 136, 'o' );
vargr.Vowel.push( 152, 'oe' );
vargr.Vowel.push( 168, 'ou' );
vargr.Vowel.push( 192, 'u' );
vargr.Vowel.push( 216, 'ue' );
vargr.Ending.push( 5, 'dh' );
vargr.Ending.push( 10, 'dz' );
vargr.Ending.push( 25, 'g' );
vargr.Ending.push( 35, 'gh' );
vargr.Ending.push( 40, 'ghz' );
vargr.Ending.push( 45, 'gz' );
vargr.Ending.push( 55, 'k' );
vargr.Ending.push( 65, 'kh' );
vargr.Ending.push( 70, 'khs' );
vargr.Ending.push( 76, 'ks' );
vargr.Ending.push( 86, 'l' );
vargr.Ending.push( 91, 'll' );
vargr.Ending.push( 116, 'n' );
vargr.Ending.push( 141, 'ng' );
vargr.Ending.push( 156, 'r' );
vargr.Ending.push( 171, 'rr' );
vargr.Ending.push( 176, 'rrg' );
vargr.Ending.push( 181, 'rrgh' );
vargr.Ending.push( 186, 'rs' );
vargr.Ending.push( 191, 'rz' );
vargr.Ending.push( 196, 's' );
vargr.Ending.push( 201, 'th' );
vargr.Ending.push( 106, 'ts' );
vargr.Ending.push( 216, 'z' );

// logaksu vargr
var logaksu = new LanguageTable();

logaksu.Basic.push( 11, 'V' );
logaksu.Basic.push( 13, 'VC' );
logaksu.Basic.push( 20, 'CV' );
logaksu.Basic.push( 36, 'CVC' );
logaksu.Alternate.push( 13, 'V' );
logaksu.Alternate.push( 21, 'VC' );
logaksu.Alternate.push( 25, 'CV' );
logaksu.Alternate.push( 36, 'CVC' );

logaksu.Initial.push( 10, 'dh' );
logaksu.Initial.push( 18, 'dz' );
logaksu.Initial.push( 31, 'f' );
logaksu.Initial.push( 54, 'g' );
logaksu.Initial.push( 75, 'gh' );
logaksu.Initial.push( 77, 'ghz' );
logaksu.Initial.push( 79, 'gr' );
logaksu.Initial.push( 81, 'gz' );
logaksu.Initial.push( 99, 'k' );
logaksu.Initial.push( 101, 'kf' );
logaksu.Initial.push( 108, 'kh' );
logaksu.Initial.push( 112, 'l' );
logaksu.Initial.push( 114, 'll' );
logaksu.Initial.push( 127, 'n' );
logaksu.Initial.push( 130, 'ng' );
logaksu.Initial.push( 142, 'r' );
logaksu.Initial.push( 145, 'rr' );
logaksu.Initial.push( 167, 's' );
logaksu.Initial.push( 180, 't' );
logaksu.Initial.push( 185, 'th' );
logaksu.Initial.push( 188, 'ts' );
logaksu.Initial.push( 200, 'v' );
logaksu.Initial.push( 216, 'z' );

logaksu.Vowel.push( 33, 'a' );
logaksu.Vowel.push( 78, 'ae' );
logaksu.Vowel.push( 95, 'e' );
logaksu.Vowel.push( 113, 'i' );
logaksu.Vowel.push( 144, 'o' );
logaksu.Vowel.push( 147, 'oa' );
logaksu.Vowel.push( 158, 'oe' );
logaksu.Vowel.push( 180, 'ou' );
logaksu.Vowel.push( 201, 'u' );
logaksu.Vowel.push( 216, 'ue' );

logaksu.Ending.push( 2, 'd' );
logaksu.Ending.push( 5, 'dh' );
logaksu.Ending.push( 7, 'dz' );
logaksu.Ending.push( 22, 'g' );
logaksu.Ending.push( 28, 'gh' );
logaksu.Ending.push( 37, 'ghz' );
logaksu.Ending.push( 39, 'gs' );
logaksu.Ending.push( 47, 'gz' );
logaksu.Ending.push( 58, 'k' );
logaksu.Ending.push( 70, 'kh' );
logaksu.Ending.push( 73, 'khs' );
logaksu.Ending.push( 81, 'ks' );
logaksu.Ending.push( 87, 'l' );
logaksu.Ending.push( 101, 'll' );
logaksu.Ending.push( 121, 'n' );
logaksu.Ending.push( 123, 'ndz' );
logaksu.Ending.push( 125, 'ntz' );
logaksu.Ending.push( 149, 'ng' );
logaksu.Ending.push( 166, 'r' );
logaksu.Ending.push( 168, 'rk' );
logaksu.Ending.push( 189, 'rr' );
logaksu.Ending.push( 191, 'rs' );
logaksu.Ending.push( 194, 'rz' );
logaksu.Ending.push( 196, 's' );
logaksu.Ending.push( 199, 'th' );
logaksu.Ending.push( 205, 'ts' );
logaksu.Ending.push( 216, 'z' );

// vuakedh vargr
var vuakedh = new LanguageTable();

vuakedh.Basic.push( 4, 'V' );
vuakedh.Basic.push( 18, 'VC' );
vuakedh.Basic.push( 22, 'CV' );
vuakedh.Basic.push( 36, 'CVC' );
vuakedh.Alternate.push( 18, 'CV' );
vuakedh.Alternate.push( 36, 'CVC' );

vuakedh.Initial.push( 5, 'b' );
vuakedh.Initial.push( 13, 'bh' );
vuakedh.Initial.push( 15, 'bhr' );
vuakedh.Initial.push( 20, 'dz' );
vuakedh.Initial.push( 28, 'f' );
vuakedh.Initial.push( 36, 'g' );
vuakedh.Initial.push( 63, 'gh' );
vuakedh.Initial.push( 65, 'ghf' );
vuakedh.Initial.push( 67, 'ghz' );
vuakedh.Initial.push( 87, 'k' );
vuakedh.Initial.push( 89, 'kgh' );
vuakedh.Initial.push( 105, 'kh' );
vuakedh.Initial.push( 107, 'kn' );
vuakedh.Initial.push( 109, 'm' );
vuakedh.Initial.push( 111, 'p' );
vuakedh.Initial.push( 127, 'r' );
vuakedh.Initial.push( 135, 'rr' );
vuakedh.Initial.push( 137, 'rrd' );
vuakedh.Initial.push( 139, 'rrg' );
vuakedh.Initial.push( 141, 'rrv' );
vuakedh.Initial.push( 163, 's' );
vuakedh.Initial.push( 165, 'shk' );
vuakedh.Initial.push( 168, 't' );
vuakedh.Initial.push( 173, 'th' );
vuakedh.Initial.push( 175, 'thr' );
vuakedh.Initial.push( 179, 'ts' );
vuakedh.Initial.push( 194, 'v' );
vuakedh.Initial.push( 197, 'vr' );
vuakedh.Initial.push( 202, 'y' );
vuakedh.Initial.push( 210, 'z' );
vuakedh.Initial.push( 211, 'zy' );
vuakedh.Initial.push( 214, 'zh' );
vuakedh.Initial.push( 216, 'zhd' );

vuakedh.Vowel.push( 41, 'a' );
vuakedh.Vowel.push( 61, 'ae' );
vuakedh.Vowel.push( 63, 'ai' );
vuakedh.Vowel.push( 65, 'au' );
vuakedh.Vowel.push( 97, 'e' );
vuakedh.Vowel.push( 99, 'ee' );
vuakedh.Vowel.push( 101, 'ei' );
vuakedh.Vowel.push( 103, 'eu' );
vuakedh.Vowel.push( 122, 'i' );
vuakedh.Vowel.push( 124, 'ie' );
vuakedh.Vowel.push( 148, 'o' );
vuakedh.Vowel.push( 152, 'oe' );
vuakedh.Vowel.push( 183, 'ou' );
vuakedh.Vowel.push( 196, 'u' );
vuakedh.Vowel.push( 199, 'ua' );
vuakedh.Vowel.push( 204, 'ue' );
vuakedh.Vowel.push( 206, 'ui' );
vuakedh.Vowel.push( 210, 'uu' );
vuakedh.Vowel.push( 212, 'uy' );
vuakedh.Vowel.push( 214, 'y' );
vuakedh.Vowel.push( 216, 'ye' );

vuakedh.Ending.push( 4, 'b' );
vuakedh.Ending.push( 11, 'bh' );
vuakedh.Ending.push( 13, 'bhr' );
vuakedh.Ending.push( 17, 'd' );
vuakedh.Ending.push( 19, 'dh' );
vuakedh.Ending.push( 27, 'f' );
vuakedh.Ending.push( 57, 'g' );
vuakedh.Ending.push( 84, 'gh' );
vuakedh.Ending.push( 86, 'ghf' );
vuakedh.Ending.push( 94, 'ghz' );
vuakedh.Ending.push( 102, 'h' );
vuakedh.Ending.push( 119, 'k' );
vuakedh.Ending.push( 121, 'kgh' );
vuakedh.Ending.push( 131, 'kh' );
vuakedh.Ending.push( 133, 'l' );
vuakedh.Ending.push( 135, 'll' );
vuakedh.Ending.push( 145, 'm' );
vuakedh.Ending.push( 153, 'n' );
vuakedh.Ending.push( 155, 'ng' );
vuakedh.Ending.push( 183, 'r' );
vuakedh.Ending.push( 185, 'rgh' );
vuakedh.Ending.push( 187, 'rkh' );
vuakedh.Ending.push( 189, 'rr' );
vuakedh.Ending.push( 191, 'rrd' );
vuakedh.Ending.push( 193, 'rrg' );
vuakedh.Ending.push( 195, 'rrv' );
vuakedh.Ending.push( 199, 's' );
vuakedh.Ending.push( 202, 't' );
vuakedh.Ending.push( 206, 'th' );
vuakedh.Ending.push( 207, 'thr' );
vuakedh.Ending.push( 214, 'y' );
vuakedh.Ending.push( 216, 'zhd' );

var vegan = new LanguageTable();
vegan.Basic.push( 1, 'V' );
vegan.Basic.push( 9, 'VC' );
vegan.Basic.push( 18, 'CV' );
vegan.Basic.push( 36, 'CVC' );
vegan.Alternate.push( 1, 'V' );
vegan.Alternate.push( 9, 'VC' );
vegan.Alternate.push( 18, 'CV' );
vegan.Alternate.push( 36, 'CVC' );
vegan.Initial.push( 5, 'ch' );
vegan.Initial.push( 9, 'dh' );
vegan.Initial.push( 13, 'd' );
vegan.Initial.push( 17, 'dw' );
vegan.Initial.push( 32, 'dz' );
vegan.Initial.push( 36, 'g' );
vegan.Initial.push( 41, 'gw' );
vegan.Initial.push( 56, 'h' );
vegan.Initial.push( 81, 'hs' );
vegan.Initial.push( 86, 'k' );
vegan.Initial.push( 90, 'kw' );
vegan.Initial.push( 105, 'l' );
vegan.Initial.push( 120, 'm' );
vegan.Initial.push( 130, 'n' );
vegan.Initial.push( 134, 's' );
vegan.Initial.push( 149, 'sh' );
vegan.Initial.push( 164, 't' );
vegan.Initial.push( 168, 'ts' );
vegan.Initial.push( 189, 'ty' );
vegan.Initial.push( 193, 'vy' );
vegan.Initial.push( 197, 'w' );
vegan.Initial.push( 202, 'y' );
vegan.Initial.push( 206, 'zh' );
vegan.Initial.push( 216, 'z' );
vegan.Vowel.push( 55, 'a' );
vegan.Vowel.push( 72, 'e' );
vegan.Vowel.push( 113, 'i' );
vegan.Vowel.push( 130, 'ia' );
vegan.Vowel.push( 137, 'ie' );
vegan.Vowel.push( 161, 'o' );
vegan.Vowel.push( 192, 'u' );
vegan.Vowel.push( 202, 'ua' );
vegan.Vowel.push( 216, 'ui' );
vegan.Ending.push( 6, 'dh' );
vegan.Ending.push( 11, 'gz' );
vegan.Ending.push( 26, 'h' );
vegan.Ending.push( 41, 'k' );
vegan.Ending.push( 61, 'l' );
vegan.Ending.push( 71, 'm' );
vegan.Ending.push( 121, 'n' );
vegan.Ending.push( 141, 'r' );
vegan.Ending.push( 161, 'rr' );
vegan.Ending.push( 171, 's' );
vegan.Ending.push( 196, 'sh' );
vegan.Ending.push( 201, 'ss' );
vegan.Ending.push( 206, 't' );
vegan.Ending.push( 211, 'th' );
vegan.Ending.push( 216, 'w' );

var virushi = new LanguageTable();
virushi.Basic.push( 1, 'V' );
virushi.Basic.push( 3, 'CV' );
virushi.Basic.push( 10, 'VC' );
virushi.Basic.push( 36, 'CVC' );
virushi.Alternate.push( 15, 'CV' );
virushi.Alternate.push( 30, 'CVC' );
virushi.Alternate.push( 36, 'V' );
virushi.Initial.push( 10, 'dn' );
virushi.Initial.push( 20, 'f' );
virushi.Initial.push( 30, 'gh' );
virushi.Initial.push( 40, 'gn' );
virushi.Initial.push( 50, 'h' );
virushi.Initial.push( 80, 'l' );
virushi.Initial.push( 110, 'q' );
virushi.Initial.push( 120, 'r' );
virushi.Initial.push( 130, 's' );
virushi.Initial.push( 160, 'sh' );
virushi.Initial.push( 170, 'th' );
virushi.Initial.push( 180, 'tl' );
virushi.Initial.push( 190, 'v' );
virushi.Initial.push( 200, 'w' );
virushi.Initial.push( 216, 'y' );
virushi.Vowel.push( 9, 'e' );
virushi.Vowel.push( 100, 'u' );
virushi.Vowel.push( 160, 'a' );
virushi.Vowel.push( 216, 'i' );
virushi.Ending.push( 10, 'd' );
virushi.Ending.push( 20, 'gh' );
virushi.Ending.push( 30, 'h' );
virushi.Ending.push( 45, 'n' );
virushi.Ending.push( 65, 'l' );
virushi.Ending.push( 95, 'q' );
virushi.Ending.push( 170, 'r' );
virushi.Ending.push( 216, 'sh' );

var zhodani = new LanguageTable();

zhodani.Basic.push( 3, 'V' );
zhodani.Basic.push( 6, 'CV' );
zhodani.Basic.push( 15, 'VC' );
zhodani.Basic.push( 36, 'CVC' );
zhodani.Alternate.push( 6, 'V' );
zhodani.Alternate.push( 12, 'CV' );
zhodani.Alternate.push( 18, 'VC' );
zhodani.Alternate.push( 36, 'CVC' );
zhodani.Initial.push( 6, 'b' );
zhodani.Initial.push( 8, 'bl' );
zhodani.Initial.push( 13, 'br' );
zhodani.Initial.push( 25, 'ch' );
zhodani.Initial.push( 32, 'cht' );
zhodani.Initial.push( 41, 'd' );
zhodani.Initial.push( 48, 'dl' );
zhodani.Initial.push( 53, 'dr' );
zhodani.Initial.push( 58, 'f' );
zhodani.Initial.push( 61, 'fl' );
zhodani.Initial.push( 64, 'fr' );
zhodani.Initial.push( 71, 'j' );
zhodani.Initial.push( 76, 'jd' );
zhodani.Initial.push( 81, 'k' );
zhodani.Initial.push( 83, 'kl' );
zhodani.Initial.push( 85, 'kr' );
zhodani.Initial.push( 88, 'l' );
zhodani.Initial.push( 90, 'm' );
zhodani.Initial.push( 98, 'n' );
zhodani.Initial.push( 105, 'p' );
zhodani.Initial.push( 112, 'pl' );
zhodani.Initial.push( 115, 'pr' );
zhodani.Initial.push( 117, 'q' );
zhodani.Initial.push( 119, 'ql' );
zhodani.Initial.push( 121, 'qr' );
zhodani.Initial.push( 126, 'r' );
zhodani.Initial.push( 133, 's' );
zhodani.Initial.push( 140, 'sh' );
zhodani.Initial.push( 147, 'sht' );
zhodani.Initial.push( 152, 't' );
zhodani.Initial.push( 159, 'st' );
zhodani.Initial.push( 169, 'tl' );
zhodani.Initial.push( 172, 'ts' );
zhodani.Initial.push( 177, 'v' );
zhodani.Initial.push( 179, 'vl' );
zhodani.Initial.push( 181, 'vr' );
zhodani.Initial.push( 184, 'y' );
zhodani.Initial.push( 189, 'z' );
zhodani.Initial.push( 199, 'zd' );
zhodani.Initial.push( 206, 'zh' );
zhodani.Initial.push( 216, 'zhd' );
zhodani.Vowel.push( 43, 'a' );
zhodani.Vowel.push( 105, 'e' );
zhodani.Vowel.push( 140, 'i' );
zhodani.Vowel.push( 168, 'ia' );
zhodani.Vowel.push( 192, 'ie' );
zhodani.Vowel.push( 210, 'o' );
zhodani.Vowel.push( 216, 'r' );
zhodani.Ending.push( 2, 'b' );
zhodani.Ending.push( 9, 'bl' );
zhodani.Ending.push( 16, 'br' );
zhodani.Ending.push( 21, 'ch' );
zhodani.Ending.push( 25, 'd' );
zhodani.Ending.push( 32, 'dl' );
zhodani.Ending.push( 39, 'dr' );
zhodani.Ending.push( 44, 'f' );
zhodani.Ending.push( 49, 'fl' );
zhodani.Ending.push( 54, 'fr' );
zhodani.Ending.push( 58, 'j' );
zhodani.Ending.push( 60, 'k' );
zhodani.Ending.push( 64, 'kl' );
zhodani.Ending.push( 66, 'kr' );
zhodani.Ending.push( 78, 'l' );
zhodani.Ending.push( 80, 'm' );
zhodani.Ending.push( 82, 'n' );
zhodani.Ending.push( 89, 'nch' );
zhodani.Ending.push( 94, 'nj' );
zhodani.Ending.push( 99, 'ns' );
zhodani.Ending.push( 106, 'nsh' );
zhodani.Ending.push( 110, 'nt' );
zhodani.Ending.push( 114, 'nts' );
zhodani.Ending.push( 119, 'nz' );
zhodani.Ending.push( 126, 'nzh' );
zhodani.Ending.push( 128, 'p' );
zhodani.Ending.push( 135, 'pl' );
zhodani.Ending.push( 142, 'pr' );
zhodani.Ending.push( 144, 'q' );
zhodani.Ending.push( 146, 'ql' );
zhodani.Ending.push( 148, 'qr' );
zhodani.Ending.push( 153, 'r' );
zhodani.Ending.push( 160, 'sh' );
zhodani.Ending.push( 164, 't' );
zhodani.Ending.push( 171, 'ts' );
zhodani.Ending.push( 180, 'tl' );
zhodani.Ending.push( 185, 'v' );
zhodani.Ending.push( 189, 'vl' );
zhodani.Ending.push( 194, 'vr' );
zhodani.Ending.push( 203, 'z' );
zhodani.Ending.push( 210, 'zh' );
zhodani.Ending.push( 216, "\'" );

var khazad = new LanguageTable();

khazad.Basic.push( 15, 'CV' );
khazad.Basic.push( 30, 'CVC' );
khazad.Basic.push( 36, 'V' );
khazad.Alternate.push( 15, 'CV' );
khazad.Alternate.push( 30, 'CVC' );
khazad.Alternate.push( 36, 'CV' );
// b, g, kh, l, m, n, r, z
khazad.Initial.push( 25, 'b' );
khazad.Initial.push( 50, 'g' );
khazad.Initial.push( 80, 'kh' );
khazad.Initial.push( 105, 'l' );
khazad.Initial.push( 135, 'm' );
khazad.Initial.push( 165, 'n' );
khazad.Initial.push( 190, 'r' );
khazad.Initial.push( 216, 'z' );
//a, ai, e, i, ia, o, u, uu
khazad.Vowel.push( 43,  'a' );
khazad.Vowel.push( 100, 'ai' );
khazad.Vowel.push( 120, 'e'  );
khazad.Vowel.push( 140, 'i'  );
khazad.Vowel.push( 160, 'ia' );
khazad.Vowel.push( 180, 'o'  );
khazad.Vowel.push( 200, 'u'  );
khazad.Vowel.push( 216, 'uu' );
//d, k, m
khazad.Ending.push( 72, 'd'  );
khazad.Ending.push( 144, 'k'  );
khazad.Ending.push( 216, 'm'  );

var tupi = new LanguageTable();

tupi.Basic.push( 10, 'CV' );
tupi.Basic.push( 25, 'CVC' );
tupi.Basic.push( 32, 'VC' );
tupi.Basic.push( 36, 'V' );
tupi.Alternate.push( 10, 'CV' );
tupi.Alternate.push( 30, 'CVC' );
tupi.Alternate.push( 34, 'VC' );
tupi.Alternate.push( 36, 'V' );

tupi.Initial.push( 18, 'p' );
tupi.Initial.push( 36, 't' );
tupi.Initial.push( 54, 'k' );
tupi.Initial.push( 72, '\'' );
tupi.Initial.push( 90, 's' );
tupi.Initial.push( 108, 'y' );
tupi.Initial.push( 126, 'r' );
tupi.Initial.push( 144, 'n' );
tupi.Initial.push( 162, 'd' );
tupi.Initial.push( 180, 'b' );
tupi.Initial.push( 198, 'm' );
tupi.Initial.push( 216, 't' );

tupi.Vowel.push( 25,  'i'  );
tupi.Vowel.push( 50,  'y'  );
tupi.Vowel.push( 75,  'u'  );
tupi.Vowel.push( 100,  'e'  );
tupi.Vowel.push( 125, 'o'  );
tupi.Vowel.push( 150, 'a'  );
tupi.Vowel.push( 160,  '�' );
tupi.Vowel.push( 170, 'yh' );
tupi.Vowel.push( 180, '�' );
tupi.Vowel.push( 190, 'oh' );
tupi.Vowel.push( 200, '�' );
tupi.Vowel.push( 216, '�' );

tupi.Ending.push( 30, 'g' );
tupi.Ending.push( 60, 'y' );
tupi.Ending.push( 90, 'n' );
tupi.Ending.push( 120, 'r' );
tupi.Ending.push( 150, 's' );
tupi.Ending.push( 180, 'k' );
tupi.Ending.push( 205, 't' );
tupi.Ending.push( 216, 'b' );

var sigka = new LanguageTable();
sigka.Basic.push( 12, 'CV' );
sigka.Basic.push( 24, 'CVC' );
sigka.Basic.push( 36, 'VC' );
sigka.Alternate.push( 28, 'CV' );
sigka.Alternate.push( 36, 'CVC' );

sigka.Initial.push(  25, 's' );
sigka.Initial.push(  45, 'l' );
sigka.Initial.push(  65, 'm' );
sigka.Initial.push(  85, 'v' );
sigka.Initial.push( 105, 'w' );
sigka.Initial.push( 125, 'd' );
sigka.Initial.push( 145, 'j' );
sigka.Initial.push( 165, 'k' );
sigka.Initial.push( 185, 'g' );
sigka.Initial.push( 196, 'h' );
sigka.Initial.push( 206, 'n' );
sigka.Initial.push( 216, 'p' );

sigka.Vowel.push( 80, 'a'  );
sigka.Vowel.push( 120, 'aa' );
sigka.Vowel.push( 180, 'i' );
sigka.Vowel.push( 216, 'u' );

sigka.Ending.push(  25, 'f' );
sigka.Ending.push(  50, 'h' );
sigka.Ending.push(  75, 'j' );
sigka.Ending.push(  96, 'k' );
sigka.Ending.push( 116, 'l' );
sigka.Ending.push( 136, 'n' );
sigka.Ending.push( 156, 'p' );
sigka.Ending.push( 176, 't' );
sigka.Ending.push( 196, 'x' );
sigka.Ending.push( 216, 'y' );


function setLanguage( langsel )
{
   arr = vil;   // default to Vilani

   if ( langsel == 'Ael Yael' )      arr = ael;
   if ( langsel == 'Aekhu' )         arr = aekhu;
   if ( langsel == 'Amindii' )       arr = amindii;
   if ( langsel == 'Aslan'   )       arr = aslan;
   if ( langsel == 'Batrachian' )    arr = batrachian;
   if ( langsel == 'Bwap' )          arr = bwap;
   if ( langsel == 'Chamax' )        arr = chamax;
   if ( langsel == 'Darmine' )       arr = darmine;
   if ( langsel == 'Darrian' )       arr = darrian;
   if ( langsel == 'Droyne'  )       arr = droyne;
   if ( langsel == 'Guttural' )      arr = gut;
   if ( langsel == 'Gurvin' )        arr = gurvin;
   if ( langsel == 'Horn' )          arr = horn;
   if ( langsel == 'Ithklur' )       arr = ithklur;
   if ( langsel == 'K\'Kree' )       arr = kkree;
   if ( langsel == 'Kalaan' )        arr = chaldean;
   if ( langsel == 'Kursae' )        arr = kursae;
   if ( langsel == 'Laowon' )        arr = laowon;
   if ( langsel == 'Llellewyloly')   arr = llell;
   if ( langsel == 'Logaksu')        arr = logaksu;
   if ( langsel == 'Suerrat' )       arr = suerrat;
   if ( langsel == 'Sword Worlder' ) arr = swordy;
   if ( langsel == 'Sylean' )        arr = sylean;
   if ( langsel == 'Gvegh' )         arr = vargr;
   if ( langsel == 'Vuakedh' )       arr = vuakedh;
   if ( langsel == 'Vilani' )        arr = vil;
   if ( langsel == 'Virushi' )       arr = virushi;
   if ( langsel == 'Yiirabarhi' )    arr = yiira;
   if ( langsel == 'Zhodani' )       arr = zhodani;
   if ( langsel == 'Khazad' )        arr = khazad;
   if ( langsel == 'Tupi' )          arr = tupi;
   if ( langsel == 'Anglic' )        arr = anglic;
   if ( langsel == 'Sigka' )         arr = sigka;
   if ( langsel == 'Yali' )          arr = yali;
   if ( langsel == 'Vegan' )         arr = vegan;
}

setLanguage( 'Vilani' );

function randomSyllableIndex() { return Math.floor( Math.random() * 36 )  }
function randomLetterIndex()   { return Math.floor( Math.random() * 216 ) }

function makeWord( syllableCount )
{
   var word           = "";
   var syllableSource = arr.Basic;

   var markSyllables = document.lang.addSyllableMarker.checked;
   var consBound     = document.lang.consonantBound.checked;
   
   if ( consBound == true )
      syllableSource = arr.Alternate;
   
   if ( syllableCount < 1 )
      syllableCount = 1 + Math.floor( Math.random() * 6 );
   
   
   for( i = 0; i < syllableCount; i++ )
   {
      var syllable = syllableSource[ randomSyllableIndex() ]
      if ( i == syllableCount - 1 
        && consBound == true
        && syllable.match( /V$/ ) )
         syllable += 'C';
         
      if ( syllable.match( /^C/) )
         word += arr.Initial[ randomLetterIndex() ];

      word += arr.Vowel[ randomLetterIndex() ];

      if ( syllable.match( /C$/ ) )
         word += arr.Ending[ randomLetterIndex() ];        

      if ( markSyllables == true && i < syllableCount-1 )
         word += '.';
      
      syllableSource = arr.Alternate;
   }

   return word;
}


function prettifyWord( word )
{   
   if ( document.lang.alternateOrthography.checked == true )
   {
      word = word.replace( /sh/g, '�' ) // 'x' )
                 .replace( /kh/g, 'h' )
                 .replace( /aa/g, '�' )
                 .replace( /ii/g, '�' ) // '�' )
                 .replace( /uu/g, '�' )
                 .replace( /ee/g, '�' )
   }
   
   if ( document.lang.toUpperCase.checked == true )
      word = word.substring(0,1).toUpperCase()
           + word.substring(1);
   
   return word;
}

function erase()
{
   document.lang.out.value = "";
   document.lang.iter.value = "";
}

function validate()
{
   if ( ! document.lang.numSyllables.value )
      document.lang.numSyllables.value = -1;
      
   if ( ! document.lang.numWords.value )
      document.lang.numWords.value = 10;
   
   if ( ! document.lang.phraseLength.value )
      document.lang.phraseLength.value = 1;
      
   if ( ! document.lang.maxIter.value )
      document.lang.maxIter.value = 0;
      
   if ( ! document.lang.startSequence.value )
   {
      document.lang.startSequence.value = "";
      document.lang.maxIter.value = 1;
   }
   else
   {
      document.lang.startSequence.value = document.lang.startSequence.value.toLowerCase();
   }
}

function genWords()
{
   validate();
   
   var maxIter       = document.lang.maxIter.value;
   var startSequence = document.lang.startSequence.value;
   var numWords      = document.lang.numWords.value;
   var phraseLength  = document.lang.phraseLength.value;
   var numSyllables  = document.lang.numSyllables.value;
   var wordCount     = 0;
   
   var out           = document.lang.out;
   var iter          = document.lang.iter;
   
   if ( phraseLength == 1 && startSequence )
      genSequenceFast();
   else
   {
      for( var i = 0; i < numWords; i++ )
      {      
         for( var j = 0; j < maxIter; j++ )
         {
            var plen = phraseLength;
            if ( plen == -1 ) plen = parseInt( Math.random() * 6 + 1 );
            
            var wordString = "";
            for( var k = 0; k < plen; k++ )
               wordString += makeWord( numSyllables ) + " ";
                  
            if ( ! startSequence || startSequence == "" || wordString.indexOf( startSequence ) == 0 )
            {
               wordString = prettifyWord( wordString );       
               out.value += wordString + "\n";
               // j += maxIter;  // finished
               wordCount++;
               iter.value = wordCount + '/' + j;
            }           
            if ( j % 100 == 0 ) iter.value = wordCount + '/' + j;
         }  
         iter.value = wordCount + '/' + j;
      }  
      iter.value = wordCount + '/' + j;
   }
}

//
// tuned version of genWords()
//
// phraselength == 1 and startSequence exists.
//
function genSequenceFast()
{
   validate();
   
   var maxIter       = document.lang.maxIter.value;
   var startSequence = document.lang.startSequence.value;
   //var numWords      = document.lang.numWords.value;   
   var numSyllables  = document.lang.numSyllables.value;
   var wordCount     = 0;
   
   var out           = document.lang.out;
   var iter          = document.lang.iter;
   
   for( var j = 0; j < maxIter; j++ )
   {
      var wordString = makeWord( numSyllables, startSequence );
               
      if ( wordString.indexOf( startSequence ) == 0 )
      {
         wordString = prettifyWord( wordString );       
         out.value += wordString + "\n";
         wordCount++;
         //iter.value = wordCount + '/' + j;
      }           
      //if ( j % 1000 == 0 ) iter.value = wordCount + '/' + j;
   }  
   iter.value = wordCount + '/' + j;
}
