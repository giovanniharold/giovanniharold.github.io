// window.onscroll = function() {scrollFunction()};

// var navbar = document.getElementById("navbar")

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || (document.documentElement.scrollTop > (window.innerHeight - 30))) {
//     document.getElementById("navbar").style.top = "0px";
//     document.getElementById("navbar").style.position = "fixed";
//   } else {
//     document.getElementById("navbar").style.top = "-60px";
//   }
// }

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

$(document).ready(function() {
  $("#navmenu > ul > li").click(function(){
      $("#navmenu > ul > li").each(function(){
          $(this).removeClass("active");
      });
      $(this).addClass('active');
      
  });
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}