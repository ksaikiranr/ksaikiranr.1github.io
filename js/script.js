function collapseNavbar() {

    var posfadown = $("#last").offset().top;
    var posintro  = $("#page-top").offset().top+40;
    var posabout = $("#about").offset().top-40;
    
    if($(window).scrollTop() >= posabout){
        $(".navbar-custom").css("position","fixed");
        $(".navbar-custom.top-nav-collapse").css("background-color","#154567");
        $("#return-to-top").fadeIn(250);
    }
    else if($(window).scrollTop()<posabout){
        $(".navbar-custom").css("position","static");
        $("#return-to-top").fadeOut(250);
    }
}
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 650);
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