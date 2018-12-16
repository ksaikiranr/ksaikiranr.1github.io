
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');

    var typed = new Typed(".element", {
      strings: ["Hey, my name is K Sai Kiran", "a SDN/NFV Engineer...", "a Blockchain enthusiast... " , "breathing from Openstack cloud...", "FOSS Enthusiastic...", "Former ACM and CSI Member"],
      smartBackspace: true, // Default value
        typeSpeed: 60,
        starDelay: 300,
        backDelay: 600,
        loop: true,
        loopCount: Infinity,
        showCursor: true
    });
});
function collapseNavbar() {

    var posfadown = $("#last").offset().top;
    var posintro  = $("#page-top").offset().top+40;
    var posabout = $("#projects").offset().top-40;

    if($(window).scrollTop() >= posabout){
      //  $(".navbar-custom").css("position","fixed");
    //    $(".navbar-custom.top-nav-collapse").css("background-color","#154567");
        $("#return-to-top").fadeIn(250);
    //   $(".navbar-custom").css("background","#154567");
    //    $(".navbar-custom").css("display","block");

    }
    else if($(window).scrollTop()<posabout){
      // $(".navbar-custom").css("background","#154567");
    //    $(".navbar-nav").css("background","#154567");
      //  $(".navbar-custom").css("position","fixed");
        $("#return-to-top").fadeOut(250);
    }
}
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 850);
});

$(window).scroll(function(){
collapseNavbar();
    if( $(window).scrollTop()>=posskill)
        displaychart();
});

var posskill = $("#skills").offset().top;

function displaychart(){
    $('.chart').each(function(){
    $(this).easyPieChart({
            size:140,
            animate: 2000,
            lineCap:'butt',
            scaleColor: false,
            barColor: '#FF5252',
            trackColor: 'transparent',
            lineWidth: 10
        });
    });
}
$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
});
$(document).ready(function(){
    //var h=$("#page-top").height();
    //console.log(h);
    //$("#home-over").css("height",785);
    //console.log($("#home-over").height());
})
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
