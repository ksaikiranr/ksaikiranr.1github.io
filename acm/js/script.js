
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(".toggle-icon").click(function() {
  $('.navbar-toggle').toggleClass("pushed");
});

//alert("The site is still under construction. If you happen to find any errors write to the developer.");

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 850);
});

$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
    $('.navbar-toggle').toggleClass("pushed");
});

$(window).on('load', function() {
    $('#loader').fadeOut();
    $('#loader-wrapper').delay(300).fadeOut('slow');
});
function findlen(){
    var posabout = $("#about").offset().top-40;
    //console.log(posabout);

    if($(window).scrollTop() >= posabout){
      //  console.log("In if for len: "+posabout);
         $("#return-to-top").fadeIn(250);
    }
    else{
        //console.log("In else for len: "+posabout);
         $("#return-to-top").fadeOut(250);
    }
}

$(window).scroll(function(){
findlen();
});

$(document).ready(function(){

    var contactHeight = $( "#contact" ).height();
    $("#particles-js").css("height",contactHeight+"px");
    console.log("height "+contactHeight);

  $('.slider1').bxSlider({
    slideWidth: 500,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10
  });

});
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });

});
