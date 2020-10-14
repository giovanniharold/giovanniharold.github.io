window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar")

function scrollFunction() {
  if (document.body.scrollTop > 20 || (document.documentElement.scrollTop > (window.innerHeight - 30))) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}

function flip1() {
  var x = 1;
  if ((x % 2) == 0) {
    document.getElementById('portrait').src="images/PurdueEngineeringLogo.png"
  }
  if ((x % 2) == 1) {
    document.getElementById('portrait').src="images/Portrait_2.jpg"
  }
  $('#cardOne').toggleClass('flipped')
  var x = x + 1;
}

function flip2() {
  $('#cardTwo').toggleClass('flipped')

}

function flip3() {
  $('#cardThree').toggleClass('flipped')
}

function flip4() {
  $('#cardFour').toggleClass('flipped')
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});