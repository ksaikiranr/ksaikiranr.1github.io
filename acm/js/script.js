
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


      function initMap() {

          var location = new google.maps.LatLng(15.1575133,76.8890518);

          var mapCanvas = document.getElementById('map');
          var mapOptions = {
              center: location,
              zoom: 13,
              panControl: false,
              scrollwheel: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(mapCanvas, mapOptions);

          var markerImage = 'map-marker-icon.png';

          var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon: markerImage
          });

          var contentString = '<div class="info-window">' +
                  '<center><h4>NUST SEECS</h4></center>' +
                  '<div class="info-content">' +
                  '<p style="font-size:10px;">CSE RYMEC BELLARY</p>' +
                  '</div>' +
                  '</div>';

          var infowindow = new google.maps.InfoWindow({
              content: contentString,
              maxWidth: 400
          });


          infowindow.open(map, marker);

          marker.addListener('click', function () {
              infowindow.open(map, marker);
          });


          var styles =  [{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#165c64"},{"saturation":34},{"lightness":-69},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#b7caaa"},{"saturation":-14},{"lightness":-18},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"hue":"#cbdac1"},{"saturation":-6},{"lightness":-9},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#8d9b83"},{"saturation":-89},{"lightness":-12},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#d4dad0"},{"saturation":-88},{"lightness":54},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#bdc5b6"},{"saturation":-89},{"lightness":-3},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#bdc5b6"},{"saturation":-89},{"lightness":-26},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"hue":"#c17118"},{"saturation":61},{"lightness":-45},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"hue":"#8ba975"},{"saturation":-46},{"lightness":-28},{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"hue":"#a43218"},{"saturation":74},{"lightness":-51},{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#3a3935"},{"saturation":5},{"lightness":-57},{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"hue":"#cba923"},{"saturation":50},{"lightness":-46},{"visibility":"on"}]}];

          map.set('styles', styles);


      }

      google.maps.event.addDomListener(window, 'load', initMap);


});
