var toggle_toggleElements = [];
function toggle_init() 
{
   var target, 
       defaultexist = false,
       counter,
       link;

   //
   // loop through all links
   //
   for (var i = 0; (link = document.links[i]); i++) 
   {  
      //
      // looking for classes which include "toggle"
      //
      if (/\btoggle\b/.exec(link.className)) 
      { 
         var id = link.href.split('#')[1];
         target = document.getElementById(id);
         toggle_toggleElements[toggle_toggleElements.length] = target;
                  
         //
         //  if there's no default
         //
         if (defaultexist == false) 
         {  
            if (/\bshow\b/.exec(target.className)) //  this panel is already displayed
            {  
               link.className = "toggle on"; // then highlight the corresponding link
               defaultexist = true;          // and declare that we have a default
            }
         } 
         else // we have a default, so hide any extra "show" panels
         {
//            target.className = "panel hide"; 
            if (target) target.style.display = 'none';
         }
         
         link.onclick = toggle;  
         counter = document.links[i]; // save loc'n in the array of the last toggle link
      }
   }
      
   if (defaultexist == false) 
      if (target) 
      {
//         target.className = "panel show";  // turn on the last panel
         for (var i = 0; (link = document.links[i]); i++) // and loop through all links
            if (link.href == counter) // looking for the last toggle link
               link.className = link.className + " on";  // and highlight it
      }
}


function toggle(e) 
{
   /* We need to know which link was activated when the function was called
      this will allow us to identify the panel which should be displayed.
      Adapted from http://www.quirksmode.org/js/events_properties.html */

   var source;

   if (typeof e == 'undefined') 
      e = window.event;

   if (typeof e.target != 'undefined') 
      source = e.target;
   else if (typeof e.srcElement != 'undefined') 
      source = e.srcElement;
   else 
      return true;

   /* For most browsers, targ would now be a link element; Safari however
      returns a text node so we need to check the node type to make sure */
   if (source.nodeType == 3) 
      source = source.parentNode;
   
   var link;
   
   for (var i = 0; (link = document.links[i]); i++) 
   {
      if (/\btoggle\b/.exec(link.className)) 
      {
         link.className="toggle";
         link.id="unSelected";
      }
   }

   source.className="toggle on";
   source.id="wpSelected";

   var id = source.href.split('#')[1];
   var elem;
   
   for (var i = 0; (elem = toggle_toggleElements[i]); i++) 
   {
      if (elem.id != id) 
         elem.style.display = 'none';
      else 
         elem.style.display = 'block';
   }

   return false; // overrides the href for javascript-enabled browsers
}
 
/***************************************************************************************
 
 
 
*************************************XHTML**********************************************
 
<!--You can dress this up however you want to, I just gave it to you guys as an unordered list-->
<ul>
   <li><a href="#press" class="toggle">Press Releases</a></li>
   <li><a href="#case" class="toggle">Case Studies</a></li>
   <li><a href="#thought" class="toggle">Ideas and Innovations</a></li>
   <li><a href="#services" class="toggle">Industry Services</a></li>
</ul>
 
  <div id="press" class="show"> <!--show is the class to generate default view when page is refreshed-->
       <p><strong>Press Releases</strong></p>
       <p><a href="">asdf asdf asdf asdf</a></p>
       <p><a href="">asdf asdf asdf asdf</a></p>
       <p><a href="">asdf asdf asdf asdf</a></p>
  </div>
  <div id="case" class="hide">
       <p><strong>Case Studies</strong></p>
       <p><a href="">asdf asdf asdf asdf</a></p>
       <p><a href="">asdf asdf asdf asdf</a></p>
  </div>
  <div id="thought" class="hide">
       <p><strong>Ideas and Innovation</strong></p>
       <p><a href="">asdf asdf asdf asdf</a></p>
       <p><a href="">asdf asdf asdf asdfdedfsdf</a></p>
  </div>
  
  <div id="services" class="hide">
       <whatever you want, blah, blah, blah />
  </div>
  
*/