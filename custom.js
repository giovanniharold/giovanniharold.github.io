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



// window.addEventListener('DOMContentLoaded', () => {

//   const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//   const id = entry.target.getAttribute('id');
//   if (entry.intersectionRatio > 0) {
//   document.querySelector(`#navmenu li a[href="#${id}"]`).parentElement.classList.add('active');
//   } else {
//   document.querySelector(`#navmenu li a[href="#${id}"]`).parentElement.classList.remove('active');
//   }
//   });
//   });
  
//   // Track all sections that have an `id` applied
//   document.querySelectorAll('section[id]').forEach((section) => {
//   observer.observe(section);
//   });
  
// });


window.onload = function() {
  scrollFunction();
  window.onscroll = function() {
    scrollFunction();
  }
}



function scrollFunction() {
  var top = $("#top").offset();
  var aboutSection = $("#aboutSection").offset();
  var skillSection = $("#skillSection").offset();
  var projectSection = $("#projectSection").offset();
  var contactSection = $("#contactSection").offset();
  var height = $(window).scrollTop();

  // alert("Top: " + top.top + 
  //       "\nAbout: " + aboutSection.top + 
  //       "\nSkill: " + skillSection.top + 
  //       "\nProject: " + projectSection.top + 
  //       "\nContact: " + contactSection.top +
  //       "\nCurrent: " + height);


  if (height < aboutSection.top) {
    document.getElementById("aTitle").innerHTML = "Home";
    document.querySelector('#navmenu li a[href="#top"]').parentElement.classList.add('active');
    document.querySelector('#navmenu li a[href="#aboutSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#skillSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#projectSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#contactSection"]').parentElement.classList.remove('active');

    document.querySelector('#topnav a[href="#top"]').classList.add('active');
    document.querySelector('#topnav a[href="#aboutSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#skillSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#projectSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#contactSection"]').classList.remove('active');
  } else if ((aboutSection.top - parseInt(100)) <= height && height < skillSection.top) {
    document.getElementById("aTitle").innerHTML = "About";
    document.querySelector('#navmenu li a[href="#top"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#aboutSection"]').parentElement.classList.add('active');
    document.querySelector('#navmenu li a[href="#skillSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#projectSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#contactSection"]').parentElement.classList.remove('active');

    document.querySelector('#topnav a[href="#top"]').classList.remove('active');
    document.querySelector('#topnav a[href="#aboutSection"]').classList.add('active');
    document.querySelector('#topnav a[href="#skillSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#projectSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#contactSection"]').classList.remove('active');
  } else if (skillSection.top <= height && height < projectSection.top) {
    document.getElementById("aTitle").innerHTML = "Skills";
    document.querySelector('#navmenu li a[href="#top"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#aboutSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#skillSection"]').parentElement.classList.add('active');
    document.querySelector('#navmenu li a[href="#projectSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#contactSection"]').parentElement.classList.remove('active');

    document.querySelector('#topnav a[href="#top"]').classList.remove('active');
    document.querySelector('#topnav a[href="#aboutSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#skillSection"]').classList.add('active');
    document.querySelector('#topnav a[href="#projectSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#contactSection"]').classList.remove('active');
  } else if (projectSection.top <= height && height< contactSection.top) {
    document.getElementById("aTitle").innerHTML = "Projects";
    document.querySelector('#navmenu li a[href="#top"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#aboutSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#skillSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#projectSection"]').parentElement.classList.add('active');
    document.querySelector('#navmenu li a[href="#contactSection"]').parentElement.classList.remove('active');

    document.querySelector('#topnav a[href="#top"]').classList.remove('active');
    document.querySelector('#topnav a[href="#aboutSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#skillSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#projectSection"]').classList.add('active');
    document.querySelector('#topnav a[href="#contactSection"]').classList.remove('active');
  } else {
    document.getElementById("aTitle").innerHTML = "Contact";
    document.querySelector('#navmenu li a[href="#top"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#aboutSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#skillSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#projectSection"]').parentElement.classList.remove('active');
    document.querySelector('#navmenu li a[href="#contactSection"]').parentElement.classList.add('active');

    document.querySelector('#topnav a[href="#top"]').classList.remove('active');
    document.querySelector('#topnav a[href="#aboutSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#skillSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#projectSection"]').classList.remove('active');
    document.querySelector('#topnav a[href="#contactSection"]').classList.add('active');
  }
  setTimeout(function() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }, 1800);

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
      }, 1500, function(){
   
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