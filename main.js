$(document).ready(function() {


  // BURGER menu

     $(".burger-button").click(function(){
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });


     $(".burger-menu").click(function(){
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });


     $( document ).ready(function() {
     $(".dropdown-nav").click(function(){
         $(this).children(".dropdown-content").slideToggle("200");
       });
     });

//SLIDES
var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 8000);
  }

  var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  })
  .add({
    targets: '.ml9',
    opacity: 0,
    duration: 70000000000,
    easing: "easeOutExpo",
    delay: 1000
  });

});
