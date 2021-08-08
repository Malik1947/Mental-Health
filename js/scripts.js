
  // Automatic Slideshow - changes image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


// CONTACT Form validation code Below.
function validate() {
      
   if( document.myForm.Name.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
         return false;
      }
   if( document.myForm.phoneNumber.value == "" ) {
        alert( "Please provide your phomeNumber!" );
        document.myForm.phoneNumber.focus() ;
        return false;
      }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
      }

    if( document.myForm.message.value == "" ) {
       alert( "Please provide your message!" );
       document.myForm.message.focus() ;
       return false;
      }
       alert( "thanks for your feedback!" );
       return( true );
       alert( "thanks for your feedback!" );
      }

//Use javascript for this show/hide functionality


function toggle() {
    var ele = document.getElementById("toggleText");
    var text = document.getElementById("displayText");

    if(ele.style.display == "block") {
            ele.style.display = "none"; 
    }
    else {
        ele.style.display = "block";
    }
} 


function toggle2() {
    var ele = document.getElementById("toggleText2");
    var text = document.getElementById("displayText2");
    
    if(ele.style.display == "block") {
            ele.style.display = "none"; 
    }
    else {
        ele.style.display = "block";
    }
} 



function toggle3() {
    var ele = document.getElementById("toggleText3");
    var text = document.getElementById("displayText3");
    
    if(ele.style.display == "block") {
            ele.style.display = "none"; 
    }
    else {
        ele.style.display = "block";
    }
} 


function toggle4() {
    var ele = document.getElementById("toggleText4");
    var text = document.getElementById("displayText4");
    
    if(ele.style.display == "block") {
            ele.style.display = "none"; 
    }
    else {
        ele.style.display = "block";
    }
} 

function toggle5() {
    var ele = document.getElementById("toggleText5");
    var text = document.getElementById("displayText5");
    
    if(ele.style.display == "block") {
            ele.style.display = "none"; 
    }
    else {
        ele.style.display = "block";
    }
} 


function toggle6() {
    var ele = document.getElementById("toggleText6");
    var text = document.getElementById("displayText6");
    
    if(ele.style.display == "block") {
            ele.style.display = "none"; 
    }
    else {
        ele.style.display = "block";
    }
} 
