/* alert start */
$("#projs").hide();
$(document).ready(function(){
  $("#webS").on("click", function(){
    alert("Not ready yet");
  });

/* alert end */


/* slide start */

    $("#proj").on("click", function(){
        $(".container").fadeOut(1000);
        $("#projs").fadeIn(1000);
        $(".dot").hide();
    });

    $("#me").on("click", function(){
        $("#projs").fadeOut(1000);
        $(".container").fadeIn(1000);
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
/* slide end*/
