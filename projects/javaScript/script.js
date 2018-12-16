$(document).ready(function(){
    
    
    $('ul#gallery li').on('mouseenter',function(){
       //getting data attri values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        
        //Validation of colllected attri
        if(desc == null){
            desc = 'Click to Enlarge';
        }
        
        if(title == null){
            title = '';
        }
        
        //create overlay
        $(this).children('.oas').addClass('.overlay');
        //Getting overlay div
        var overlay=$(this).children('.oas');
        //Adding html to overlay 
        overlay.html('<h3>'+title+'<p>'+desc+'</p>');
        
        //overlay graphic
        overlay.fadeIn(800);
    
    });
    
    //Mouse leave overloay
    
    $('ul#gallery li').on('mouseleave',function(){
        
        //Getting overlay div
        var overlay=$(this).children('.oas');
        //Fadeout animation for overlay on mouse leave
        overlay.fadeOut(140);
        overlay.html('');
        $(this).children('.overlay').removeClass('.overlay');
    });
    
});