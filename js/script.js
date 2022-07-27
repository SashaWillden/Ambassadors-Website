// *** The code below was created, hard coded by Sasha Willden. Copyright 2019, all rights reserved of the creator of the created codes. *** //


// Nav bar for menu-icon from flex box in Jquery plugin for this Javascript allowing the user to toggle the Nav bar
$(document).ready(function(){ //Jquery document function ready
	$(".menu-icon").on("click", function(){ // Jquery for HTML Div menu-icon for on click function
		$("nav ul").toggleClass("showing"); // Jquery for HTML Div/CSS when toggle for showing the Nav
	}); // Closing first line of iteration for menu-icon on click function
}); // Closing second line of iteration toggle variable for showing


// Nav bar for pull-me and panel from flex box in Jquery plugin for this Javascript allowing the user to untoggle the Nav Bar in slow
$(document).ready(function() { //Jquery document function ready
    $('.pull-me').click(function() { // Jquery for HTML Div pull-me for on click function
        $('.panel').slideToggle('slow'); // Jquery for HTML Div/CSS panel when toggled down in slow motion of the Nav
    }); // Closing first line of iteration for pull-me on click function
}); // Closing second line of iteration panel toggle variable for slow


// Javascript for family font change from Nav in the body of the html page
function changeFontFamily(fontFam) // Function for Javascript to change Font Family on fontFam
{
document.getElementById("familyfont").style.fontFamily = fontFam; // Document to get ID in HTML of familyfont, for the style and fontFamily
}; // Closing Javascript document


//  Javascript for background colour change from Nav in the body of the html page
function bgChange(bg) { // Function for Javascript to change bg
    document.body.style.background = bg; // Document to get body style of background in HTML of ID
} // Closing Javascript document


// Javascript for resize Text to increase and decrease the text size of multiplier in the html page
function resizeText(multiplier) { // Function for Javascript resizeText inside function for multiplier
  if (document.getElementById('main-content').style.fontSize == "") { // If the Javascript document ID main-content in body is styled fontSize equal to auto
    document.getElementById('main-content').style.fontSize = "1.0em"; // Else allow Javascript document ID main-content in body is styled fontSize to be 1 em
  } // Closing First if and else statement in Javascript document
  document.getElementById('main-content','h1','h2','h3','h4').style.fontSize = parseFloat(document.getElementById('main-content').style.fontSize) + (multiplier * 0.2) + "em";
    // The main-content in body style FontSize to get these float size by multiplying by 0.2 with em in the Nav for the text to increase and decrease
} // Close Second Javascript document



// Below are the functions for background colour of text change from in body in the main-content
function turnred() { // Function for Javascript turnred
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById("main-content"); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "red"; // The variable myPara is styled to a colour equalling to the colour red
} // Closing Javascript document and function


function turnblack() { // Function for Javascript turnblack
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById('main-content'); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "black"; // The variable myPara is styled to a colour equalling to the colour black
} // Closing Javascript document and function


function turngreen() { // Function for Javascript turngreen
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById('main-content'); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "green"; // The variable myPara is styled to a colour equalling to the colour green
} // Closing Javascript document and function


function turnblue() { // Function for Javascript turnblue
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById('main-content'); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "blue"; // The variable myPara is styled to a colour equalling to the colour blue
}; // Closing Javascript document and function

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.5074, lng: 0.1278},
          zoom: 11,
          mapTypeId:google.maps.MapTypeId.ROADMAP 
        });
        map.setTilt(45);
      }


