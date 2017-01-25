
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//alert("The site is still under construction. If you happen to find any errors write to the developer.");

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 850);
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
  $('.slider1').bxSlider({
    slideWidth: 500,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10
  });
    
});

